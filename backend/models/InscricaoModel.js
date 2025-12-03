import { getConnection } from "../config/database.js";

class InscricaoModel {

    // Criar inscrição
    static async criar({ usuario_id, treinamento_id }) {
        const connection = await getConnection();
        try {
            const sql = `
                INSERT INTO inscricoes (usuario_id, treinamento_id, data_inscricao)
                VALUES (?, ?, NOW())
            `;
            const [result] = await connection.query(sql, [usuario_id, treinamento_id]);
            return { id: result.insertId, usuario_id, treinamento_id };
        } finally {
            connection.release();
        }
    }

    // Listar inscrições de um usuário específico 
    static async listarPorUsuario(usuario_id) {
        const connection = await getConnection();
        try {
            const sql = `
                SELECT 
                    i.id AS inscricao_id,
                    t.id AS curso_id,
                    t.titulo,
                    t.categoria,
                    t.duracao_horas,
                    t.modalidade,
                    t.nivel,
                    i.status,
                    i.data_conclusao,
                    i.data_inscricao,
                    0 AS progresso -- O banco ainda não tem essa coluna, fixamos em 0 por enquanto
                FROM inscricoes i
                INNER JOIN treinamentos t ON i.treinamento_id = t.id
                WHERE i.usuario_id = ?
                ORDER BY i.data_inscricao DESC
            `;

            const [rows] = await connection.query(sql, [usuario_id]);
            return rows;
        } finally {
            connection.release();
        }
    }

    // Listar com JOIN para trazer nomes
    static async listar() {
        const connection = await getConnection();
        try {
            const sql = `
        SELECT 
        i.id,
        u.nome AS usuario,
        t.titulo AS treinamento,
        i.data_inscricao,
        i.status,          
        i.data_conclusao
        FROM inscricoes i
        JOIN usuarios u ON i.usuario_id = u.id
        JOIN treinamentos t ON i.treinamento_id = t.id
        WHERE u.nivel_acesso = 'Colaborador'
        ORDER BY i.id DESC
        `;

            const [rows] = await connection.query(sql);
            return rows;

        } finally {
            connection.release();
        }
    }

    // Excluir inscrição
    static async excluir(id) {
        const connection = await getConnection();
        try {
            const sql = `DELETE FROM inscricoes WHERE id = ?`;
            await connection.query(sql, [id]);
            return true;

        } finally {
            connection.release();
        }
    }
}

export default InscricaoModel;
