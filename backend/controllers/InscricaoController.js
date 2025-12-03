import InscricaoModel from "../models/InscricaoModel.js";
import UsuarioModel from "../models/UsuarioModel.js";
import { registrarHistorico } from "../utils/historico.js";

class InscricaoController {

    // Criar inscrição
    static async criar(req, res) {
        try {
            const { usuario_id, treinamento_id } = req.body;

            // Buscar usuário
            const user = await UsuarioModel.buscarPorId(usuario_id);
            if (!user) return res.status(404).json({ erro: "Usuário não encontrado." });

            if (user.nivel_acesso !== "Colaborador") {
                return res.status(403).json({ erro: "Administradores não podem se inscrever em cursos." });
            }

            // Criar inscrição
            const novaInscricao = await InscricaoModel.criar({ usuario_id, treinamento_id });

            // Buscar título do curso
            const curso = await InscricaoModel.buscarCursoPorId(treinamento_id);

            // Registrar no histórico
            await registrarHistorico(
                "Inscrição criada",
                `O colaborador "${user.nome}" se inscreveu no curso "${curso.titulo}".`,
                req.usuarioId || "Sistema"
            );

            return res.status(201).json({
                mensagem: "Inscrição criada com sucesso!",
                inscricao: novaInscricao
            });

        } catch (error) {
            console.error("Erro ao criar inscrição:", error);
            return res.status(500).json({ erro: "Erro ao criar inscrição" });
        }
    }

    // Concluir inscrição
    static async concluir(req, res) {
        let conn;
        try {
            const { id } = req.params;
            if (!id) return res.status(400).json({ erro: "ID da inscrição inválido." });

            // Buscar inscrição e dados do usuário/curso antes de concluir
            const inscricao = await InscricaoModel.buscarPorId(id);
            if (!inscricao) return res.status(404).json({ erro: "Inscrição não encontrada." });

            conn = await InscricaoModel.getConnection();
            await conn.query(
                `UPDATE inscricoes SET status='Concluído', data_conclusao=NOW() WHERE id=?`,
                [id]
            );
            conn.release();

            // Registrar no histórico
            await registrarHistorico(
                "Inscrição concluída",
                `O colaborador "${inscricao.usuario}" concluiu o curso "${inscricao.treinamento}".`,
                req.usuarioId || "Sistema"
            );

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

    // Excluir inscrição
    static async excluir(req, res) {
        try {
            const { id } = req.params;

            // Buscar inscrição antes de excluir
            const inscricao = await InscricaoModel.buscarPorId(id);
            if (!inscricao) return res.status(404).json({ erro: "Inscrição não encontrada." });

            await InscricaoModel.excluir(id);

            // Registrar histórico
            await registrarHistorico(
                "Inscrição excluída",
                `A inscrição do colaborador "${inscricao.usuario}" no curso "${inscricao.treinamento}" foi excluída.`,
                req.usuarioId || "Sistema"
            );

            return res.status(200).json({ mensagem: "Inscrição excluída com sucesso!" });

        } catch (error) {
            console.error("Erro ao excluir inscrição:", error);
            return res.status(500).json({ erro: "Erro ao excluir inscrição" });
        }
    }

}

export default InscricaoController;
