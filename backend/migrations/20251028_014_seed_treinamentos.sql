

-- B) Inserir Instrutores (Necessário criar antes dos cursos)
INSERT INTO instrutores (nome, email, cargo, bio, experiencia) VALUES 
('Maria Santos', 'maria.santos@gm.com', 'Agile Coach Senior', 'Especialista em transformação ágil com foco em indústria automotiva.', 'Agile Coach na GM (2020-Atual)\nScrum Master na TechSolutions'),
('Fernanda Lima', 'fernanda.lima@gm.com', 'Data Analyst Lead', 'Apaixonada por dados e visualização de informações.', 'Analista Sênior GM'),
('Roberto Alencar', 'roberto.alencar@gm.com', 'Engenheiro de Segurança', 'Especialista em NR-10 e sistemas de alta tensão.', 'Engenheiro EHS GM'),
('Cláudia Mello', 'claudia.mello@gm.com', 'Gerente de Manufatura', 'Líder de implementação do GMS na América do Sul.', '20 anos de GM'),
('Ricardo Silva', 'ricardo.silva@gm.com', 'RH Business Partner', 'Focado em desenvolvimento de lideranças inclusivas.', 'Psicólogo Organizacional'),
('Carlos Mendes', 'carlos.mendes@gm.com', 'Master Black Belt', 'Mentor de projetos Six Sigma.', 'Engenheiro de Qualidade'),
('Lucas Travassos', 'lucas.travassos@gm.com', 'Arquiteto de Software', 'Líder técnico do projeto Ultifi.', 'Dev Sênior'),
('Mariana Costa', 'mariana.costa@gm.com', 'Técnica de Segurança', 'Especialista em máquinas e equipamentos.', 'Técnica EHS'),
('Paulo Andrade', 'paulo.andrade@gm.com', 'Coordenador de Logística', 'Gestão de Supply Chain global.', 'Logística GM'),
('Ana Paula Costa', 'ana.costa@gm.com', 'Facilitadora de Inovação', 'Designer de Serviços e UX.', 'UX Lead'),
('Juliana Ferreira', 'juliana.ferreira@gm.com', 'Especialista ESG', 'Líder de sustentabilidade corporativa.', 'Engenheira Ambiental'),
('Metodologias Ágeis na Prática', 'Gestão', 'Curso de Scrum e Kanban.', 'Intermediário', 12, 60, 1, 'Online', 'Teams', '2025-12-01', '2025-12-15', 'Nenhum', 'Aprenda Scrum e Kanban.', '- Aplicar Scrum\n- Gerir Backlog', 'Ativo', 45),
('Segurança da Informação', 'Tecnologia', 'Curso de LGPD e Cibersegurança.', 'Iniciante', 8, 50, 2, 'Online', 'Moodle', '2025-12-20', '2025-12-22', 'Nenhum', 'Fundamentos de proteção de dados.', '- Entender LGPD', 'Rascunho', 0),
('Segurança em Alta Tensão', 'Segurança e EHS', 'Manuseio de baterias EV.', 'Avançado', 16, 20, 3, 'Presencial', 'Lab EV', '2025-12-10', '2025-12-11', 'NR-10', 'Segurança para elétricos.', '- Desenergização\n- EPIs', 'Ativo', 15),
('Fundamentos do GMS', 'Manufatura', 'Sistema Global de Manufatura.', 'Iniciante', 8, 50, 4, 'Online', 'Workday', '2026-01-15', '2026-01-15', 'Nenhum', 'Pilares do GMS.', '- 5 Princípios\n- Redução de desperdício', 'Ativo', 48),
('Liderança Inclusiva', 'Gestão', 'Soft skills para líderes.', 'Intermediário', 24, 30, 5, 'Híbrido', 'Sala 305', '2026-02-01', '2026-02-03', 'Cargo de gestão', 'Liderança na indústria 4.0.', '- Vieses inconscientes', 'Rascunho', 0),
('Power BI para Qualidade', 'Tecnologia', 'Dashboards de qualidade.', 'Intermediário', 12, 40, 2, 'Online', 'Teams', '2025-12-20', '2025-12-22', 'Excel', 'Criação de relatórios.', '- DAX Básico\n- Gráficos', 'Ativo', 35),
('Six Sigma Yellow Belt', 'Processos', 'Introdução ao Six Sigma.', 'Iniciante', 16, 100, 6, 'Online', 'EAD', '2026-03-10', '2026-03-12', 'Estatística básica', 'Metodologia DMAIC.', '- Mapear processos\n- Coletar dados', 'Ativo', 12),
('Arquitetura SDV', 'Tecnologia', 'Software Defined Vehicle.', 'Avançado', 20, 25, 7, 'Híbrido', 'Auditório', '2026-04-05', '2026-04-09', 'Engenharia SW', 'Plataforma Ultifi.', '- Protocolos\n- Cibersegurança', 'Rascunho', 0),
('NR-12 Máquinas', 'Segurança e EHS', 'Segurança em máquinas.', 'Iniciante', 8, 40, 8, 'Presencial', 'Chão de Fábrica', '2025-11-28', '2025-11-28', 'EPIs', 'Normas regulamentadoras.', '- Identificar riscos\n- Parada de emergência', 'Ativo', 38),
('Supply Chain JIT', 'Logística', 'Just-in-Time na GM.', 'Intermediário', 10, 50, 9, 'Online', 'Teams', '2026-02-15', '2026-02-16', 'Logística básica', 'Gestão de estoque.', '- Kanban\n- Riscos', 'Ativo', 15),
('Design Thinking', 'Inovação', 'Solução de problemas.', 'Iniciante', 8, 25, 10, 'Presencial', 'Sala Inovação', '2025-12-05', '2025-12-05', 'Nenhum', 'Metodologia de inovação.', '- Empatia\n- Prototipagem', 'Ativo', 25),
('Estratégia ESG', 'Gestão', 'Metas de carbono neutro.', 'Iniciante', 4, 200, 11, 'Online', 'Webcast', '2026-01-20', '2026-01-20', 'Nenhum', 'Sustentabilidade GM.', '- Pilares ESG\n- Aterro zero', 'Ativo', 89);

-- D) Ligar Cursos às Competências (Exemplos)
-- Curso 1 (Agil) -> Agilidade(1), Gestão(2)
INSERT INTO treinamento_competencia (treinamento_id, competencia_id) VALUES (1, 1), (1, 2);
-- Curso 2 (Segurança Info) -> Tecnologia(3)
INSERT INTO treinamento_competencia (treinamento_id, competencia_id) VALUES (2, 3);
-- Curso 3 (Alta Tensão) -> Segurança(7), Tecnologia(3)
INSERT INTO treinamento_competencia (treinamento_id, competencia_id) VALUES (3, 7), (3, 3);