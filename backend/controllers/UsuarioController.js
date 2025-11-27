import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {

    static async criarUsuario(req, res) {
        try {
            const {
                nome,
                email,
                senha,
                cargo,
                departamento,
                unidade,
                nivelAcesso
            } = req.body;

            const dados = {
                nome,
                email,
                senha,
                cargo,
                departamento,
                unidade,
                nivel_acesso: nivelAcesso || "Colaborador"
            };

            // REMOVE campo errado que veio do frontend
            delete dados.nivelAcesso;



            const novoUsuario = await UsuarioModel.criar(dados);

            return res.status(201).json({
                mensagem: 'Usuário cadastrado com sucesso!',
                usuario: novoUsuario
            });

        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            return res.status(500).json({ erro: 'Erro ao criar usuário' });
        }
    }

    // Listar todos
   // Listar todos
static async listarUsuarios(req, res) {
    try {
        const { pagina = 1, limite = 10 } = req.query;

        const resultado = await UsuarioModel.listarTodos(
            Number(pagina),
            Number(limite)
        );

        // Agora retorna no formato correto para o frontend
        return res.status(200).json({
            usuarios: resultado.usuarios,
            total: resultado.total,
            pagina: resultado.pagina,
            limite: resultado.limite,
            totalPaginas: resultado.totalPaginas
        });

    } catch (error) {
        console.error('Erro ao listar usuários:', error);
        return res.status(500).json({ erro: 'Erro ao listar usuários' });
    }
}

    // Buscar por ID
    static async buscarPorId(req, res) {
        try {
            const usuario = await UsuarioModel.buscarPorId(req.params.id);

            if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });

            return res.status(200).json(usuario);

        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
            return res.status(500).json({ erro: 'Erro ao buscar usuário' });
        }
    }

    // Atualizar
    static async atualizarUsuario(req, res) {
        try {
            const {
                nome,
                email,
                senha,
                cargo,
                departamento,
                unidade,
                nivelAcesso
            } = req.body;

            const dadosAtualizados = {
                nome,
                email,
                senha,
                cargo,
                departamento,
                unidade,
                nivel_acesso: nivelAcesso
            };

            const resultado = await UsuarioModel.atualizar(req.params.id, dadosAtualizados);

            return res.status(200).json({
                mensagem: "Usuário atualizado com sucesso!",
                resultado
            });

        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
            return res.status(500).json({ erro: 'Erro ao atualizar usuário' });
        }
    }

    // Excluir
    static async excluirUsuario(req, res) {
        try {
            await UsuarioModel.excluir(req.params.id);
            return res.status(200).json({ mensagem: "Usuário excluído com sucesso!" });
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            return res.status(500).json({ erro: 'Erro ao excluir usuário' });
        }
    }
}


export default UsuarioController;