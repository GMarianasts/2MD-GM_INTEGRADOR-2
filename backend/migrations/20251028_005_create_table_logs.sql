-- Migration: Criar tabela logs
-- Data: 2025-10-28
-- Descrição: Tabela para registrar logs de acesso às rotas da API

USE produtos_api;

CREATE TABLE IF NOT EXISTS logs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    rota VARCHAR(255),
    metodo VARCHAR(10),
    ip_address VARCHAR(50),
    user_agent TEXT,
    dados_requisicao TEXT,
    dados_resposta TEXT,
    status_code INT,
    tempo_resposta_ms INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
