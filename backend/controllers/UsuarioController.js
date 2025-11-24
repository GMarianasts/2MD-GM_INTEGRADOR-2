import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {

    static async listarUsuarios(req, res) {
        try {
            const pagina = parseInt(req.query.pagina) || 1;
            const limite = parseInt(req.query.limite) || 10;

            const resultado = await UsuarioModel.listarTodos(pagina, limite);

            const usuariosSeguros = resultado.usuarios.map(user => {
                const { senha, ...resto } = user;
                return resto;
            });

            return res.status(200).json({
                sucesso: true,
                dados: usuariosSeguros,
                total: resultado.total,
                paginas: resultado.totalPaginas
            });
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao buscar lista de colaboradores."
            });
        }
    }

    static async criarUsuario(req, res) {
        try {
            const { nome, email, senha, cargo, departamento, unidade, nivel_acesso, nivelAcesso } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).json({ sucesso: false, mensagem: "Campos obrigatórios faltando." });
            }

            const existente = await UsuarioModel.buscarPorEmail(email);
            if (existente) {
                return res.status(409).json({ sucesso: false, mensagem: "E-mail já cadastrado." });
            }

            const novoUsuarioDados = {
                nome,
                email,
                senha,
                cargo: cargo || null,
                departamento: departamento || null,
                unidade: unidade || null,
                nivel_acesso: nivel_acesso || nivelAcesso || 'Colaborador' 
            };

            const resultado = await UsuarioModel.criar(novoUsuarioDados);

            return res.status(201).json({
                sucesso: true,
                mensagem: "Colaborador cadastrado!",
                id: resultado.insertId
            });

        } catch (error) {
            console.error("Erro ao criar:", error);
            return res.status(500).json({ sucesso: false, mensagem: "Erro interno ao cadastrar." });
        }
    }

    static async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, cargo, departamento, unidade, nivelAcesso } = req.body;

            const usuario = await UsuarioModel.buscarPorId(id);
            if (!usuario) {
                return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado." });
            }

            const dadosParaAtualizar = {
                nome,
                email,
                cargo,
                departamento,
                unidade,
                nivel_acesso: nivelAcesso
            };

            if (senha && senha.trim() !== "") {
                dadosParaAtualizar.senha = senha;
            }

            await UsuarioModel.atualizar(id, dadosParaAtualizar);

            return res.status(200).json({
                sucesso: true,
                mensagem: "Dados atualizados com sucesso!"
            });

        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar colaborador."
            });
        }
    }

    static async excluirUsuario(req, res) {
        try {
            const { id } = req.params;
            const usuario = await UsuarioModel.buscarPorId(id);
            if (!usuario) return res.status(404).json({ sucesso: false, mensagem: "Usuário não encontrado." });

            await UsuarioModel.excluir(id);

            return res.status(200).json({ sucesso: true, mensagem: "Colaborador removido." });
        } catch (error) {
            return res.status(500).json({ sucesso: false, mensagem: "Erro ao excluir colaborador." });
        }
    }
}

export default UsuarioController;