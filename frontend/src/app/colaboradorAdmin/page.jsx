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
                    <div
                        className="modal fade"
                        id="modalCadastrarColaborador"
                        tabIndex="-1"
                        aria-labelledby="modalCadastrarColaboradorLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                            <div className="modal-content">

                                <div className="modal-header">
                                    <h5 className="modal-title fw-bold" id="modalCadastrarColaboradorLabel">
                                        Cadastrar Novo Colaborador
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close"
                                        data-bs-dismiss="modal"
                                        aria-label="Close"
                                    ></button>
                                </div>

                                <div className="modal-body">

                                    {/* FORM COMPLETO */}
                                    <form className="row g-3">

                                        {/* === INFORMAÇÕES PESSOAIS === */}
                                        <h6 className="fw-bold mt-2">🧍 Informações Pessoais</h6>
                                        <hr />

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Nome Completo *</label>
                                            <input type="text" className="form-control" placeholder="Ex: João Silva" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">CPF *</label>
                                            <input type="text" className="form-control" placeholder="000.000.000-00" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">RG</label>
                                            <input type="text" className="form-control" placeholder="00.000.000-0" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Data de Nascimento *</label>
                                            <input type="date" className="form-control" />
                                        </div>


                                        {/* === INFORMAÇÕES DE CONTATO === */}
                                        <h6 className="fw-bold mt-3">📧 Informações de Contato</h6>
                                        <hr />

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">E-mail Corporativo *</label>
                                            <input type="email" className="form-control" placeholder="nome.sobrenome@gm.com" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Telefone *</label>
                                            <input type="text" className="form-control" placeholder="+55 11 98765-4321" />
                                        </div>

                                        <div className="col-12">
                                            <label className="form-label fw-semibold">Endereço</label>
                                            <input type="text" className="form-control" placeholder="Rua, Número, Bairro, Cidade - Estado" />
                                        </div>


                                        {/* === INFORMAÇÕES PROFISSIONAIS === */}
                                        <h6 className="fw-bold mt-3">🏢 Informações Profissionais</h6>
                                        <hr />

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">ID do Colaborador *</label>
                                            <input type="text" className="form-control" placeholder="GM-2025-XXXXX" disabled />
                                            <small className="text-muted">Gerado automaticamente</small>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Data de Admissão *</label>
                                            <input type="date" className="form-control" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Departamento *</label>
                                            <select className="form-select">
                                                <option>Selecione...</option>
                                                <option>Engenharia</option>
                                                <option>Produção</option>
                                                <option>RH</option>
                                                <option>TI</option>
                                                <option>Qualidade</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Cargo *</label>
                                            <input type="text" className="form-control" placeholder="Ex: Engenheiro Sênior" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Unidade *</label>
                                            <select className="form-select">
                                                <option>Selecione...</option>
                                                <option>São Caetano do Sul</option>
                                                <option>Gravatá</option>
                                                <option>São José dos Campos</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Gestor Direto</label>
                                            <input type="text" className="form-control" placeholder="Nome do gestor" />
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Nível Hierárquico *</label>
                                            <select className="form-select">
                                                <option>Selecione...</option>
                                                <option>Operacional</option>
                                                <option>Técnico</option>
                                                <option>Supervisor</option>
                                                <option>Gerente</option>
                                                <option>Diretor</option>
                                            </select>
                                        </div>

                                        <div className="col-md-6">
                                            <label className="form-label fw-semibold">Perfil de Acesso *</label>
                                            <select className="form-select">
                                                <option>Selecione...</option>
                                                <option>Administrador</option>
                                                <option>Gestor</option>
                                                <option>Colaborador</option>
                                            </select>
                                        </div>

                                    </form>
                                </div>

                                <div className="modal-footer">
                                    <button className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                    <button className="btn btn-primary">Cadastrar Colaborador</button>
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
