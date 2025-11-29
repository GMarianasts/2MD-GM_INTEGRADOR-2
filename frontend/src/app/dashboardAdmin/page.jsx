"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./dashboardAdmin.css";
import Link from "next/link";
import { useState, useEffect } from "react";


export default function DashboardAdmin() {

    const [dadosTendencia, setDadosTendencia] = useState([]);
    const [dadosCategorias, setDadosCategorias] = useState([]);
    const [ativos, setAtivos] = useState(0);
    const [totalColaboradores, setTotalColaboradores] = useState(0);

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

    useEffect(() => {
        async function carregarGraficos() {
            try {
                const resTend = await fetch("http://localhost:3001/api/relatorios/inscricoes-mensais");
                let dadosTend = await resTend.json();

                if (!Array.isArray(dadosTend)) {
                    if (Array.isArray(dadosTend.data)) dadosTend = dadosTend.data;
                    else if (Array.isArray(dadosTend.result)) dadosTend = dadosTend.result;
                    else dadosTend = [];
                }
                setDadosTendencia(dadosTend);

                const resCat = await fetch("http://localhost:3001/api/relatorios/categorias-treinamentos");
                let dadosCat = await resCat.json();

                if (!Array.isArray(dadosCat)) {
                    dadosCat = Array.isArray(dadosCat.data) ? dadosCat.data : [];
                }

                const categoriasComCores = dadosCat.map((item, index) => ({
                    ...item,
                    color: ["#1E56A0", "#00B894", "#A29BFE", "#F0932B", "#E74C3C"][index % 5]
                }));

                setDadosCategorias(categoriasComCores);

            } catch (error) {
                console.log("Erro ao carregar gráficos:", error);
            }
        }

        carregarGraficos();
    }, []);


    return (
        <div className="container-fluid pagina-usuario">
            <div className="row g-0">

                {/* MENU LATERAL */}
                <aside className="d-none d-md-block col-md-3 col-lg-2 bg-white border-end p-3 menu-lateral">
                    <ul className="list-unstyled menu">
                        <li className="ativo mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <Link href="/dashboardAdmin"><span>Dashboard</span></Link>
                        </li>

                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-grid"></i>
                            <Link href="/gerenciar_Treinamento_admin"><span>Gerenciar Treinamentos</span></Link>
                        </li>

                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-bar-chart"></i>
                            <Link href="/Relatorio"><span>Relatório de Skill Gap</span></Link>
                        </li>

                        <li className="d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <Link href="/colaboradorAdmin"><span>Gerenciar Colaboradores</span></Link>
                        </li>
                    </ul>
                </aside>

                {/* CONTEÚDO PRINCIPAL */}
                <main className="col-12 col-md-9 col-lg-10 px-4 py-4">

                    {/* BARRA SUPERIOR */}
                    <section className="introducao mb-4">
                        <ul className="nav nav-pills nav-fill">
                            <li className="nav-item">
                                <Link className="nav-link active" href={'dashboardAdmin'}>Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'inscricoesAdmin'} className="nav-link">Inscrições</Link>
                            </li>
                            <li className="nav-item">
                                <Link href={'historicoAdmin'} className="nav-link">Histórico</Link>
                            </li>
                        </ul>
                    </section>

                    {/* CARDS */}
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

                    {/* GRÁFICOS */}
                    <div className="row mt-4">
                        <div className="col-md-6 mb-4">
                            <div className="card shadow p-3">
                                <h5>Colaboradores por Departamento</h5>
                                <GraficoDepartamentos />
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="card shadow p-3">
                                <h5>Colaboradores por Unidade</h5>
                                <GraficoUnidades />
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="card shadow p-3">
                                <h5>Inscrições por Treinamento</h5>
                                <GraficoInscricoes />
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <div className="card shadow p-3">
                                <h5>Treinamentos por Categoria</h5>
                                <GraficoCategorias />
                            </div>
                        </div>
                    </div>

                    {/* LISTA DE TREINAMENTOS */}
                    <div className="card-treinamento mt-4">
                        <div className="Cards">
                            <p className="titulo-principal">Próximos Treinamentos</p>
                            <p className="subtitulo-trilha">Agendados para as próximas semanas</p>

                            <div className="row lista-cursos g-3">

                                {/* Curso 1 */}
                                <div className="curso-item col-12">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Workshop: Cultura de Segurança</p>
                                            <div className="detalhes-curso">
                                                <span>15/11/2025</span>
                                                <span> • Instrutor: Carlos Mendes</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">28/30</p>
                                        <button className="status-quase">Quase Lotado</button>
                                    </div>
                                </div>

                                {/* Curso 2 */}
                                <div className="curso-item col-12">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Lean Manufacturing</p>
                                            <div className="detalhes-curso">
                                                <span>20/11/2025</span>
                                                <span> • Instrutor: Ana Paula</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">45/50</p>
                                        <button className="status-quase">Quase Lotado</button>
                                    </div>
                                </div>

                                {/* Curso 3 */}
                                <div className="curso-item col-12">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Gestão de Qualidade Total</p>
                                            <div className="detalhes-curso">
                                                <span>25/11/2025</span>
                                                <span> • Instrutor: Roberto Silva</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="curso-direita">
                                        <p className="vagas">32/40</p>
                                        <button className="status-disponivel">Vagas Disponíveis</button>
                                    </div>
                                </div>

                                {/* Curso 4 */}
                                <div className="curso-item col-12">
                                    <div className="curso-esquerda">
                                        <div className="icon-curso-quadro">
                                            <i className="bi bi-calendar-event"></i>
                                        </div>

                                        <div className="curso-info">
                                            <p className="nome-curso">Liderança 4.0</p>
                                            <div className="detalhes-curso">
                                                <span>01/12/2025</span>
                                                <span> • Instrutor: Maria Santos</span>
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
            </div>
        </div>
    );
}
