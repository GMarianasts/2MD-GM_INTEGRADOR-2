import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

import produtoRotas from './routes/produtoRotas.js';
import authRotas from './routes/authRotas.js';
import criptografiaRotas from './routes/criptografiaRotas.js';
import usuarioRotas from './routes/usuarioRotas.js';
import treinamentoRotas from './routes/treinamentoRotas.js';

import { logMiddleware } from './middlewares/logMiddleware.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = process.env.PORT || 3001;

app.use(helmet());

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false,
    optionsSuccessStatus: 200 
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(logMiddleware);

app.use('/api/auth', authRotas);
app.use('/api/produtos', produtoRotas);
app.use('/api/criptografia', criptografiaRotas);
app.use('/api/usuarios', usuarioRotas);
app.use('/api/treinamentos', treinamentoRotas);

app.get('/', (req, res) => {
    res.json({
        sucesso: true,
        mensagem: 'API de Produtos - Sistema de Gestão',
        versao: '1.0.0',
        rotas: {
            autenticacao: '/api/auth',
            produtos: '/api/produtos',
            criptografia: '/api/criptografia'
        },
        documentacao: {
            login: 'POST /api/auth/login',
            registrar: 'POST /api/auth/registrar',
            perfil: 'GET /api/auth/perfil',
            listarProdutos: 'GET /api/produtos',
            buscarProduto: 'GET /api/produtos/:id',
            criarProduto: 'POST /api/produtos',
            atualizarProduto: 'PUT /api/produtos/:id',
            excluirProduto: 'DELETE /api/produtos/:id',
            infoCriptografia: 'GET /api/criptografia/info',
            cadastrarUsuario: 'POST /api/criptografia/cadastrar-usuario'
        }
    });
});

app.use('*', (req, res) => {
    res.status(404).json({
        sucesso: false,
        erro: 'Rota não encontrada',
        mensagem: `A rota ${req.method} ${req.originalUrl} não foi encontrada`
    });
});

app.use(errorMiddleware);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
    console.log(`Acesse: http://localhost:${PORT}`);
    console.log(`API de Produtos - Sistema de Gestão`);
    console.log(`Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

export default app;

