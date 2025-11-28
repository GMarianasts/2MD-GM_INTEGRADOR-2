"use client";

import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./paginaPerfil.css";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

const dadosCompetencias = [
    { nome: "Liderança", atual: 65, meta: 85 },
    { nome: "Análise de Dados", atual: 75, meta: 90 },
    { nome: "Agilidade", atual: 55, meta: 80 },
    { nome: "Inovação", atual: 60, meta: 75 },
    { nome: "Tecnologia", atual: 70, meta: 95 },
];

export default function PaginaPerfil() {
    const { user } = useAuth();

    // Estado para guardar os dados editáveis
    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        cargo: "",
        departamento: "",
        unidade: "",
        sobre: ""
    });

    // Carrega os dados quando o usuário é identificado
    useEffect(() => {
        if (user) {
            setFormData({
                nome: user.nome || "",
                email: user.email || "",
                telefone: user.telefone || "+55 11 98765-4321",
                cargo: user.cargo || "",
                departamento: user.departamento || "",
                unidade: user.unidade || "",
                sobre: user.sobre || "Engenheiro apaixonado por tecnologia..."
            });
        }
    }, [user]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const handleSave = async () => {
        if (!user) return;
        try {
            const response = await fetch(`http://localhost:3001/api/usuarios/${user.id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert("✅ Perfil atualizado com sucesso!");
                const novoUsuario = { ...user, ...formData };
                localStorage.setItem("usuario", JSON.stringify(novoUsuario));
                window.location.reload(); 
            } else {
                alert("Erro ao atualizar perfil.");
            }
        } catch (error) {
            console.error("Erro:", error);
            alert("Erro de conexão.");
        }
    };

    const getIniciais = (nome) => {
        if (!nome) return "U";
        return nome.substring(0, 2).toUpperCase();
    };

    if (!user) return <div className="p-5 text-center">Carregando...</div>;

    return (
        <div className="container-fluid pagina-usuario">
            {/* Adicionei flex-nowrap para garantir que fiquem lado a lado */}
            <div className="row g-0 flex-nowrap">
                
                {/* Sidebar: col-lg-2 */}
                <aside className="d-none d-md-block col-md-3 col-lg-2 bg-white border-end p-3 sidebar" style={{ minHeight: "100vh" }}>
                    <ul className="list-unstyled menu sticky-top pt-3">
                        <li className=" mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <Link href={'paginaUsuario'}><span>Dashboard</span></Link>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-book"></i>
                            <Link href={'catalogo'}><span>Catálogo de Treinamentos</span></Link>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-award"></i>
                            <Link href={'meuTreinamento'}><span>Meus Treinamentos</span></Link>
                        </li>
                        <li className=" ativo d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <Link href={'paginaPerfil'}><span>Meu Perfil</span></Link>
                        </li>
                    </ul>
                </aside>

                <main className="col-12 col-md-9 col-lg-10 px-4 py-4 bg-light">
                    <div className="corPagina">
                        <div className="container-fluid my-2 px-0"> 
                            
                            <div className="row g-3 mb-4">
                                <div className="col-12">
                                    <h1 className="h3 fw-bold mb-1" style={{color: '#0a2b6b'}}>Meu Perfil</h1>
                                    <p className="text-muted">Gerencie suas informações pessoais e profissionais</p>
                                </div>
                            </div>

                            <div className="row g-4"> 
                                
                                <div className="col-lg-8">
                                    <div className="perfil-container bg-white p-4 rounded-4 shadow-sm border">
                                        <header className="perfil-header d-flex justify-content-between align-items-center mb-3">
                                            <h2 className="h5 fw-bold mb-0">Informações Pessoais</h2>
                                            <button className="btn btn-primary btn-sm d-flex align-items-center gap-2" 
                                                    style={{backgroundColor: '#0a2b6b', borderColor: '#0a2b6b'}}
                                                    onClick={handleSave}>
                                                <i className="bi bi-floppy"></i> Salvar
                                            </button>
                                        </header>
                                        <hr className="text-muted opacity-25" />
                                        
                                        <section className="info-perfil d-flex align-items-center gap-3 mb-4">
                                            <div className="foto-perfil rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-3" 
                                                 style={{width: 80, height: 80, backgroundColor: '#0a2b6b'}}>
                                                {getIniciais(formData.nome)}
                                            </div>
                                            <div className="texto-perfil">
                                                <span className="d-block fw-bold fs-5">{formData.nome}</span>
                                                <span className="d-block text-muted small mb-2">{formData.cargo || "Colaborador"}</span>
                                                <button className="btn btn-outline-secondary btn-sm rounded-pill">Alterar Foto</button>
                                            </div>
                                        </section>

                                        <section className="info-detalhes row g-3 mb-4">
                                            <div className="col-md-6">
                                                <label htmlFor="nome" className="form-label small fw-semibold text-muted">Nome Completo</label>
                                                <input type="text" id="nome" className="form-control bg-light" value={formData.nome} onChange={handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="email" className="form-label small fw-semibold text-muted">E-mail</label>
                                                <input type="email" id="email" className="form-control bg-light" value={formData.email} onChange={handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="telefone" className="form-label small fw-semibold text-muted">Telefone</label>
                                                <input type="tel" id="telefone" className="form-control bg-light" value={formData.telefone} onChange={handleChange} />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="colaborador" className="form-label small fw-semibold text-muted">ID Colaborador</label>
                                                <input type="text" id="colaborador" className="form-control bg-light text-muted" value={`GM-${user.id}`} readOnly disabled />
                                            </div>
                                        </section>

                                        <section className="info-sobre">
                                            <label htmlFor="sobre" className="form-label small fw-semibold text-muted">Sobre Mim</label>
                                            <textarea id="sobre" className="form-control bg-light" rows={4} value={formData.sobre} onChange={handleChange} />
                                        </section>
                                    </div>

                                    {/* Cards Profissionais */}
                                    <div className="infoProfissionais-container mt-4">
                                        <h2 className="h5 fw-bold mb-3">Informações Profissionais</h2>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-row align-items-center gap-3">
                                                    <div className="icon p-3 rounded-3 bg-primary-subtle text-primary"><i className="bi bi-buildings fs-4"></i></div>
                                                    <div><small className="text-muted d-block">Departamento</small><span className="fw-semibold">{formData.departamento || "-"}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-row align-items-center gap-3">
                                                    <div className="icon p-3 rounded-3 bg-warning-subtle text-warning"><i className="bi bi-suitcase-lg fs-4"></i></div>
                                                    <div><small className="text-muted d-block">Cargo</small><span className="fw-semibold">{formData.cargo || "-"}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-row align-items-center gap-3">
                                                    <div className="icon p-3 rounded-3 bg-success-subtle text-success"><i className="bi bi-geo-alt fs-4"></i></div>
                                                    <div><small className="text-muted d-block">Unidade</small><span className="fw-semibold">{formData.unidade || "-"}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="card border-0 shadow-sm p-3 h-100 d-flex flex-row align-items-center gap-3">
                                                    <div className="icon p-3 rounded-3 bg-info-subtle text-info"><i className="bi bi-calendar-check fs-4"></i></div>
                                                    <div><small className="text-muted d-block">Admissão</small><span className="fw-semibold">15/03/2020</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="competencias-container mt-4 bg-white p-4 rounded-4 shadow-sm border">
                                        <header className="mb-3">
                                            <h2 className="h5 fw-bold mb-1">Mapa de Competências</h2>
                                            <p className="text-muted small mb-0">Acompanhe seu desenvolvimento</p>
                                        </header>
                                        <div className="competencias-list d-flex flex-column gap-4">
                                            {dadosCompetencias.map((item) => (
                                                <div key={item.nome}>
                                                    <div className="d-flex justify-content-between mb-1 small">
                                                        <span className="fw-semibold">{item.nome}</span>
                                                        <span className="text-muted">Meta: {item.meta}%</span>
                                                    </div>
                                                    <div className="progress" style={{height: 8}}>
                                                        <div className="progress-bar" role="progressbar" style={{width: `${item.atual}%`, backgroundColor: '#fd7e14'}}></div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Coluna da Direita */}
                                <div className="col-lg-4">
                                    <div className="conquista-container bg-white p-4 rounded-4 shadow-sm border mb-4">
                                        <h2 className="h5 fw-bold mb-3">Conquistas Recentes</h2>
                                        <div className="d-flex flex-column gap-3">
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="p-2 bg-light rounded text-primary"><i className="bi bi-award fs-4"></i></div>
                                                <div><h6 className="mb-0 fw-bold">Aluno Dedicado</h6><small className="text-muted">10 cursos • 10/2025</small></div>
                                            </div>
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="p-2 bg-light rounded text-primary"><i className="bi bi-reception-4 fs-4"></i></div>
                                                <div><h6 className="mb-0 fw-bold">Meta Alcançada</h6><small className="text-muted">100h treino • 09/2025</small></div>
                                            </div>
                                            <div className="d-flex gap-3 align-items-center">
                                                <div className="p-2 bg-light rounded text-primary"><i className="bi bi-graph-up-arrow fs-4"></i></div>
                                                <div><h6 className="mb-0 fw-bold">Líder Inspirador</h6><small className="text-muted">5 estrelas • 08/2025</small></div>
                                            </div>
                                        </div>
                                        <button className="btn-ver-todas btn btn-outline-primary w-100 mt-4 btn-sm">Ver Todas</button>
                                    </div>

                                    <div className="estatistica-container bg-white p-4 rounded-4 shadow-sm border mb-4">
                                        <h2 className="h5 fw-bold mb-3">Estatísticas</h2>
                                        <div className="text-center py-2 border-bottom">
                                            <h3 className="fw-bold mb-0" style={{color: '#0a2b6b'}}>24</h3>
                                            <small className="text-muted">Cursos Concluídos</small>
                                        </div>
                                        <div className="text-center py-2 border-bottom">
                                            <h3 className="fw-bold mb-0" style={{color: '#0a2b6b'}}>156h</h3>
                                            <small className="text-muted">Horas de Treinamento</small>
                                        </div>
                                        <div className="text-center py-2 border-bottom">
                                            <h3 className="fw-bold mb-0" style={{color: '#0a2b6b'}}>18</h3>
                                            <small className="text-muted">Badges Conquistados</small>
                                        </div>
                                        <div className="text-center py-2 pt-3">
                                            <h3 className="fw-bold mb-0" style={{color: '#0a2b6b'}}>87%</h3>
                                            <small className="text-muted">Taxa de Conclusão</small>
                                        </div>
                                    </div>

                                    <div className="preferencias-container d-flex flex-column gap-2">
                                        <button className="btn btn-white border shadow-sm text-start p-3 d-flex align-items-center gap-2 text-danger">
                                            <i className="bi bi-key"></i> Alterar senha
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    );
}