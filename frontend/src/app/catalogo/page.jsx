import Card from "@/components/Card";
import Filtros from "@/components/Filtro";
import "./catalogo.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function Page() {
  return (
    <div className="container-fluid pagina-usuario">
      <div className="row flex-nowrap">
        <aside className="d-none d-md-block col-md-3 col-lg-2 sidebar p-3">
          <ul className="list-unstyled menu">
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
        <main className="col-12 col-md-9 col-lg-10 p-4 conteudo">
          <h2 className="h4 mb-3 titulo">Catálogo de Treinamentos</h2>
          <p className="descricao">
            Explore nosso catálogo completo e encontre o treinamento ideal
          </p>

          <div className="input-group mb-4 shadow-sm barra-busca">
            <span className="input-group-text bg-white border-end-0">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-start-0"
              placeholder="Buscar por nome, competência ou instrutor..."
            />
          </div>

          <div className="row">
            <div className="col-lg-3">
              <Filtros />
            </div>
            <div className="col-lg-9">
              <p className="text-muted mb-3">4 treinamentos encontrados</p>
              <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
                <div className="col"><Card /></div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}