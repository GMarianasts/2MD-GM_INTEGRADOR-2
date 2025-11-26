import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Importar rotas
import produtoRotas from './routes/produtoRotas.js';
import authRotas from './routes/authRotas.js';
import criptografiaRotas from './routes/criptografiaRotas.js';
import colaboradoresRotas from './routes/colaboradoresRotas.js';
import inscricoesRoutes from "./routes/inscricoesRotas.js";




import usuarioRotas from './routes/usuarioRotas.js';
import treinamentoCountRotas from './routes/treinamentoCountRotas.js';

import treinamentoRotas from './routes/treinamentoRotas.js';

// Importar middlewares
import { logMiddleware } from './middlewares/logMiddleware.js';
import { errorMiddleware } from './middlewares/errorMiddleware.js';

// Carregar variáveis do arquivo .env
dotenv.config();

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configurações do servidor
const PORT = process.env.PORT || 3001;

// no topo do server.js (junto com outros imports)
import { contarTreinamentosAtivos } from './controllers/TreinamentoController.js';

// logo antes de registrar os routers da API (temporário)
app.get('/api/treinamentos/ativos/count-test', async (req, res) => {
  try {
    await contarTreinamentosAtivos(req, res); // reaproveita a função existente
  } catch (e) {
    console.error('erro rota test direta:', e);
    res.status(500).json({ sucesso: false, erro: e.message });
  }
});

// Middlewares globais
app.use(helmet()); // Segurança HTTP headers

// Configurar CORS para permitir que rotas OPTIONS específicas sejam processadas
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    preflightContinue: false, // Deixa as rotas OPTIONS específicas serem processadas
    optionsSuccessStatus: 200 // Retorna 200 para OPTIONS em vez de 204
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir arquivos estáticos (imagens)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Middleware para log de requisições (salva no banco de dados)
app.use(logMiddleware);

// Rotas da API
app.use('/api/colaboradores', colaboradoresRotas);
app.use("/api/usuarios", usuarioRotas);
app.use('/api/auth', authRotas);
app.use('/api/produtos', produtoRotas);
app.use('/api/treinamentos', treinamentoCountRotas);
app.use('/api/treinamentos', treinamentoRotas);
app.use("/api/inscricoes", inscricoesRotas);


// Rota raiz
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

// Middleware para tratar rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({
        sucesso: false,
        erro: 'Rota não encontrada',
        mensagem: `A rota ${req.method} ${req.originalUrl} não foi encontrada`
    });
});


// Middleware global de tratamento de erros (deve ser o último)
app.use(errorMiddleware);

// debug: listar rotas registradas
function listRoutes() {
  console.log('--- Rotas registradas (app._router.stack) ---');
  app._router.stack.forEach((middleware) => {
    if (middleware.route) {
      // rota direta
      console.log(middleware.route.path, Object.keys(middleware.route.methods).join(','));
    } else if (middleware.name === 'router') {
      middleware.handle.stack.forEach((handler) => {
        if (handler.route) {
          console.log('(router) ' + handler.route.path, Object.keys(handler.route.methods).join(','));
        }
      });
    }
  });
  console.log('--- fim rotas ---');
}
listRoutes();

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📱 Acesse: http://localhost:${PORT}`);
    console.log(`📚 API de Produtos - Sistema de Gestão`);
    console.log(`🔧 Ambiente: ${process.env.NODE_ENV || 'development'}`);
});

export default app;

