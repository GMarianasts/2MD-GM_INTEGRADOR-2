"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./paginaUsuario.css";

export default function PaginaUsuario() {
  return (
    <div className="container-fluid pagina-usuario">
      <div className="row flex-nowrap">
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

        {/* Conteúdo principal */}
        <section className="paginaPrincipal">
          <main className="col px-4 py-4 conteudo">
            <section className="bemVindo mb-4">
              <p className="fs-5 fw-semibold">
                Bem-vindo, <strong>(Nome)</strong>
                <br />
                <span className="text-muted">
                  Continue seu desenvolvimento profissional.
                </span>
              </p>
            </section>

            {/* Cards dos tópicos */}
            <div className="container my-4">
              <div className="row justify-content-center g-4">

                <div className="col-12 col-sm-6 col-md-3 px-2">
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

                <div className="col-12 col-sm-6 col-md-3 px-2">
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

                <div className="col-12 col-sm-6 col-md-3 px-2">
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

                <div className="col-12 col-sm-6 col-md-3 px-2">
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
            </div>
          </main>

          <section className="direita">
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



            <div className="Cards">
              <div className="Cards-estrutura">
                <div>
                  <p className="titulo-principal">Cursos Recomendados</p>
                  <p className="subtitulo-trilha">Com base no seu perfil e objetivos</p>
                </div>
              </div>

              <div className="progresso-container">
                <div className="cursos">
                  <p className="primeiro-curso">Metodologias Ágeis na Prática</p>
                  <div className="icon-curso d-flex align-items-center gap-2">
                    <i className="bi bi-clock"></i>
                    <p className="subtopcio mb-0">Agilidade</p>
                    <p className="nivel mb-0">Intermediário</p>
                  </div>
                </div>

                <div className="cursos">
                  <p className="primeiro-curso">Metodologias Ágeis na Prática</p>
                  <div className="icon-curso d-flex align-items-center gap-2">
                    <i className="bi bi-clock"></i>
                    <p className="subtopcio mb-0">Agilidade</p>
                    <p className="nivel mb-0">Intermediário</p>
                  </div>
                </div>
              </div>


            </div>
          </section>
        </section>
      </div >
    </div >



  );
}
