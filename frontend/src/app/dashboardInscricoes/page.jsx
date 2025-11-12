"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboardInscricoes.css";

export default function DashboardInscricoes() {
    return (
        <div className="container-fluid pagina-dashboardInscricoes">
            <div className="row flex-nowrap">
                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
                    <ul className="list-unstyled menu">
                        <li className="ativo mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <span>Dashboard</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-grid"></i>
                            <span>Gerenciar Treinamentos</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-bar-chart"></i>
                            <span>Relatório de Skill Gap</span>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <span>Gerencial Colaboradores</span>
                        </li>
                    </ul>
                </aside>

                <main className="col-12 col-md-9 px-4 py-4">
                    <section className="introducao mb-4">
                        <div className="trocaPagina">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Dashboard</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Treinamentos</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Inscrições</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-disabled="true">Presença</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-disabled="true">Certificados</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-disabled="true">Histórico</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link " aria-disabled="true">Relatórios</a>
                                </li>
                            </ul>
                        </div>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </section>
                </main>
            </div>
        </div>
    );
}