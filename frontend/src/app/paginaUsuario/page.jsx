"use client"

import "bootstrap-icons/font/bootstrap-icons.css";
import "./paginaUsuario.css"

export default function PaginaUsuario() {
    return (<>

         <div className="pagina-usuario">
      {/* Sidebar */}
      <aside className="sidebar">
        <ul className="menu">
          <li className="ativo">
            <i className="bi bi-house-door"></i> Dashboard
          </li>
          <li>
            <i className="bi bi-book"></i> Catálogo de Treinamentos
          </li>
          <li>
            <i className="bi bi-award"></i> Meus Treinamentos
          </li>
          <li>
            <i className="bi bi-person"></i> Meu Perfil
          </li>
        </ul>
      </aside>

      {/* Conteúdo principal */}
      <main className="conteudo">
        <section className="bemVindo">
          <p>
            <strong>Bem-vindo, (Nome)</strong><br />
            Continue seu desenvolvimento profissional.
          </p>
        </section>

        {/* Cards dos tópicos */}
        <section className="cards">
          <div className="card-info azul">
            <div className="icon"><i className="bi bi-book"></i></div>
            <div>
              <p className="titulo">Cursos Concluídos</p>
              <p className="valor">24</p>
            </div>
          </div>

          <div className="card-info laranja">
            <div className="icon"><i className="bi bi-clock"></i></div>
            <div>
              <p className="titulo">Horas de Treinamento</p>
              <p className="valor">156h</p>
            </div>
          </div>

          <div className="card-info verde">
            <div className="icon"><i className="bi bi-award"></i></div>
            <div>
              <p className="titulo">Badges Conquistados</p>
              <p className="valor">18</p>
            </div>
          </div>

          <div className="card-info roxo">
            <div className="icon"><i className="bi bi-graph-up-arrow"></i></div>
            <div>
              <p className="titulo">Progresso Geral</p>
              <p className="valor">78%</p>
            </div>
          </div>
        </section>
      </main>
    </div>





    </>
    );
}