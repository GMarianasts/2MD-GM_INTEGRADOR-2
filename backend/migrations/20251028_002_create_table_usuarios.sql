-- Migration: Criar tabela usuarios
-- Data: 2025-01-15
-- Descrição: Tabela para armazenar usuários do sistema

USE produtos_api;

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL,
    nivel_acesso ENUM('Colaborador', 'Admin') DEFAULT 'Colaborador',
    cargo VARCHAR(100),
    departamento VARCHAR(100),
    unidade VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


