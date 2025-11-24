"use client";
import { useState, useEffect } from 'react';

export default function ModalNovoTreinamento({ onClose, onSalvar, dadosEditar }) {
    
    // Estado inicial limpo
    const formInicial = {
        titulo: '', 
        categoria: '', 
        status: 'Ativo', 
        descricao: '', 
        nivel: '', 
        duracao: '', 
        capacidade: '',
        instrutorNome: '', 
        instrutorEmail: '', 
        modalidade: '', 
        local: '',
        dataInicio: '', 
        dataFim: '', 
        competenciasTexto: ''
    };

    const [form, setForm] = useState(formInicial);

    // EFEITO: Preenche o formulário se vier dados para editar
    useEffect(() => {
        if (dadosEditar) {
            setForm({
                titulo: dadosEditar.titulo,
                categoria: dadosEditar.categoria,
                status: dadosEditar.status,
                descricao: dadosEditar.descricao,
                nivel: dadosEditar.nivel,
                
                // Mapeando nomes do Banco (snake_case) para o Form (camelCase)
                duracao: dadosEditar.duracao_horas, 
                capacidade: dadosEditar.capacidade,
                instrutorNome: dadosEditar.instrutor_nome, 
                instrutorEmail: dadosEditar.instrutor_email,
                modalidade: dadosEditar.modalidade,
                local: dadosEditar.local_plataforma, 
                
                // Formatando datas (remove a parte da hora T00:00:00)
                dataInicio: dadosEditar.data_inicio ? dadosEditar.data_inicio.split('T')[0] : '',
                dataFim: dadosEditar.data_fim ? dadosEditar.data_fim.split('T')[0] : '',
                
                // Transformando Array de competencias em String para o input
                competenciasTexto: dadosEditar.competencias ? dadosEditar.competencias.join(', ') : ''
            });
        }
    }, [dadosEditar]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Se tem dadosEditar, usa a URL com ID e método PUT. Se não, POST normal.
        const url = dadosEditar 
            ? `http://localhost:3001/api/treinamentos/${dadosEditar.id}` 
            : 'http://localhost:3001/api/treinamentos';
            
        const method = dadosEditar ? 'PUT' : 'POST';

        try {
            const response = await fetch(url, {
                method: method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });

            if (response.ok) {
                onSalvar(); // Atualiza a tabela
                onClose();  // Fecha o modal
            } else {
                alert('Erro ao salvar');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content rounded-4 border-0">

                    {/* Cabeçalho */}
                    <div className="modal-header border-bottom-0 pb-0">
                        <div>
                            <h5 className="modal-title fw-bold" style={{ color: '#0a2b6b' }}>
                                {dadosEditar ? 'Editar Curso' : 'Adicionar Novo Curso'}
                            </h5>
                            <p className="text-muted small">Preencha as informações do treinamento</p>
                        </div>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    {/* Corpo do Formulário */}
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>

                            {/* Seção 1: Básicos */}
                            <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-book me-2"></i>Informações Básicas</h6>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Título do Curso *</label>
                                    <input 
                                        type="text" name="titulo" className="form-control bg-light border-0" 
                                        placeholder="Ex: Liderança 4.0" required 
                                        value={form.titulo || ''} onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label fw-semibold small">Categoria *</label>
                                    <select 
                                        name="categoria" className="form-select bg-light border-0" required 
                                        value={form.categoria || ''} onChange={handleChange}
                                    >
                                        <option value="">Selecione...</option>
                                        <option value="Gestão">Gestão</option>
                                        <option value="Tecnologia">Tecnologia</option>
                                        <option value="Processos">Processos</option>
                                        <option value="Comunicação Efetiva">Comunicação</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label className="form-label fw-semibold small">Status *</label>
                                    <select
                                        name="status"
                                        className="form-select border-0 fw-medium"
                                        style={{ backgroundColor: form.status === 'Ativo' ? '#d1e7dd' : '#e2e3e5', color: form.status === 'Ativo' ? '#0f5132' : '#41464b' }}
                                        value={form.status || 'Ativo'}
                                        onChange={handleChange}
                                    >
                                        <option value="Ativo">Ativo (Publicar)</option>
                                        <option value="Rascunho">Rascunho (Oculto)</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold small">Descrição *</label>
                                    <textarea 
                                        name="descricao" className="form-control bg-light border-0" rows="3" 
                                        placeholder="Descreva os objetivos..." required 
                                        value={form.descricao || ''} onChange={handleChange}
                                    ></textarea>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Nível</label>
                                    <select 
                                        name="nivel" className="form-select bg-light border-0" 
                                        value={form.nivel || ''} onChange={handleChange}
                                    >
                                        <option value="">Selecione...</option>
                                        <option>Iniciante</option>
                                        <option>Intermediário</option>
                                        <option>Avançado</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Duração (h)</label>
                                    <input 
                                        type="number" name="duracao" className="form-control bg-light border-0" 
                                        value={form.duracao || ''} onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Capacidade</label>
                                    <input 
                                        type="number" name="capacidade" className="form-control bg-light border-0" 
                                        value={form.capacidade || ''} onChange={handleChange} 
                                    />
                                </div>
                            </div>

                            {/* Seção 2: Instrutor */}
                            <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-person-badge me-2"></i>Instrutor e Formato</h6>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Nome Instrutor *</label>
                                    <input 
                                        type="text" name="instrutorNome" className="form-control bg-light border-0" required 
                                        value={form.instrutorNome || ''} onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Email Instrutor</label>
                                    <input 
                                        type="email" name="instrutorEmail" className="form-control bg-light border-0" 
                                        value={form.instrutorEmail || ''} onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Modalidade</label>
                                    <select 
                                        name="modalidade" className="form-select bg-light border-0" 
                                        value={form.modalidade || ''} onChange={handleChange}
                                    >
                                        <option value="">Selecione...</option>
                                        <option>Online</option>
                                        <option>Presencial</option>
                                        <option>Híbrido</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Local/Plataforma</label>
                                    <input 
                                        type="text" name="local" className="form-control bg-light border-0" 
                                        value={form.local || ''} onChange={handleChange} 
                                    />
                                </div>
                            </div>

                            {/* Seção 3: Datas e Competências */}
                            <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-calendar-event me-2"></i>Agendamento</h6>
                            <div className="row g-3 mb-4">
                                <div className="col-6">
                                    <label className="form-label fw-semibold small">Início</label>
                                    <input 
                                        type="date" name="dataInicio" className="form-control bg-light border-0" 
                                        value={form.dataInicio || ''} onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-6">
                                    <label className="form-label fw-semibold small">Término</label>
                                    <input 
                                        type="date" name="dataFim" className="form-control bg-light border-0" 
                                        value={form.dataFim || ''} onChange={handleChange} 
                                    />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold small">Competências (separe por vírgula)</label>
                                    <input 
                                        type="text" name="competenciasTexto" className="form-control bg-light border-0" 
                                        placeholder="Ex: Liderança, Comunicação, Agile" 
                                        value={form.competenciasTexto || ''} onChange={handleChange} 
                                    />
                                </div>
                            </div>

                            <div className="modal-footer border-top-0 px-0">
                                <button type="button" className="btn btn-light border" onClick={onClose}>Cancelar</button>
                                <button type="submit" className="btn text-white" style={{ backgroundColor: '#0a2b6b' }}>
                                    {dadosEditar ? 'Salvar Alterações' : '+ Criar Curso'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}