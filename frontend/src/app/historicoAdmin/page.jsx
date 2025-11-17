"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./historicoAdmin.css";
import Link from "next/link";

export default function DashboardHistorico() {
    return (
        <div className="container-fluid pagina-dashboardInscricoes">
            <div className="row g-0">

                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
                    <ul className="list-unstyled menu">
                        <li className="ativo mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <Link href={'dashboardAdmin'}><span>Dashboard</span></Link>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-grid"></i>
                            <Link href={'gerenciar_Treinamento_admin'}><span>Gerenciar Treinamentos</span></Link>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-bar-chart"></i>
                            <Link href={'Relatorio'}><span>Relatório de Skill Gap</span></Link>
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
                                    <Link className="nav-link" aria-current="page" href={"dashboardAdmin"}>Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={"inscricoesAdmin"}>Inscrições</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={"presencaAdmin"} aria-disabled="true">Presença</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" href={"certificadosAdmin"} aria-disabled="true">Certificados</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" href={'historicoAdmin'} aria-disabled="true">Histórico</Link>
                                </li>
                            </ul>            
                        </div>
                    </section>

                    <div className="container-fluid my-2">
                        <div className="row g-3">
                            <div className="col-12">
                                
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}