import InscricaoModel from "../models/InscricaoModel.js";
import { getConnection } from "../config/database.js";

class InscricaoController {

    // Criar inscrição
    static async criar(req, res) {
        try {
            const { usuario_id, treinamento_id } = req.body;

            const novaInscricao = await InscricaoModel.criar({
                usuario_id,
                treinamento_id
            });

            return res.status(201).json({
                mensagem: "Inscrição criada com sucesso!",
                inscricao: novaInscricao
            });

        } catch (error) {
            console.error("Erro ao criar inscrição:", error);
            return res.status(500).json({ erro: "Erro ao criar inscrição" });
        }

        const user = await UsuarioModel.buscarPorId(usuario_id);

        if (user.nivel_acesso !== "Colaborador") {
            return res.status(403).json({
                erro: "Administradores não podem se inscrever em cursos."
            });
        }
    }

    static async listarPorUsuario(req, res) {
        try {
            const { id } = req.params;

            // Chama o método do Model que criamos acima
            const inscricoes = await InscricaoModel.listarPorUsuario(id);
            
            // Retorna no formato que o frontend espera
            return res.status(200).json({
                sucesso: true,
                dados: inscricoes
            });

        } catch (error) {
            console.error("Erro ao listar inscrições do usuário:", error);
            return res.status(500).json({ 
                sucesso: false, 
                erro: "Erro ao buscar treinamentos do usuário." 
            });
        }
    }

    // Marcar inscrição como Concluída
    static async concluir(req, res) {
        let conn;
        try {
            const { id } = req.params; // O ID que vem da URL

            // Validação simples
            if (!id || id === 'undefined') {
                return res.status(400).json({ erro: "ID da inscrição inválido." });
            }

            conn = await getConnection();

            // Atualiza status e data
            const sql = `
                UPDATE inscricoes 
                SET status = 'Concluído', data_conclusao = NOW() 
                WHERE id = ?
            `;
            
            const [result] = await conn.query(sql, [id]);
            
            // Verifica se alguma linha foi afetada
            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: "Inscrição não encontrada ou já concluída." });
            }

            return res.status(200).json({ 
                sucesso: true, 
                mensagem: "Parabéns! Curso concluído." 
            });

        } catch (error) {
            console.error("Erro ao concluir:", error);
            return res.status(500).json({ erro: "Erro ao concluir curso" });
        } finally {
            if (conn) conn.release();
        }
    }

    // Listar inscrições
    static async listar(req, res) {
        try {
            const inscricoes = await InscricaoModel.listar();
            return res.status(200).json(inscricoes);

        } catch (error) {
            console.error("Erro ao listar inscrições:", error);
            return res.status(500).json({ erro: "Erro ao listar inscrições" });
        }
    }

    // Excluir inscrição
    static async excluir(req, res) {
        try {
            const { id } = req.params;

            await InscricaoModel.excluir(id);

            return res.status(200).json({ mensagem: "Inscrição excluída com sucesso!" });

        } catch (error) {
            console.error("Erro ao excluir inscrição:", error);
            return res.status(500).json({ erro: "Erro ao excluir inscrição" });
        }
    }
}

export default InscricaoController;
