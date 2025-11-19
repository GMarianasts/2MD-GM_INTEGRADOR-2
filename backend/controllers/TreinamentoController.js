import { getConnection } from '../config/database.js';

// GET
export const listarTreinamentos = async (req, res) => {
    try {
        const conn = await getConnection();
        const sql = `
            SELECT t.*, GROUP_CONCAT(c.nome) as competencias_lista
            FROM treinamentos t
            LEFT JOIN treinamento_competencia tc ON t.id = tc.treinamento_id
            LEFT JOIN competencias c ON tc.competencia_id = c.id
            GROUP BY t.id
            ORDER BY t.created_at DESC
        `;
        const [rows] = await conn.query(sql);
        conn.release();

        const dados = rows.map(row => ({
            ...row,
            competencias: row.competencias_lista ? row.competencias_lista.split(',') : []
        }));

        res.json({ sucesso: true, dados });
    } catch (error) {
        console.error(error);
        res.status(500).json({ erro: 'Erro ao buscar' });
    }
};

// POST
export const criarTreinamento = async (req, res) => {
    const conn = await getConnection();
    try {
        const dados = req.body;

        // Query de Inserção
        const sql = `
            INSERT INTO treinamentos 
            (titulo, categoria, descricao, nivel, duracao_horas, capacidade, 
            instrutor_nome, instrutor_email, modalidade, local_plataforma, 
            data_inicio, data_fim, inscricao_inicio, inscricao_fim, 
            pre_requisitos, observacoes, status)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            dados.titulo, dados.categoria, dados.descricao, dados.nivel, dados.duracao, dados.capacidade,
            dados.instrutorNome, dados.instrutorEmail, dados.modalidade, dados.local,
            dados.dataInicio, dados.dataFim, dados.inscricaoInicio, dados.inscricaoFim,
            dados.preRequisitos, dados.observacoes, 'Ativo'
        ];

        const [result] = await conn.query(sql, values);
        const novoId = result.insertId;

        // Salvar competências (separadas por vírgula)
        if (dados.competenciasTexto) {
            const tags = dados.competenciasTexto.split(',').map(t => t.trim());
            
            for (const tag of tags) {
                // Tenta achar a competencia, se nao existir, cria
                let [rows] = await conn.query('SELECT id FROM competencias WHERE nome = ?', [tag]);
                let tagId;
                
                if (rows.length > 0) {
                    tagId = rows[0].id;
                } else {
                    const [resTag] = await conn.query('INSERT INTO competencias (nome) VALUES (?)', [tag]);
                    tagId = resTag.insertId;
                }
                
                // Linka na tabela de junção
                await conn.query('INSERT INTO treinamento_competencia VALUES (?, ?)', [novoId, tagId]);
            }
        }

        conn.release();
        res.status(201).json({ sucesso: true, mensagem: 'Treinamento criado!', id: novoId });

    } catch (error) {
        conn.release();
        console.error(error);
        res.status(500).json({ erro: 'Erro ao criar treinamento' });
    }
};