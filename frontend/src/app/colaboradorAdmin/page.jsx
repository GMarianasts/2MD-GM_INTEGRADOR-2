"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TabelaColaboradores from "../../components/colaboradoresTabela/colaboradoresTabela";
import "./colaborador.css"
import Link from "next/link";

export default function PaginaColaboradores() {
    return (<>

        <div className="container-fluid pagina-usuario">
            <div className="row g-0">

                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
                    <ul className="list-unstyled menu">
                        <li className=" mb-3 d-flex align-items-center gap-2">
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
                        <li className="ativo d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <span>Gerencial Colaboradores</span>
                        </li>
                    </ul>
                </aside>

                <main className="col-12 col-md-9 px-4 py-4">
                    <div>
                            <h2 className="h4 fw-bold mb-1" style={{ color: "#0a2b6b" }}>Gerenciar Colaboradores</h2>
                            <p className="descricao text-muted mb-0">
                                Administre os colaboradores e suas permissões
                            </p>
                        </div>


                    <div className="row g-3 cards-wrapper">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6 col-sm-6 col-md-3 px-2">
                                    <div className="card card-info azul">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="progresso">
                                                <p className="titulo mb-1">Total de Colaboladores</p>
                                                <p className="valor mb-0">5</p>
                                            </div>
                                            <div className="posicaoIcon">
                                                <div className="icon me-0">
                                                    <i className="bi bi-bar-chart"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3 px-2">
                                    <div className="card card-info laranja">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="progresso">
                                                <p className="titulo mb-1">Colaboradores Ativos</p>
                                                <p className="valor mb-0">4</p>
                                            </div>
                                            <div className="posicaoIcon">
                                                <div className="icon me-0">
                                                    <i className="bi bi-people"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-6 col-sm-6 col-md-3 px-2">
                                    <div className="card card-info verde">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="progresso">
                                                <p className="titulo mb-1">Departamentos</p>
                                                <p className="valor mb-0">8</p>
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
                                                <p className="titulo mb-1">Taxa média de conclusão</p>
                                                <p className="valor mb-0">83%</p>
                                            </div>
                                            <div className="posicaoIcon">
                                                <div className="icon mb-0">
                                                    <i className="bi bi-graph-up-arrow"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>



                    {/* Tabela */}
                    <TabelaColaboradores />
                </main>
            </div>
        </div>

    </>);
}
