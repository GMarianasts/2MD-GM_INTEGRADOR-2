"use client";
import { useState } from 'react';

export default function ModalNovoTreinamento({ onClose, onSalvar }) {
    const [form, setForm] = useState({
        titulo: '', categoria: '', descricao: '', nivel: '', duracao: '', capacidade: '',
        instrutorNome: '', instrutorEmail: '', modalidade: '', local: '',
        dataInicio: '', dataFim: '', inscricaoInicio: '', inscricaoFim: '',
        competenciasTexto: '', preRequisitos: '', observacoes: ''
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Envia para o Backend
        try {
            const response = await fetch('http://localhost:3001/api/treinamentos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            });
            
            if (response.ok) {
                onSalvar(); // Avisa a pagina pai para atualizar a lista
                onClose();  // Fecha o modal
            } else {
                alert('Erro ao salvar');
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        // Fundo escuro do modal
        <div className="modal show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-scrollable">
                <div className="modal-content rounded-4 border-0">
                    
                    {/* Cabeçalho */}
                    <div className="modal-header border-bottom-0 pb-0">
                        <div>
                            <h5 className="modal-title fw-bold" style={{color: '#0a2b6b'}}>Adicionar Novo Curso</h5>
                            <p className="text-muted small">Preencha as informações do novo treinamento</p>
                        </div>
                        <button type="button" className="btn-close" onClick={onClose}></button>
                    </div>

                    {/* Corpo do Formulário */}
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            
                            {/* Seção 1: Básicos */}
                            <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-book me-2"></i>Informações Básicas</h6>
                            <div className="row g-3 mb-4">
                                <div className="col-md-8">
                                    <label className="form-label fw-semibold small">Título do Curso *</label>
                                    <input type="text" name="titulo" className="form-control bg-light border-0" placeholder="Ex: Liderança 4.0" required onChange={handleChange} />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Categoria *</label>
                                    <select name="categoria" className="form-select bg-light border-0" required onChange={handleChange}>
                                        <option value="">Selecione...</option>
                                        <option value="Gestão">Gestão</option>
                                        <option value="Tecnologia">Tecnologia</option>
                                        <option value="Processos">Processos</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold small">Descrição *</label>
                                    <textarea name="descricao" className="form-control bg-light border-0" rows="3" placeholder="Descreva os objetivos..." required onChange={handleChange}></textarea>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Nível</label>
                                    <select name="nivel" className="form-select bg-light border-0" onChange={handleChange}>
                                        <option>Iniciante</option>
                                        <option>Intermediário</option>
                                        <option>Avançado</option>
                                    </select>
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Duração (h)</label>
                                    <input type="number" name="duracao" className="form-control bg-light border-0" onChange={handleChange} />
                                </div>
                                <div className="col-md-4">
                                    <label className="form-label fw-semibold small">Capacidade</label>
                                    <input type="number" name="capacidade" className="form-control bg-light border-0" onChange={handleChange} />
                                </div>
                            </div>

                            {/* Seção 2: Instrutor */}
                            <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-person-badge me-2"></i>Instrutor e Formato</h6>
                            <div className="row g-3 mb-4">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Nome Instrutor *</label>
                                    <input type="text" name="instrutorNome" className="form-control bg-light border-0" required onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Email Instrutor</label>
                                    <input type="email" name="instrutorEmail" className="form-control bg-light border-0" onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Modalidade</label>
                                    <select name="modalidade" className="form-select bg-light border-0" onChange={handleChange}>
                                        <option>Online</option>
                                        <option>Presencial</option>
                                        <option>Híbrido</option>
                                    </select>
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold small">Local/Plataforma</label>
                                    <input type="text" name="local" className="form-control bg-light border-0" onChange={handleChange} />
                                </div>
                            </div>

                             {/* Seção 3: Datas e Competências */}
                             <h6 className="fw-bold text-secondary mb-3"><i className="bi bi-calendar-event me-2"></i>Agendamento</h6>
                             <div className="row g-3 mb-4">
                                <div className="col-6">
                                    <label className="form-label fw-semibold small">Início</label>
                                    <input type="date" name="dataInicio" className="form-control bg-light border-0" onChange={handleChange} />
                                </div>
                                <div className="col-6">
                                    <label className="form-label fw-semibold small">Término</label>
                                    <input type="date" name="dataFim" className="form-control bg-light border-0" onChange={handleChange} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label fw-semibold small">Competências (separe por vírgula)</label>
                                    <input type="text" name="competenciasTexto" className="form-control bg-light border-0" placeholder="Ex: Liderança, Comunicação, Agile" onChange={handleChange} />
                                </div>
                             </div>

                             <div className="modal-footer border-top-0 px-0">
                                <button type="button" className="btn btn-light border" onClick={onClose}>Cancelar</button>
                                <button type="submit" className="btn text-white" style={{backgroundColor: '#0a2b6b'}}>+ Criar Curso</button>
                             </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}