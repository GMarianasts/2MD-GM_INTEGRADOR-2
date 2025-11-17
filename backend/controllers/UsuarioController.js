// controllers/UsuarioController.js
import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {

    // GET /api/usuarios  (listar todos — só admin)
    static async listarUsuarios(req, res) {
        try {
            const pagina = parseInt(req.query.pagina) || 1;
            const limite = parseInt(req.query.limite) || 10;

            const resultado = await UsuarioModel.listarTodos(pagina, limite);

            return res.status(200).json({
                sucesso: true,
                dados: resultado
            });
        } catch (error) {
            console.error("Erro ao listar usuários:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao listar usuários"
            });
        }
    }

    // POST /api/usuarios  (criar — só admin)
    static async criarUsuario(req, res) {
        try {
            const { nome, email, senha, tipo } = req.body;

            if (!nome || !email || !senha) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: "Nome, email e senha são obrigatórios"
                });
            }

            // tipo padrão
            const tipoUsuario = tipo || "usuario";

            if (tipoUsuario !== "admin" && tipoUsuario !== "usuario") {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: "Tipo inválido (use 'admin' ou 'usuario')"
                });
            }

            const existente = await UsuarioModel.buscarPorEmail(email);
            if (existente) {
                return res.status(409).json({
                    sucesso: false,
                    mensagem: "Email já cadastrado"
                });
            }

            const novoId = await UsuarioModel.criar({
                nome,
                email,
                senha,
                tipo: tipoUsuario
            });

            return res.status(201).json({
                sucesso: true,
                mensagem: "Usuário criado com sucesso",
                dados: { id: novoId }
            });

        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao criar usuário"
            });
        }
    }

    // PUT /api/usuarios/:id  (atualizar — só admin)
    static async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const { nome, email, senha, tipo } = req.body;

            const usuario = await UsuarioModel.buscarPorId(id);

            if (!usuario) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Usuário não encontrado"
                });
            }

            const dadosAtualizar = {};

            if (nome) dadosAtualizar.nome = nome;
            if (email) dadosAtualizar.email = email;
            if (senha) dadosAtualizar.senha = senha;

            if (tipo) {
                if (tipo !== "admin" && tipo !== "usuario") {
                    return res.status(400).json({
                        sucesso: false,
                        mensagem: "Tipo inválido"
                    });
                }
                dadosAtualizar.tipo = tipo;
            }

            await UsuarioModel.atualizar(id, dadosAtualizar);

            return res.status(200).json({
                sucesso: true,
                mensagem: "Usuário atualizado com sucesso"
            });

        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar usuário"
            });
        }
    }

    // DELETE /api/usuarios/:id  (excluir — só admin)
    static async excluirUsuario(req, res) {
        try {
            const { id } = req.params;

            const usuario = await UsuarioModel.buscarPorId(id);

            if (!usuario) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Usuário não encontrado"
                });
            }

            await UsuarioModel.excluir(id);

            return res.status(200).json({
                sucesso: true,
                mensagem: "Usuário excluído com sucesso"
            });

        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir usuário"
            });
        }
    }

}

export default UsuarioController;
