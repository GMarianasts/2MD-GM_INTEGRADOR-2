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

    // Listar com JOIN para trazer nomes
    static async listar() {
        const connection = await getConnection();
        try {
            const sql = `
        SELECT 
        i.id,
        u.nome AS usuario,
        t.titulo AS treinamento,
        i.data_inscricao
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
