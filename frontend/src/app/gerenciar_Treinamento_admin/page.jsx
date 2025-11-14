"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./gerenciar.css";

export default function DashboardAdmin() {
    return (
        <div className="container-fluid pagina-usuario">
            <div className="row flex-nowrap">
                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar" style={{ minHeight: '100vh' }}>
                    <ul className="list-unstyled menu">
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <span>Dashboard</span>
                        </li>
                        <li className="ativo mb-3 d-flex align-items-center gap-2">
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
                <main className="col-12 col-md-9 col-lg-10 p-4 bg-light">

                    <div className="d-flex justify-content-between align-items-center mb-4">

                        <div>
                            <h2 className="h4 mb-1 titulo">Gerenciar Treinamentos</h2>
                            <p className="descricao text-muted mb-0">
                                Administre todos os treinamentos da plataforma
                            </p>
                        </div>

                        <button
                            className="btn text-white d-flex align-items-center gap-2 px-4 py-2 rounded-3 fw-semibold shadow-sm"
                            style={{ backgroundColor: "#0a2b6b", borderColor: "#0a2b6b" }}
                        >
                            <i className="bi bi-plus-lg fs-5"></i>
                            <span>Novo Treinamento</span>
                        </button>

                    </div>

                    <div className="row g-3">
                        <div className="col-12">
                            <div className="row justify-content-start g-3">
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card h-100 border rounded-4 bg-white shadow-sm">
                                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                                            <span className="text-muted mb-2">Total de Treinamentos</span>
                                            <h2 className="fw-bold mb-2" style={{ color: "#0a2b6b" }}>
                                                24
                                            </h2>
                                            <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                                                +3 este mês
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card h-100 border rounded-4 bg-white shadow-sm">
                                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                                            <span className="text-muted mb-2">Treinamentos Ativos</span>
                                            <h2 className="fw-bold mb-2" style={{ color: "#0a2b6b" }}>
                                                18
                                            </h2>
                                            <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                                                75% do total
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card h-100 border rounded-4 bg-white shadow-sm">
                                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                                            <span className="text-muted mb-2">Total de Inscritos</span>
                                            <h2 className="fw-bold mb-2" style={{ color: "#0a2b6b" }}>
                                                456
                                            </h2>
                                            <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                                                +12% vs mês anterior
                                            </small>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 col-lg-3">
                                    <div className="card h-100 border rounded-4 bg-white shadow-sm">
                                        <div className="card-body p-4 d-flex flex-column justify-content-center">
                                            <span className="text-muted mb-2">Taxa de Ocupação</span>
                                            <h2 className="fw-bold mb-2" style={{ color: "#0a2b6b" }}>
                                                82%
                                            </h2>
                                            <small className="text-muted" style={{ fontSize: "0.85rem" }}>
                                                Acima da meta
                                            </small>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="row g-3 mb-4 mt-4">
                        <div className="col-12">

                            {/* Card Branco */}
                            <div className="card1 border rounded-4 bg-white shadow-sm p-3">

                                {/* Container Flex: w-100 garante que o container ocupe a largura total do card */}
                                <div className="d-flex flex-column flex-md-row align-items-center gap-3 w-100">

                                    {/* === BARRA DE PESQUISA === */}
                                    {/* flex-grow-1: Força a barra a crescer o máximo possível */}
                                    <div
                                        className="d-flex align-items-center px-3 py-2 rounded-3 flex-grow-1 w-100"
                                        style={{ backgroundColor: "#f8f9fa" }}
                                    >
                                        <i className="bi bi-search text-muted me-2"></i>
                                        <input
                                            type="text"
                                            className="form-control border-0 bg-transparent shadow-none p-0 text-dark"
                                            placeholder="Buscar por título, instrutor ou competência..."
                                            style={{ fontSize: "0.95rem", outline: "none" }}
                                        />
                                    </div>

                                    {/* === BOTÕES === */}
                                    <div className="d-flex gap-2 w-100 w-md-auto">

                                        <button className="btn btn-no-hover d-flex align-items-center gap-2 rounded-3 px-3 fw-medium text-nowrap justify-content-center">
                                            <i className="bi bi-funnel"></i>
                                            Filtros
                                        </button>

                                        <button className="btn btn-no-hover d-flex align-items-center gap-2 rounded-3 px-3 fw-medium text-nowrap justify-content-center">
                                            <i className="bi bi-download"></i>
                                            Exportar
                                        </button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row g-3">
                        <div className="col-12">
                            <div className="card1 border rounded-4 bg-white shadow-sm">
                                <div className="card-body p-4">

                                    <div className="mb-4">
                                        <h5 className="fw-bold mb-1">Todos os Treinamentos</h5>
                                        <p className="text-muted small mb-0">
                                            6 treinamentos cadastrados
                                        </p>
                                    </div>

                                    <div className="table-responsive">
                                        <table className="table table-hover align-middle">
                                            <thead className="table-light">
                                                <tr>
                                                    <th className="border-0 text-muted small fw-semibold ps-3">Título</th>
                                                    <th className="border-0 text-muted small fw-semibold">Modalidade</th>
                                                    <th className="border-0 text-muted small fw-semibold">Status</th>
                                                    <th className="border-0 text-muted small fw-semibold">Instrutor</th>
                                                    <th className="border-0 text-muted small fw-semibold">Competências</th>
                                                    <th className="border-0 text-muted small fw-semibold">Inscritos</th>
                                                    <th className="border-0 text-muted small fw-semibold">Início</th>
                                                    <th className="border-0 text-muted small fw-semibold text-end pe-3">Ações</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                {/* =================================================================
                    ÁREA DINÂMICA (COMENTADA PARA NÃO DAR ERRO AGORA)
                    Quando quiser usar o JSON, remova os comentários {/* e * /} abaixo
                    =================================================================
                  */}

                                                {/* {dadosJSON.map((item) => (
                    <tr key={item.id}>
                      <td className="ps-3 py-3">
                        <span className="fw-medium" style={{color: '#0a2b6b'}}>{item.titulo}</span>
                      </td>
                      <td className="text-muted">{item.modalidade}</td>
                      <td>
                        <span className={`badge rounded-pill border px-3 ${getStatusClass(item.status)}`}>
                          {item.status}
                        </span>
                      </td>
                      <td className="text-muted">{item.instrutor}</td>
                      <td>
                        <div className="d-flex gap-1 flex-wrap">
                          {item.competencias.map((tag, i) => (
                             <span key={i} className="badge bg-light text-dark border fw-normal">{tag}</span>
                          ))}
                        </div>
                      </td>
                      <td className="text-muted">
                        <div className="d-flex align-items-center gap-2">
                            <i className="bi bi-people text-secondary"></i>
                            {item.inscritos}/{item.totalVagas}
                        </div>
                      </td>
                      <td className="text-muted">{item.inicio}</td>
                      <td className="text-end pe-3">
                        <button className="btn btn-light btn-sm rounded-circle">
                            <i className="bi bi-three-dots-vertical text-muted"></i>
                        </button>
                      </td>
                    </tr>
                  ))}
                  */}
                                                <tr>
                                                    <td className="ps-3 py-3">
                                                        <span className="fw-medium" style={{ color: '#0a2b6b' }}>Metodologias Ágeis na Prática</span>
                                                    </td>
                                                    <td className="text-muted">Online</td>
                                                    <td><span className="badge rounded-pill border bg-success-subtle text-success border-success-subtle px-3">Ativo</span></td>
                                                    <td className="text-muted">Maria Santos</td>
                                                    <td>
                                                        <div className="d-flex gap-1">
                                                            <span className="badge bg-light text-dark border fw-normal">Agilidade</span>
                                                            <span className="badge bg-light text-dark border fw-normal">Gestão</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted"><i className="bi bi-people text-secondary me-1"></i> 45/60</td>
                                                    <td className="text-muted">01/12/2025</td>
                                                    <td className="text-end pe-3"><i className="bi bi-three-dots-vertical text-muted"></i></td>
                                                </tr>

                                                <tr>
                                                    <td className="ps-3 py-3">
                                                        <span className="fw-medium" style={{ color: '#0a2b6b' }}>Segurança da Informação</span>
                                                    </td>
                                                    <td className="text-muted">Online</td>
                                                    <td><span className="badge rounded-pill border bg-secondary-subtle text-secondary border-secondary-subtle px-3">Rascunho</span></td>
                                                    <td className="text-muted">Fernanda Lima</td>
                                                    <td>
                                                        <div className="d-flex gap-1">
                                                            <span className="badge bg-light text-dark border fw-normal">Tecnologia</span>
                                                        </div>
                                                    </td>
                                                    <td className="text-muted"><i className="bi bi-people text-secondary me-1"></i> 0/50</td>
                                                    <td className="text-muted">20/12/2025</td>
                                                    <td className="text-end pe-3"><i className="bi bi-three-dots-vertical text-muted"></i></td>
                                                </tr>

                                            </tbody>
                                        </table>
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