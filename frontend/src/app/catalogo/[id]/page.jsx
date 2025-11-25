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

    const renderizarLista = (texto) => {
        if (!texto) return <li>Informação não disponível.</li>;
        return texto.split('\n').map((item, index) => {
            const itemLimpo = item.replace(/^-\s*/, '').trim();
            if (!itemLimpo) return null;
            return (
                <li key={index} className="d-flex align-items-start gap-2">
                    <i className="bi bi-check-circle text-success mt-1"></i>
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
                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
                    <ul className="list-unstyled menu">
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <Link href={'/paginaUsuario'}><span>Dashboard</span></Link>
                        </li>
                        <li className="ativo mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-book"></i>
                            <Link href={'/catalogo'}><span>Catálogo de Treinamentos</span></Link>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-award"></i>
                            <Link href={'/meuTreinamento'}><span>Meus Treinamentos</span></Link>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <Link href={'/paginaPerfil'}><span>Meu Perfil</span></Link>
                        </li>
                    </ul>
                </aside>
                <main className="col-12 col-md-9 col-lg-10 bg-light p-0 d-flex flex-column min-vh-100">
                    <div className="p-4 w-100 flex-grow-1">
                        <div className="mb-4">
                            <Link href={'/catalogo'} className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-2">
                                <i className="bi bi-arrow-left"></i>
                                Voltar ao Catálogo
                            </Link>
                        </div>

                        <div
                            className="rounded-4 p-4 p-lg-5 text-white mb-5 position-relative overflow-hidden shadow"
                            style={{ backgroundColor: "#0a2b6b" }}
                        >
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="d-flex gap-2 mb-3">
                                        <span className="badge bg-warning text-dark rounded-pill">{curso.categoria}</span>
                                        <span className="badge bg-light text-dark rounded-pill">{curso.nivel}</span>
                                        <span className="badge border border-light rounded-pill">{curso.modalidade}</span>
                                    </div>

                                    <h1 className="fw-bold mb-3">{curso.titulo}</h1>
                                    <p className="mb-4 text-light opacity-75">
                                        {curso.descricao}
                                    </p>

                                    <div className="d-flex flex-wrap gap-4 text-light opacity-75 mb-4 text-sm">
                                        <span><i className="bi bi-clock me-2"></i>{curso.duracao_horas}</span>
                                        <span><i className="bi bi-people me-2"></i>{curso.inscritos_atuais} inscritos</span>
                                        <span><i className="bi bi-star-fill text-warning me-2"></i>4.8 (32 avaliações)</span>
                                        <span><i className="bi bi-calendar-event me-2"></i>Início: {formatarData(curso.data_inicio)}</span>
                                    </div>
                                </div>

                                <div className="col-lg-4 d-flex flex-column align-items-lg-end justify-content-start gap-3">
                                    <button className="btn btn-warning text-white fw-bold px-4 py-2 rounded-3 d-flex align-items-center gap-2 w-100 justify-content-center" style={{ backgroundColor: "#fd7e14", borderColor: "#fd7e14" }}>
                                        <i className="bi bi-play-fill fs-5"></i>
                                        Continuar Curso
                                    </button>
                                    <button className="btn btn-outline-light px-4 py-2 rounded-3 d-flex align-items-center gap-2 w-100 justify-content-center">
                                        <i className="bi bi-download"></i>
                                        Material do Curso
                                    </button>
                                </div>
                            </div>

                            <div className="mt-4">
                                <div className="d-flex justify-content-between mb-1">
                                    <small>Seu Progresso</small>
                                    <small>40%</small>
                                </div>
                                <div className="progress" style={{ height: "8px", backgroundColor: "rgba(255,255,255,0.2)" }}>
                                    <div
                                        className="progress-bar bg-white"
                                        role="progressbar"
                                        style={{ width: "40%" }}
                                        aria-valuenow="40"
                                        aria-valuemin="0"
                                        aria-valuemax="100"
                                    ></div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-light rounded-pill p-1 d-inline-flex w-100 mb-5 overflow-auto border">
                            <div className="d-flex gap-1 w-100 overflow-auto">
                                <button className="btn bg-white text-dark fw-semibold rounded-pill shadow-sm px-4 flex-grow-1 flex-md-grow-0">Visão Geral</button>
                                <button className="btn text-muted fw-medium rounded-pill px-4 flex-grow-1 flex-md-grow-0">Conteúdo Programático</button>
                                <button className="btn text-muted fw-medium rounded-pill px-4 flex-grow-1 flex-md-grow-0">Instrutor</button>
                                <button className="btn text-muted fw-medium rounded-pill px-4 flex-grow-1 flex-md-grow-0">Avaliações</button>
                            </div>
                        </div>
                        <div className="row g-4 mb-4">
                            <div className="col-lg-8">
                                <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                                    <h5 className="fw-bold mb-3">Sobre o Curso</h5>
                                    <p className="text-muted mb-0" style={{ lineHeight: "1.6", whiteSpace: "pre-wrap" }}>
                                        {curso.sobre || "Descrição detalhada não informada."}
                                    </p>
                                </div>
                                <div className="card border-0 shadow-sm rounded-4 p-4">
                                    <h5 className="fw-bold mb-3">Objetivos de Aprendizagem</h5>
                                    <ul className="list-unstyled d-flex flex-column gap-3 mb-0 text-muted">
                                        {renderizarLista(curso.objetivos)}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                                    <h5 className="fw-bold mb-3">Pré-requisitos</h5>
                                    <ul className="text-muted ps-3 mb-0 list-unstyled d-flex flex-column gap-2" style={{ lineHeight: "1.5" }}>
                                        {curso.pre_requisitos ? curso.pre_requisitos.split('\n').map((req, i) => (
                                            <li key={i} className="d-flex gap-2">
                                                <i className="bi bi-dot fs-4 lh-1"></i>
                                                {req.replace(/^-\s*/, '')}
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
                                            <small className="text-muted">Ao concluir o curso</small>
                                        </div>
                                    </div>
                                    <p className="text-muted mt-3 mb-0 small">
                                        Você receberá um certificado digital reconhecido pela GM ao completar todas as atividades e avaliações.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}