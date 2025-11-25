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

        const sql = `
            INSERT INTO treinamentos 
            (titulo, categoria, descricao, nivel, duracao_horas, capacidade, 
            instrutor_nome, instrutor_email, modalidade, local_plataforma, 
            data_inicio, data_fim, inscricao_inicio, inscricao_fim, 
            pre_requisitos, observacoes, status, sobre, objetivos)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const values = [
            dados.titulo, dados.categoria, dados.descricao, dados.nivel, dados.duracao, dados.capacidade,
            dados.instrutorNome, dados.instrutorEmail, dados.modalidade, dados.local,
            dados.dataInicio, dados.dataFim, dados.inscricaoInicio, dados.inscricaoFim,
            dados.preRequisitos, dados.observacoes, dados.status, dados.sobre, dados.objetivos
        ];

        const [result] = await conn.query(sql, values);
        const novoId = result.insertId;

        if (dados.competenciasTexto) {
            const tags = dados.competenciasTexto.split(',').map(t => t.trim());

            for (const tag of tags) {
                let [rows] = await conn.query('SELECT id FROM competencias WHERE nome = ?', [tag]);
                let tagId;

                if (rows.length > 0) {
                    tagId = rows[0].id;
                } else {
                    const [resTag] = await conn.query('INSERT INTO competencias (nome) VALUES (?)', [tag]);
                    tagId = resTag.insertId;
                }

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

// DELETE
export const excluirTreinamento = async (req, res) => {
    const conn = await getConnection();
    try {
        const { id } = req.params;
        const sql = 'DELETE FROM treinamentos WHERE id = ?';

        await conn.query(sql, [id]);

        conn.release();
        return res.status(200).json({ sucesso: true, mensagem: 'Treinamento excluído com sucesso' });

    } catch (error) {
        conn.release();
        console.error('Erro ao excluir:', error);
        return res.status(500).json({ sucesso: false, erro: 'Erro ao excluir treinamento' });
    }
};

// PUT
export const atualizarTreinamento = async (req, res) => {
    const conn = await getConnection();
    try {
        const { id } = req.params;
        const dados = req.body;

        const sql = `
            UPDATE treinamentos SET
            titulo=?, categoria=?, descricao=?, nivel=?, duracao_horas=?, capacidade=?, 
            instrutor_nome=?, instrutor_email=?, modalidade=?, local_plataforma=?, 
            data_inicio=?, data_fim=?, inscricao_inicio=?, inscricao_fim=?, 
            pre_requisitos=?, observacoes=?, status=?, sobre=?, objetivos=?
            WHERE id=?
        `;

        const values = [
            dados.titulo, dados.categoria, dados.descricao, dados.nivel, dados.duracao, dados.capacidade,
            dados.instrutorNome, dados.instrutorEmail, dados.modalidade, dados.local,
            dados.dataInicio, dados.dataFim, dados.inscricaoInicio, dados.inscricaoFim,
            dados.preRequisitos, dados.observacoes, dados.status, dados.sobre, dados.objetivos,
            id
        ];

        await conn.query(sql, values);

        if (dados.competenciasTexto) {
            await conn.query('DELETE FROM treinamento_competencia WHERE treinamento_id = ?', [id]);

            const tags = dados.competenciasTexto.split(',').map(t => t.trim());
            for (const tag of tags) {
                let [rows] = await conn.query('SELECT id FROM competencias WHERE nome = ?', [tag]);
                let tagId;
                if (rows.length > 0) {
                    tagId = rows[0].id;
                } else {
                    const [resTag] = await conn.query('INSERT INTO competencias (nome) VALUES (?)', [tag]);
                    tagId = resTag.insertId;
                }
                await conn.query('INSERT INTO treinamento_competencia VALUES (?, ?)', [id, tagId]);
            }
        }

        conn.release();
        res.json({ sucesso: true, mensagem: 'Treinamento atualizado!' });

    } catch (error) {
        conn.release();
        console.error(error);
        res.status(500).json({ erro: 'Erro ao atualizar' });
    }
};

// contagem de treinamentos ativo para a pagina -> Dashboard admin
export const contarTreinamentosAtivos = async (req, res) => {
    const conn = await getConnection();
    try {
        const sql = `
            SELECT COUNT(*) AS total
            FROM treinamentos
            WHERE status = 'ativo'
        `;

        const [rows] = await conn.query(sql);
        conn.release();

        res.json({
            sucesso: true,
            totalAtivos: rows[0].total
        });

    } catch (error) {
        conn.release();
        res.status(500).json({
            sucesso: false,
            erro: error.message
        });
    }
};