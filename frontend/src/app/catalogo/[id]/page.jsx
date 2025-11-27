"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../catalogo.css";

export default function DetalhesCurso() {
    const { id } = useParams();
    const [curso, setCurso] = useState(null);
    const [loading, setLoading] = useState(true);
    const [abaAtiva, setAbaAtiva] = useState("visao-geral");

    useEffect(() => {
        async function fetchDetalhes() {
            try {
                const res = await fetch(`http://localhost:3001/api/treinamentos/${id}`);
                const data = await res.json();
                if (data.sucesso) {
                    setCurso(data.dados);
                }
            } catch (error) {
                console.error("Erro ao buscar detalhes:", error);
            } finally {
                setLoading(false);
            }
        }
        if (id) fetchDetalhes();
    }, [id]);

    // Função para transformar texto com quebra de linha em lista HTML
    const renderizarLista = (texto, icone = "check-circle") => {
        if (!texto) return <li>Informação não disponível.</li>;
        return texto.split('\n').map((item, index) => {
            const itemLimpo = item.replace(/^-\s*/, '').trim();
            if (!itemLimpo) return null;
            return (
                <li key={index} className="d-flex align-items-start gap-2">
                    {icone && <i className={`bi bi-${icone} text-success mt-1`}></i>}
                    {itemLimpo}
                </li>
            );
        });
    };

    const formatarData = (dataISO) => {
        if (!dataISO) return '-';
        return new Date(dataISO).toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    };

    if (loading) return <div className="text-center py-5"><div className="spinner-border text-primary"></div></div>;
    if (!curso) return <div className="text-center py-5">Curso não encontrado.</div>;

    return (
        <div className="container-fluid pagina-usuario">
            <div className="row flex-nowrap">

                <aside className="d-none d-md-block col-md-3 col-lg-2 sidebar p-3 border-end bg-white" style={{ minHeight: "100vh" }}>
                    <ul className="list-unstyled menu sticky-top pt-3">
                        <li className="mb-3 d-flex align-items-center gap-2"><i className="bi bi-house-door"></i><Link href={'paginaUsuario'}><span>Dashboard</span></Link></li>
                        <li className="ativo mb-3 d-flex align-items-center gap-2"><i className="bi bi-book"></i><Link href={'catalogo'}><span>Catálogo de Treinamentos</span></Link></li>
                        <li className="mb-3 d-flex align-items-center gap-2"><i className="bi bi-award"></i><Link href={'meuTreinamento'}><span>Meus Treinamentos</span></Link></li>
                        <li className="d-flex align-items-center gap-2"><i className="bi bi-person"></i><Link href={'paginaPerfil'}><span>Meu Perfil</span></Link></li>
                    </ul>
                </aside>

                <main className="col-12 col-md-9 col-lg-10 bg-light p-0 d-flex flex-column min-vh-100">
                    <div className="p-4 w-100 flex-grow-1">

                        <div className="mb-4">
                            <Link href="/" className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-2">
                                <i className="bi bi-arrow-left"></i> Voltar ao Catálogo
                            </Link>
                        </div>

                        <div className="rounded-4 p-4 p-lg-5 text-white mb-5 position-relative overflow-hidden shadow" style={{ backgroundColor: "#0a2b6b" }}>
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-warning text-dark rounded-pill">Agilidade</span>
                                        <span className="badge bg-light text-dark rounded-pill">Intermediário</span>
                                        <span className="badge border border-light rounded-pill">Online</span>
                                    </div>
                                    <h1 className="fw-bold mb-3">Metodologias Ágeis na Prática</h1>
                                    <p className="mb-4 text-light opacity-75">Aprenda a aplicar Scrum, Kanban e outras metodologias ágeis em projetos reais da indústria automotiva.</p>
                                    <div className="d-flex flex-wrap gap-4 text-light opacity-75 mb-4 text-sm">
                                        <span><i className="bi bi-clock me-2"></i>12h</span>
                                        <span><i className="bi bi-people me-2"></i>45 inscritos</span>
                                        <span><i className="bi bi-star-fill text-warning me-2"></i>4.8</span>
                                        <span><i className="bi bi-calendar-event me-2"></i>Início: 01/12/2025</span>
                                    </div>
                                </div>
                                <div className="col-lg-4 d-flex flex-column align-items-lg-end justify-content-start gap-3">
                                    <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-3 d-flex align-items-center gap-2 w-100 justify-content-center" style={{ backgroundColor: "#fd7e14", borderColor: "#fd7e14" }}>
                                        <i className="bi bi-play-fill fs-5"></i> Inscrever no Curso
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="bg-light rounded-pill p-1 d-inline-flex mb-5 border">
                            <div className="d-flex gap-1">
                                <button
                                    className={`btn rounded-pill px-4 ${abaAtiva === 'visao-geral' ? 'bg-white text-dark fw-semibold shadow-sm' : 'text-muted fw-medium'}`}
                                    onClick={() => setAbaAtiva('visao-geral')}
                                >
                                    Visão Geral
                                </button>

                                <button
                                    className={`btn rounded-pill px-4 ${abaAtiva === 'instrutor' ? 'bg-white text-dark fw-semibold shadow-sm' : 'text-muted fw-medium'}`}
                                    onClick={() => setAbaAtiva('instrutor')}
                                >
                                    Instrutor
                                </button>
                            </div>
                        </div>

                        <div className="row g-4 mb-4">

                            <div className={abaAtiva === 'visao-geral' ? "col-lg-8" : "col-12"}>

                                {abaAtiva === 'visao-geral' && (
                                    <>
                                        <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                                            <h5 className="fw-bold mb-3">Sobre o Curso</h5>
                                            <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                                                Este curso foi desenvolvido para profissionais que desejam dominar as principais metodologias ágeis.
                                            </p>
                                        </div>
                                        <div className="card border-0 shadow-sm rounded-4 p-4">
                                            <h5 className="fw-bold mb-3">Objetivos de Aprendizagem</h5>
                                            <ul className="list-unstyled d-flex flex-column gap-3 mb-0 text-muted">
                                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle text-success mt-1"></i>Compreender Manifesto Ágil</li>
                                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle text-success mt-1"></i>Aplicar Scrum</li>
                                                <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle text-success mt-1"></i>Utilizar Kanban</li>
                                            </ul>
                                        </div>
                                    </>
                                )}

                                {abaAtiva === 'instrutor' && (
                                    <div className="card border-0 shadow-sm rounded-4 p-4 w-100">
                                        {/* Cabeçalho do Instrutor */}
                                        <div className="d-flex align-items-center gap-3 mb-3">
                                            <div
                                                className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center fw-bold fs-3"
                                                style={{ width: 70, height: 70 }}
                                            >
                                                {/* Pega a primeira letra ou ? se não tiver nome */}
                                                {curso.instrutor_nome ? curso.instrutor_nome.charAt(0) : '?'}
                                            </div>
                                            <div>
                                                <h4 className="fw-bold mb-0">{curso.instrutor_nome}</h4>
                                                <span className="text-muted">{curso.instrutor_cargo || 'Instrutor GM'}</span>
                                                <div className="small text-muted mt-1">{curso.instrutor_email}</div>
                                            </div>
                                        </div>

                                        {/* Bio */}
                                        <p className="text-muted mt-2" style={{ lineHeight: '1.6' }}>
                                            {curso.instrutor_bio || "Biografia não disponível."}
                                        </p>

                                        {/* Experiência Profissional (Renderiza apenas se existir no banco) */}
                                        {curso.instrutor_experiencia && (
                                            <>
                                                <hr className="my-4 opacity-25" />
                                                <h6 className="fw-bold mb-3">Experiência Profissional</h6>
                                                <ul className="text-muted ps-0 list-unstyled d-flex flex-column gap-2">
                                                    {/* Divide o texto por quebra de linha e cria os itens */}
                                                    {curso.instrutor_experiencia.split('\n').map((xp, i) => {
                                                        const textoLimpo = xp.replace(/^-\s*/, '').trim(); // Remove hífens do começo
                                                        if (!textoLimpo) return null; // Pula linhas vazias

                                                        return (
                                                            <li key={i} className="d-flex gap-2 align-items-start">
                                                                <i className="bi bi-briefcase-fill text-secondary mt-1" style={{ fontSize: '0.9rem' }}></i>
                                                                <span>{textoLimpo}</span>
                                                            </li>
                                                        );
                                                    })}
                                                </ul>
                                            </>
                                        )}
                                    </div>
                                )}

                            </div>
                            {abaAtiva === 'visao-geral' && (
                                <div className="col-lg-4">
                                    <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                                        <h5 className="fw-bold mb-3">Pré-requisitos</h5>
                                        <ul className="text-muted ps-3 mb-0 list-unstyled d-flex flex-column gap-2">
                                            {curso.pre_requisitos ? curso.pre_requisitos.split('\n').map((req, i) => (
                                                <li key={i} className="d-flex gap-2">
                                                    <i className="bi bi-dot fs-3 lh-0 align-self-start mt-1"></i>
                                                    <span style={{ lineHeight: '1.4' }}>{req.replace(/^-\s*/, '')}</span>
                                                </li>
                                            )) : "Nenhum pré-requisito."}
                                        </ul>
                                    </div>

                                    <div className="card border-0 shadow-sm rounded-4 p-4">
                                        <h5 className="fw-bold mb-3">Certificação</h5>
                                        <div className="d-flex gap-3 align-items-center">
                                            <div className="bg-warning bg-opacity-10 p-3 rounded-3 text-warning">
                                                <i className="bi bi-award fs-4"></i>
                                            </div>
                                            <div>
                                                <h6 className="fw-semibold mb-1">Certificado Digital</h6>
                                                <small className="text-muted">Reconhecido pela GM</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}