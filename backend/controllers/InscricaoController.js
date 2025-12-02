import InscricaoModel from "../models/InscricaoModel.js";
import UsuarioModel from "../models/UsuarioModel.js";
import { getConnection } from "../config/database.js";
import { registrarHistorico } from "../utils/historico.js";

class InscricaoController {

    // Criar inscrição
    static async criar(req, res) {
        try {
            const { usuario_id, treinamento_id } = req.body;

            // Buscar usuário antes de criar inscrição
            const user = await UsuarioModel.buscarPorId(usuario_id);

            if (!user) {
                return res.status(404).json({ erro: "Usuário não encontrado." });
            }

            if (user.nivel_acesso !== "Colaborador") {
                return res.status(403).json({
                    erro: "Administradores não podem se inscrever em cursos."
                });
            }

            // Criar inscrição
            const novaInscricao = await InscricaoModel.criar({
                usuario_id,
                treinamento_id
            });

            // Registrar no histórico
            await registrarHistorico(
                "Criar Inscrição",
                `Usuário ${user.nome} se inscreveu no treinamento ${treinamento_id}.`,
                usuario_id
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

    // Listar inscrições por usuário
    static async listarPorUsuario(req, res) {
        try {
            const { id } = req.params;

            const inscricoes = await InscricaoModel.listarPorUsuario(id);

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

    // Concluir inscrição
    static async concluir(req, res) {
        let conn;
        try {
            const { id } = req.params;

            if (!id || id === 'undefined') {
                return res.status(400).json({ erro: "ID da inscrição inválido." });
            }

            conn = await getConnection();

            const sql = `
                UPDATE inscricoes 
                SET status = 'Concluído', data_conclusao = NOW() 
                WHERE id = ?
            `;

            const [result] = await conn.query(sql, [id]);

            if (result.affectedRows === 0) {
                return res.status(404).json({ erro: "Inscrição não encontrada ou já concluída." });
            }

            // Registrar no histórico
            await registrarHistorico(
                "Concluir Inscrição",
                `A inscrição ID ${id} foi concluída.`,
                req.usuarioId || null
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

    // Listar todas inscrições
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

            // Registrar no histórico
            await registrarHistorico(
                "Excluir Inscrição",
                `A inscrição ID ${id} foi excluída.`,
                req.usuarioId || null
            );

            return res.status(200).json({ mensagem: "Inscrição excluída com sucesso!" });

        } catch (error) {
            console.error("Erro ao excluir inscrição:", error);
            return res.status(500).json({ erro: "Erro ao excluir inscrição" });
        }
    }
}

export default InscricaoController;
