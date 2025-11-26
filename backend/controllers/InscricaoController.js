import InscricaoModel from "../models/InscricaoModel.js";

class InscricaoController {

    static async visualizar(req, res) {
        try {
            const { id } = req.params;

            const inscricao = await InscricaoModel.buscarPorId(id);

            if (!inscricao) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Inscrição não encontrada"
                });
            }

            return res.status(200).json({
                sucesso: true,
                dados: inscricao
            });

        } catch (erro) {
            console.error("Erro ao visualizar inscrição:", erro);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno" });
        }
    }

    static async editar(req, res) {
        try {
            const { id } = req.params;
            const { status, observacao } = req.body;

            const result = await InscricaoModel.editar(id, { status, observacao });

            return res.status(200).json({
                sucesso: true,
                mensagem: "Inscrição atualizada com sucesso",
                result
            });

        } catch (erro) {
            console.error("Erro ao editar inscrição:", erro);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno" });
        }
    }

    static async remover(req, res) {
        try {
            const { id } = req.params;

            await InscricaoModel.remover(id);

            return res.status(200).json({
                sucesso: true,
                mensagem: "Inscrição removida com sucesso"
            });

        } catch (erro) {
            console.error("Erro ao remover inscrição:", erro);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno" });
        }
    }
}

export default InscricaoController;
