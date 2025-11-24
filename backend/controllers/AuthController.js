import jwt from 'jsonwebtoken';
import UsuarioModel from '../models/UsuarioModel.js';
import { JWT_CONFIG } from '../config/jwt.js'; 

class AuthController {

    static async login(req, res) {
        try {
            const { email, senha } = req.body;

            if (!email || email.trim() === '') return res.status(400).json({ sucesso: false, mensagem: 'O email é obrigatório' });
            if (!senha || senha.trim() === '') return res.status(400).json({ sucesso: false, mensagem: 'A senha é obrigatória' });

            const usuario = await UsuarioModel.verificarCredenciais(
                email.trim().toLowerCase(),
                senha
            );

            if (!usuario) {
                return res.status(401).json({
                    sucesso: false,
                    mensagem: 'Email ou senha incorretos'
                });
            }

            const tipoUsuario = usuario.nivel_acesso || usuario.tipo || 'Colaborador';

            const token = jwt.sign(
                { 
                    id: usuario.id, 
                    email: usuario.email, 
                    tipo: tipoUsuario
                },
                JWT_CONFIG.secret,
                { expiresIn: JWT_CONFIG.expiresIn }
            );

            res.status(200).json({
                sucesso: true,
                mensagem: 'Login realizado com sucesso',
                dados: {
                    token,
                    usuario: {
                        id: usuario.id,
                        nome: usuario.nome,
                        email: usuario.email,
                        tipo: tipoUsuario === 'Administrador' ? 'admin' : 'usuario',
                        cargo: usuario.cargo,
                        iniciais: usuario.nome.substring(0, 2).toUpperCase()
                    }
                }
            });

        } catch (error) {
            console.error('Erro ao fazer login:', error);
            res.status(500).json({ sucesso: false, mensagem: 'Erro interno no servidor' });
        }
    }

    static async registrar(req, res) {
        try {
            const { nome, email, senha, tipo } = req.body;

            if (!nome) return res.status(400).json({ sucesso: false, mensagem: 'Nome obrigatório' });
            if (!email) return res.status(400).json({ sucesso: false, mensagem: 'Email obrigatório' });
            if (!senha) return res.status(400).json({ sucesso: false, mensagem: 'Senha obrigatória' });

            const emailNormalizado = email.trim().toLowerCase();
            const usuarioExistente = await UsuarioModel.buscarPorEmail(emailNormalizado);
            
            if (usuarioExistente) {
                return res.status(409).json({ sucesso: false, mensagem: 'Este email já está cadastrado' });
            }

            let nivelBanco = 'Colaborador';
            if (tipo === 'admin' || tipo === 'Administrador') nivelBanco = 'Administrador';
            if (tipo === 'gestor' || tipo === 'Gestor') nivelBanco = 'Gestor';

            const dadosUsuario = {
                nome: nome.trim(),
                email: emailNormalizado,
                senha: senha,
                nivel_acesso: nivelBanco
            };

            const usuarioId = await UsuarioModel.criar(dadosUsuario);

            res.status(201).json({
                sucesso: true,
                mensagem: 'Usuário registrado com sucesso',
                dados: {
                    id: usuarioId,
                    nome: dadosUsuario.nome,
                    email: dadosUsuario.email,
                    tipo: tipo
                }
            });

        } catch (error) {
            console.error('Erro ao registrar usuário:', error);
            res.status(500).json({ sucesso: false, mensagem: 'Erro ao registrar usuário' });
        }
    }

    static async obterPerfil(req, res) {

         try {
            const usuario = await UsuarioModel.buscarPorId(req.usuario.id);
            if (!usuario) return res.status(404).json({ sucesso: false, mensagem: 'Usuário não encontrado' });

            const { senha, ...usuarioSemSenha } = usuario;

            usuarioSemSenha.tipo = usuario.nivel_acesso;

            res.status(200).json({ sucesso: true, dados: usuarioSemSenha });
        } catch (error) {
            console.error('Erro perfil:', error);
            res.status(500).json({ sucesso: false, mensagem: 'Erro ao obter perfil' });
        }
    }
}

export default AuthController;