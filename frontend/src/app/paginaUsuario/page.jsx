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
          <div class="container my-4">
            <div class="row justify-content-center g-4">

              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-info azul">
                  <div class="card-body d-flex align-items-center">
                    <div class="icon me-3">
                      <i class="bi bi-book"></i>
                    </div>
                    <div>
                      <p class="titulo mb-1">Cursos Concluídos</p>
                      <p class="valor mb-0">24</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-info laranja">
                  <div class="card-body d-flex align-items-center">
                    <div class="icon me-3">
                      <i class="bi bi-clock"></i>
                    </div>
                    <div>
                      <p class="titulo mb-1">Horas de Treinamento</p>
                      <p class="valor mb-0">156h</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-info verde">
                  <div class="card-body d-flex align-items-center">
                    <div class="icon me-3">
                      <i class="bi bi-award"></i>
                    </div>
                    <div>
                      <p class="titulo mb-1">Badges Conquistados</p>
                      <p class="valor mb-0">18</p>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                <div class="card card-info roxo">
                  <div class="card-body d-flex align-items-center">
                    <div class="icon me-3">
                      <i class="bi bi-graph-up"></i>
                    </div>
                    <div>
                      <p class="titulo mb-1">Progresso Geral</p>
                      <p class="valor mb-0">78%</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
