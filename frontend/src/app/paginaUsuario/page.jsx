"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./paginaUsuario.css";

export default function PaginaUsuario() {
  return (
    <div className="container-fluid pagina-usuario">
      <div className="row g-0">
        {/* Sidebar */}
        <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
          <ul className="list-unstyled menu">
            <li className="ativo mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-house-door"></i>
              <span>Dashboard</span>
            </li>
            <li className="mb-3 d-flex align-items-center gap-2">
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

        {/* Área principal: aqui criamos uma coluna larga (9 cols) que conterá duas colunas internas */}
        <main className="col-12 col-md-9 px-4 py-4">
          {/* Cabeçalho de boas-vindas e cards resumidos */}
          <section className="bemVindo mb-4">
            <p className="fs-5 fw-semibold">
              Bem-vindo, <strong>(Nome)</strong>
              <br />
              <span className="text-muted">Continue seu desenvolvimento profissional.</span>
            </p>
          </section>

          <div className="container-fluid my-2">
            <div className="row g-3">
              {/* cartões pequenos (4 itens) - mantive sua grid original */}
              <div className="col-12">
                <div className="row justify-content-start g-3">
                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info azul">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso">
                          <p className="titulo mb-1">Cursos Concluídos</p>
                          <p className="valor mb-0">24</p>
                        </div>
                        <div className="posicaoIcon">
                          <div className="icon me-0">
                            <i className="bi bi-book"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info laranja">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso">
                          <p className="titulo mb-1">Horas de Treinamento</p>
                          <p className="valor mb-0">156h</p>
                        </div>
                        <div className="posicaoIcon">
                          <div className="icon me-0">
                            <i className="bi bi-clock"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info verde">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso">
                          <p className="titulo mb-1">Badges Conquistados</p>
                          <p className="valor mb-0">18</p>
                        </div>
                        <div className="posicaoIcon">
                          <div className="icon me-0">
                            <i className="bi bi-award"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info roxo">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso">
                          <p className="titulo mb-1">Progresso Geral</p>
                          <p className="valor mb-0">78%</p>
                        </div>
                        <div className="posicaoIcon">
                          <div className="icon mb-0">
                            <i className="bi bi-graph-up"></i>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> {/* fim cartões resumidos */}
            </div>
          </div>

          {/* ===== Aqui vem a divisão fixa em duas colunas: esquerda (8) e direita (4) ===== */}
          <div className="row g-4 mt-2">
            {/* Coluna esquerda (maior) */}
            <div className="col-12 col-lg-8 coluna-esquerda">
              {/* Minha Trilha */}
              <div className="Cards">
                <div className="Cards-estrutura">
                  <div className="icone-trilha">
                    <i className="bi bi-graph-up"></i>
                  </div>
                  <div>
                    <p className="titulo-principal">Minha Trilha de Desenvolvimento</p>
                    <p className="subtitulo-trilha">Liderança e Gestão de Pessoas</p>
                  </div>
                </div>

                <div className="progresso-container">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <p className="m-0">Progresso</p>
                    <p className="m-0 porcentagemCurso">65%</p>
                  </div>

                  <div className="progress" role="progressbar" aria-label="Progresso" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">
                    <div className="progress-bar azul-escuro" style={{ width: "65%" }}></div>
                  </div>
                </div>

                <div className="dados-trilha d-flex justify-content-between mt-3">
                  <div>
                    <p className="label">Cursos Concluídos</p>
                    <p className="valor-trilha">13/20</p>
                  </div>
                  <div>
                    <p className="label">Próximo Curso</p>
                    <p className="proximo-curso">Comunicação Assertiva para Líderes</p>
                  </div>
                </div>

                <button className="btn-continuar mt-4">
                  Continuar Trilha <i className="bi bi-arrow-right"></i>
                </button>
              </div>

              {/* Cursos Recomendados */}
              <div className="Cards">
                <div className="Cards-estrutura">
                  <div>
                    <p className="titulo-principal">Cursos Recomendados</p>
                    <p className="subtitulo-trilha">Com base no seu perfil e objetivos</p>
                  </div>
                </div>

                <div className="lista-cursos">
                  <div className="curso-item">
                    <div className="curso-info">
                      <p className="nome-curso">Metodologias Ágeis na Prática</p>
                      <div className="detalhes-curso">
                        <i className="bi bi-clock"></i>
                        <span className="duracao">12h</span>
                        <span className="categoria">Agilidade</span>
                        <span className="nivel">Intermediário</span>
                      </div>
                    </div>
                    <button className="btn-verDetalhes">Ver Detalhes</button>
                  </div>

                  <div className="curso-item">
                    <div className="curso-info">
                      <p className="nome-curso">Análise de Dados com Power BI</p>
                      <div className="detalhes-curso">
                        <i className="bi bi-clock"></i>
                        <span className="duracao">16h</span>
                        <span className="categoria">Análise de Dados</span>
                        <span className="nivel">Básico</span>
                      </div>
                    </div>
                    <button className="btn-verDetalhes">Ver Detalhes</button>
                  </div>

                  <div className="curso-item">
                    <div className="curso-info">
                      <p className="nome-curso">Inovação e Design Thinking</p>
                      <div className="detalhes-curso">
                        <i className="bi bi-clock"></i>
                        <span className="duracao">8h</span>
                        <span className="categoria">Inovação</span>
                        <span className="nivel">Intermediário</span>
                      </div>
                    </div>
                    <button className="btn-verDetalhes">Ver Detalhes</button>
                  </div>
                </div>

                <button className="btn-todos-cursos">Ver Todos os Cursos</button>
              </div>
            </div>

            {/* Coluna direita (menor) */}
            <aside className="col-12 col-lg-4 coluna-direita">
              <div className="Cards">
                <p className="titulo-principal mb-3">
                  <i className="bi bi-calendar-event me-2"></i> Próximos Treinamentos
                </p>

                <div className="treinamento mb-3">
                  <p className="titulo-treinamento">Workshop: Cultura de Segurança</p>
                  <p className="detalhe-treinamento">
                    <i className="bi bi-calendar"></i> 15/11/2025 às 14:00
                  </p>
                  <p className="detalhe-treinamento">
                    <i className="bi bi-geo-alt"></i> Presencial - Sala 301
                  </p>
                  <span className="status confirmado">Confirmado</span>
                </div>

                <div className="treinamento">
                  <p className="titulo-treinamento">Webinar: Tendências Automotivas 2026</p>
                  <p className="detalhe-treinamento">
                    <i className="bi bi-calendar"></i> 20/11/2025 às 10:00
                  </p>
                  <p className="detalhe-treinamento">
                    <i className="bi bi-laptop"></i> Online - Teams
                  </p>
                  <span className="status aguardando">Aguardando Confirmação</span>
                </div>
              </div>

              <div className="Cards">
                <p className="titulo-principal mb-3">
                  <i className="bi bi-award me-2"></i> Conquistas Recentes
                </p>

                <div className="conquista">
                  <i className="bi bi-trophy-fill icone-conquista ouro"></i>
                  <span>Líder Inspirador</span>
                </div>
                <div className="conquista">
                  <i className="bi bi-star icone-conquista azul"></i>
                  <span>Aluno Dedicado</span>
                </div>
                <div className="conquista">
                  <i className="bi bi-bullseye icone-conquista verde"></i>
                  <span>Meta Alcançada</span>
                </div>

                <button className="btn-todas-conquistas mt-3">Ver Todas</button>
              </div>
            </aside>
          </div>
        </main>
      </div>
    </div>
  );
}
