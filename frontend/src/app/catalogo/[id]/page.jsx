"use client";

import { useState } from "react";
import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../catalogo.css";

export default function DetalhesCurso() {
  const [abaAtiva, setAbaAtiva] = useState("visao-geral");

  return (
    <div className="container-fluid pagina-usuario">
      <div className="row flex-nowrap">
        
        <aside className="d-none d-md-block col-md-3 col-lg-2 sidebar p-3 border-end bg-white" style={{ minHeight: "100vh" }}>
          <ul className="list-unstyled menu sticky-top pt-3">
            <li className="mb-3 d-flex align-items-center gap-2"><i className="bi bi-house-door"></i><span>Dashboard</span></li>
            <li className="ativo mb-3 d-flex align-items-center gap-2"><i className="bi bi-book"></i><span>Catálogo de Treinamentos</span></li>
            <li className="mb-3 d-flex align-items-center gap-2"><i className="bi bi-award"></i><span>Meus Treinamentos</span></li>
            <li className="d-flex align-items-center gap-2"><i className="bi bi-person"></i><span>Meu Perfil</span></li>
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
                    <div className="d-flex align-items-center gap-3 mb-3">
                      <div className="rounded-circle bg-secondary text-white d-flex justify-content-center align-items-center" style={{width: 60, height: 60}}>MS</div>
                      <div>
                        <h5 className="fw-bold mb-0">Maria Santos</h5>
                        <span className="text-muted">Agile Coach Sênior</span>
                      </div>
                    </div>
                    <p className="text-muted">Especialista em transformação ágil com mais de 10 anos de experiência.</p>
                    <h6 className="fw-bold mt-4 mb-3">Experiência Profissional</h6>
                    <ul className="text-muted ps-3" style={{ lineHeight: "1.8" }}>
                        <li>Agile Coach na General Motors (2020 - Atual)</li>
                        <li>Scrum Master na TechSolutions (2015 - 2020)</li>
                    </ul>
                  </div>
                )}

              </div>
              {abaAtiva === 'visao-geral' && (
                <div className="col-lg-4">
                  <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                    <h5 className="fw-bold mb-3">Pré-requisitos</h5>
                    <ul className="text-muted ps-3 mb-0"><li>Conhecimento básico de gestão</li></ul>
                  </div>
                  <div className="card border-0 shadow-sm rounded-4 p-4">
                    <h5 className="fw-bold mb-3">Certificação</h5>
                    <div className="d-flex gap-3 align-items-center">
                      <div className="bg-warning bg-opacity-10 p-3 rounded-3 text-warning"><i className="bi bi-award fs-4"></i></div>
                      <div><h6 className="fw-semibold mb-1">Certificado Digital</h6><small className="text-muted">Ao concluir</small></div>
                    </div>
                    <p className="text-muted mt-3 mb-0 small">Certificado reconhecido pela GM.</p>
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