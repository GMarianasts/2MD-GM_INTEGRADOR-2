import UsuarioModel from "../models/UsuarioModel.js";

class UsuarioController {

    // GET /api/usuarios (Listar todos os colaboradores para a tabela)
    static async listarUsuarios(req, res) {
        try {
            const pagina = parseInt(req.query.pagina) || 1;
            const limite = parseInt(req.query.limite) || 10;

            const resultado = await UsuarioModel.listarTodos(pagina, limite);

            // Removemos a senha da resposta por segurança
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

    // POST /api/usuarios (Criar novo colaborador vindo do Modal)
    static async criarUsuario(req, res) {
        try {
            // 1. Pegamos TODOS os campos do formulário
            const { nome, email, senha, cargo, departamento, unidade, nivel_acesso } = req.body;

            // 2. Validação básica
            if (!nome || !email || !senha) {
                return res.status(400).json({
                    sucesso: false,
                    mensagem: "Os campos Nome, Email e Senha são obrigatórios."
                });
            }

            // 3. Verifica se email já existe
            const existente = await UsuarioModel.buscarPorEmail(email);
            if (existente) {
                return res.status(409).json({
                    sucesso: false,
                    mensagem: "Este e-mail já está cadastrado no sistema."
                });
            }

            // 4. Cria o objeto para salvar
            const novoUsuarioDados = {
                nome,
                email,
                senha, // O Model vai fazer o hash disso
                cargo: cargo || null,
                departamento: departamento || null,
                unidade: unidade || null,
                nivel_acesso: nivel_acesso || 'Colaborador' // Padrão se não vier nada
            };

            // 5. Salva no banco
            const resultado = await UsuarioModel.criar(novoUsuarioDados);

            return res.status(201).json({
                sucesso: true,
                mensagem: "Colaborador cadastrado com sucesso!",
                id: resultado.insertId
            });

        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro interno ao cadastrar colaborador."
            });
        }
    }

    // PUT /api/usuarios/:id (Atualizar dados)
    static async atualizarUsuario(req, res) {
        try {
            const { id } = req.params;
            const dados = req.body; // Pega tudo que foi enviado para atualizar

            const usuario = await UsuarioModel.buscarPorId(id);
            if (!usuario) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Usuário não encontrado."
                });
            }

            // Atualiza apenas o que foi enviado
            await UsuarioModel.atualizar(id, dados);

            return res.status(200).json({
                sucesso: true,
                mensagem: "Dados do colaborador atualizados."
            });

        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao atualizar colaborador."
            });
        }
    }

    // DELETE /api/usuarios/:id (Excluir)
    static async excluirUsuario(req, res) {
        try {
            const { id } = req.params;

            const usuario = await UsuarioModel.buscarPorId(id);
            if (!usuario) {
                return res.status(404).json({
                    sucesso: false,
                    mensagem: "Usuário não encontrado."
                });
            }

            await UsuarioModel.excluir(id);

            return res.status(200).json({
                sucesso: true,
                mensagem: "Colaborador removido com sucesso."
            });

        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            return res.status(500).json({
                sucesso: false,
                mensagem: "Erro ao excluir colaborador."
            });
        }
    }
}

export default UsuarioController;