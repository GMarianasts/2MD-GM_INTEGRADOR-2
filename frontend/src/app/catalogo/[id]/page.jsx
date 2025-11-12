import Link from "next/link";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../catalogo.css";

export default function DetalhesCurso() {
  return (
    <div className="container-fluid pagina-usuario">
      <div className="row flex-nowrap">

        {/* === SIDEBAR === */}
        <aside className="d-none d-md-block col-md-3 col-lg-2 sidebar p-3 border-end bg-white" style={{ minHeight: "100vh" }}>
          <ul className="list-unstyled menu sticky-top pt-3">
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-house-door"></i>
              <span>Dashboard</span>
            </li>
            <li className="ativo mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-book"></i>
              <span>Catálogo de Treinamentos</span>
            </li>
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-award"></i>
              <span>Meus Treinamentos</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="bi bi-person"></i>
              <span>Meu Perfil</span>
            </li>
          </ul>
        </aside>

        {/* === MAIN === */}
        {/* Adicionado d-flex flex-column min-vh-100 para empurrar o footer */}
        <main className="col-12 col-md-9 col-lg-10 bg-light p-0 d-flex flex-column min-vh-100">

          {/* Conteúdo Principal (flex-grow-1 ocupa o espaço disponível) */}
          <div className="p-4 w-100 flex-grow-1">
            <div className="mb-4">
              <Link href="/" className="text-decoration-none text-dark fw-semibold d-flex align-items-center gap-2">
                <i className="bi bi-arrow-left"></i>
                Voltar ao Catálogo
              </Link>
            </div>

            {/* Hero Section */}
            <div
              className="rounded-4 p-4 p-lg-5 text-white mb-5 position-relative overflow-hidden shadow"
              style={{ backgroundColor: "#0a2b6b" }}
            >
              <div className="row">
                <div className="col-lg-8">
                  <div className="d-flex gap-2 mb-3">
                    <span className="badge bg-warning text-dark rounded-pill">Agilidade</span>
                    <span className="badge bg-light text-dark rounded-pill">Intermediário</span>
                    <span className="badge border border-light rounded-pill">Online</span>
                  </div>

                  <h1 className="fw-bold mb-3">Metodologias Ágeis na Prática</h1>
                  <p className="mb-4 text-light opacity-75">
                    Aprenda a aplicar Scrum, Kanban e outras metodologias ágeis em projetos reais da indústria automotiva.
                  </p>

                  <div className="d-flex flex-wrap gap-4 text-light opacity-75 mb-4 text-sm">
                    <span><i className="bi bi-clock me-2"></i>12h</span>
                    <span><i className="bi bi-people me-2"></i>45 inscritos</span>
                    <span><i className="bi bi-star-fill text-warning me-2"></i>4.8 (32 avaliações)</span>
                    <span><i className="bi bi-calendar-event me-2"></i>Início: 01/12/2025</span>
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

            {/* Abas */}
            <div className="bg-light rounded-pill p-1 d-inline-flex w-100 mb-5 overflow-auto border">
              <div className="d-flex gap-1 w-100 overflow-auto">
                <button className="btn bg-white text-dark fw-semibold rounded-pill shadow-sm px-4 flex-grow-1 flex-md-grow-0">Visão Geral</button>
                <button className="btn text-muted fw-medium rounded-pill px-4 flex-grow-1 flex-md-grow-0">Conteúdo Programático</button>
                <button className="btn text-muted fw-medium rounded-pill px-4 flex-grow-1 flex-md-grow-0">Instrutor</button>
                <button className="btn text-muted fw-medium rounded-pill px-4 flex-grow-1 flex-md-grow-0">Avaliações</button>
              </div>
            </div>

            {/* Cards de Conteúdo */}
            <div className="row g-4 mb-4">
              <div className="col-lg-8">
                <div className="card border-0 shadow-sm rounded-4 p-4 mb-4 h-50">
                  <h5 className="fw-bold mb-3">Sobre o Curso</h5>
                  <p className="text-muted mb-0" style={{ lineHeight: "1.6" }}>
                    Este curso foi desenvolvido para profissionais que desejam dominar as principais metodologias ágeis utilizadas em grandes projetos. Você aprenderá desde os conceitos fundamentais até a aplicação prática em cenários reais da General Motors, incluindo cases de sucesso e desafios comuns encontrados na transformação ágil.
                  </p>
                </div>
                <div className="card border-0 shadow-sm rounded-4 p-4">
                  <h5 className="fw-bold mb-3">Objetivos de Aprendizagem</h5>
                  <ul className="list-unstyled d-flex flex-column gap-3 mb-0 text-muted">
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle text-success mt-1"></i>Compreender os princípios e valores do Manifesto Ágil</li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle text-success mt-1"></i>Aplicar Scrum em projetos de desenvolvimento</li>
                    <li className="d-flex align-items-start gap-2"><i className="bi bi-check-circle text-success mt-1"></i>Utilizar Kanban para gestão de fluxo de trabalho</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="card border-0 shadow-sm rounded-4 p-4 mb-4">
                  <h5 className="fw-bold mb-3">Pré-requisitos</h5>
                  <ul className="text-muted ps-3 mb-0" style={{ lineHeight: "1.8" }}>
                    <li>Conhecimento básico de gestão de projetos</li>
                    <li>Experiência em trabalho em equipe</li>
                    <li>Familiaridade com conceitos de desenvolvimento de produtos</li>
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