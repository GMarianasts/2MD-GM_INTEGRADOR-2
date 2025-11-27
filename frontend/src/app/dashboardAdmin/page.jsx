"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboardAdmin.css";
import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
    PieChart, Pie, Cell
} from "recharts";
import Link from "next/link";
import { useState, useEffect } from "react";

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

    const [ativos, setAtivos] = useState(0);

    useEffect(() => {
    async function carregarAtivos() {
        try {
            const response = await fetch("http://localhost:3001/api/treinamentos/ativos/count");
            const data = await response.json();
            setAtivos(data.totalAtivos);
        } catch (error) {
            console.log("Erro ao carregar ativos:", error);
        }
    }

    carregarAtivos();
}, []);

const [totalColaboradores, setTotalColaboradores] = useState(0);

    useEffect(() => {
        async function fetchData() {
            try {
                const res = await fetch("http://localhost:3001/api/colaboradores/count");
                const data = await res.json();
                setTotalColaboradores(data.total);
            } catch (error) {
                console.log("Erro ao buscar total de colaboradores:", error);
            }
        }

        fetchData();
    }, []);


    return (
        <div className="container-fluid pagina-usuario">
            <div className="row g-0">

                {/* SIDEBAR RESPONSIVA */}
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
                            <Link href={'colaboradorAdmin'}><span>Gerenciar Colaboradores</span></Link>
                        </li>
                    </ul>
                </aside>

                {/* CONTEÚDO PRINCIPAL */}
                <main className="col-12 col-md-9 col-lg-10 px-4 py-4">

                    {/* BARRA SUPERIOR */}
                    <section className="introducao mb-4">
                        <div className="trocaPagina">
                            <ul className="nav nav-pills nav-fill">
                                <li className="nav-item">
                                    <Link className="nav-link active" href={'dashboardAdmin'}>Dashboard</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'inscricoesAdmin'} className="nav-link">Inscrições</Link>
                                </li>
                                <li className="nav-item">
                                    <Link href={'historicoAdmin'} className="nav-link ">Histórico</Link>
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

                    {/* CARDS INICIAIS RESPONSIVOS */}
                    <div className="row g-3 row-cards mt-3">

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card-info azul">
                                <div>
                                    <p className="titulo">Treinamentos Ativos</p>
                                    <p className="valor">{ativos}</p>
                                </div>
                                <div className="icon"><i className="bi bi-bar-chart"></i></div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card-info laranja">
                                <div>
                                    <p className="titulo">Colaboradores Inscritos</p>
                                    <p className="valor">{totalColaboradores}</p>

                                </div>
                                <div className="icon"><i className="bi bi-people"></i></div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card-info verde">
                                <div>
                                    <p className="titulo">Certificados Emitidos</p>
                                    <p className="valor">892</p>
                                </div>
                                <div className="icon"><i className="bi bi-award"></i></div>
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="card-info roxo">
                                <div>
                                    <p className="titulo">Taxa de Conclusão</p>
                                    <p className="valor">87%</p>
                                </div>
                                <div className="icon"><i className="bi bi-graph-up-arrow"></i></div>
                            </div>
                        </div>

                    </div>

                    {/* GRÁFICOS RESPONSIVOS */}
                    <div className="row g-3 mt-3">
                        <div className="col-12 col-lg-7 card-treinamento shadow-sm p-3">
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
                                <LineChart data={dadosTendencia}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="mes" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="inscricoes" stroke="#1E56A0" strokeWidth={2} />
                                    <Line type="monotone" dataKey="conclusoes" stroke="#00B894" strokeWidth={2} />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="col-12 col-lg-5 card-treinamento shadow-sm p-3">
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

                    {/* LISTA DE CURSOS RESPONSIVA */}
                    <div className="card-treinamento mt-4">
                        <div className="Cards">
                            <p className="titulo-principal">Próximos Treinamentos</p>
                            <p className="subtitulo-trilha">Agendados para as próximas semanas</p>

                            <div className="row lista-cursos g-3">

                                <div className="curso-item col-12">
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

                                <div className="curso-item col-12">
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

                                <div className="curso-item col-12">
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

                                <div className="curso-item col-12">
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

                </main >
            </div >
        </div >
    );
}
