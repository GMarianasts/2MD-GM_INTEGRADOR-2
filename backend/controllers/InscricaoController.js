import InscricaoModel from "../models/InscricaoModel.js";

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
