import { getConnection } from "../config/database.js";

class InscricaoModel {

    // Buscar inscrição pelo ID
    static async buscarPorId(id) {
        const conn = await getConnection();

        const sql = `
            SELECT i.*, 
                u.nome AS colaborador_nome,
                u.email AS colaborador_email,
                u.cargo,
                u.departamento,
                u.unidade,
                t.titulo AS treinamento_titulo,
                t.descricao AS treinamento_descricao,
                t.categoria,
                t.carga_horaria
            FROM inscricoes i
            JOIN usuarios u ON u.id = i.colaborador_id
            JOIN treinamentos t ON t.id = i.treinamento_id
            WHERE i.id = ?;
        `;

        const [rows] = await conn.query(sql, [id]);
        conn.release();

        return rows[0] || null;
    }

    // Editar inscrição
    static async editar(id, dados) {
        const conn = await getConnection();

        const sql = `
            UPDATE inscricoes SET 
                status = ?, 
                observacao = ?
            WHERE id = ?
        `;

        const [result] = await conn.query(sql, [
            dados.status,
            dados.observacao,
            id
        ]);

        conn.release();
        return result;
    }

    // Remover inscrição
    static async remover(id) {
        const conn = await getConnection();
        const [result] = await conn.query("DELETE FROM inscricoes WHERE id = ?", [id]);
        conn.release();
        return result;
    }
}

export default InscricaoModel;
