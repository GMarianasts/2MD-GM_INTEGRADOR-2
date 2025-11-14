"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboardAdmin.css";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from "recharts";

export default function DashboardAdmin() {

    const dadosTendencia = [
        { mes: "Jan", inscricoes: 70, conclusoes: 68 },
        { mes: "Fev", inscricoes: 75, conclusoes: 72 },
        { mes: "Mar", inscricoes: 90, conclusoes: 85 },
        { mes: "Abr", inscricoes: 110, conclusoes: 100 },
        { mes: "Mai", inscricoes: 125, conclusoes: 115 },
        { mes: "Jun", inscricoes: 140, conclusoes: 125 },
    ];

    const dadosCategorias = [
        { name: "Segurança", value: 30, color: "#1E56A0" },
        { name: "Técnico", value: 27, color: "#00B894" },
        { name: "Liderança", value: 17, color: "#A29BFE" },
        { name: "Compliance", value: 14, color: "#F0932B" },
        { name: "Qualidade", value: 11, color: "#E74C3C" },
    ];

    return (
        <div className="container-fluid pagina-usuario">
            <div className="row g-0">

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
                            </ul>
                        </div>
                        <div className="search-container">
                            <i className="bi bi-search search-icon"></i>
                            <input
                                type="text"
                                className="search-input"
                                placeholder="Buscar treinamentos, colaboradores..."
                            />
                        </div>
                    </section>

                    <div className="row g-3 cards-wrapper">
                        <div className="col-12">
                            <div className="row g-3">
                                <div className="col-6 col-sm-6 col-md-3 px-2">
                                    <div className="card card-info azul">
                                        <div className="card-body d-flex align-items-center">
                                            <div className="progresso">
                                                <p className="titulo mb-1">Treinamentos Ativos</p>
                                                <p className="valor mb-0">24</p>
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
                                                <p className="titulo mb-1">Colaboradores Inscritos</p>
                                                <p className="valor mb-0">1.247</p>
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
                                                <p className="titulo mb-1">Certificados Emitidos</p>
                                                <p className="valor mb-0">892</p>
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
                                                <p className="titulo mb-1">Taxa de Conclusão</p>
                                                <p className="valor mb-0">87%</p>
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

                    <div className="d-flex flex-wrap justify-content-between align-items-start gap-3 mt-3 align-section">
                        <div className="card-treinamento shadow-sm p-3 flex-grow-1" style={{ flexBasis: "60%", minWidth: "400px" }}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="icon bg-primary text-white rounded-3 p-2 me-2">
                                    <i className="bi bi-graph-up"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Tendência Mensal</h6>
                                    <small className="text-muted">Inscrições vs Conclusões</small>
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height={220}>
                                <LineChart data={dadosTendencia} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="mes" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="inscricoes" stroke="#1E56A0" strokeWidth={2} dot={{ r: 5 }} />
                                    <Line type="monotone" dataKey="conclusoes" stroke="#00B894" strokeWidth={2} dot={{ r: 5 }} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        {/* Gráfico de Treinamentos por Categoria */}
                        <div className="card-treinamento shadow-sm p-3 flex-grow-1" style={{ flexBasis: "38%", minWidth: "300px" }}>
                            <div className="d-flex align-items-center mb-2">
                                <div className="icon bg-primary text-white rounded-3 p-2 me-2">
                                    <i className="bi bi-pie-chart"></i>
                                </div>
                                <div>
                                    <h6 className="fw-bold mb-0">Treinamentos por Categoria</h6>
                                    <small className="text-muted">Distribuição de participantes</small>
                                </div>
                            </div>

                            <ResponsiveContainer width="100%" height={280}>
                                <PieChart>
                                    <Pie
                                        data={dadosCategorias}
                                        dataKey="value"
                                        nameKey="name"
                                        cx="50%"
                                        cy="50%"
                                        outerRadius={90}
                                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                                    >
                                        {dadosCategorias.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        formatter={(value, name, props) => [`${value}`, `${props.payload.name}`]}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    <div className="card-treinamento">
                        <div className="Cards">
                            <div className="Cards-estrutura">
                                <div>
                                    <p className="titulo-principal">Próximos Treinamentos</p>
                                    <p className="subtitulo-trilha">Agendados para as próximas semanas</p>
                                </div>
                            </div>

                            <div className="lista-cursos">

                                <div className="curso-item">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Workshop: Cultura de Segurança</p>
                                            <div className="detalhes-curso">
                                                <span className="duracao">15/11/2025</span>
                                                <span className="nivel">• Instrutor: Carlos Mendes</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">28/30</p>
                                        <button className="status-quase">Quase Lotado</button>
                                    </div>
                                </div>

                                <div className="curso-item">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Lean Manufacturing</p>
                                            <div className="detalhes-curso">
                                                <span className="duracao">20/11/2025</span>
                                                <span className="nivel">• Instrutor: Ana Paula</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">45/50</p>
                                        <button className="status-quase">Quase Lotado</button>
                                    </div>
                                </div>

                                <div className="curso-item">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Gestão de Qualidade Total</p>
                                            <div className="detalhes-curso">
                                                <span className="duracao">25/11/2025</span>
                                                <span className="nivel">• Instrutor: Roberto Silva</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">32/40</p>
                                        <button className="status-disponivel">Vagas Disponíveis</button>
                                    </div>
                                </div>

                                <div className="curso-item">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Liderança 4.0</p>
                                            <div className="detalhes-curso">
                                                <span className="duracao">01/12/2025</span>
                                                <span className="nivel">• Instrutor: Maria Santos</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">18/25</p>
                                        <button className="status-disponivel">Vagas Disponíveis</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    );
}
