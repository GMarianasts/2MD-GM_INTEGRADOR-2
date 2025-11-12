"use client";

import "bootstrap-icons/font/bootstrap-icons.css";
import "./paginaPerfil.css";

const dadosCompetencias = [
    { nome: "Liderança", atual: 65, meta: 85 },
    { nome: "Análise de Dados", atual: 75, meta: 90 },
    { nome: "Agilidade", atual: 55, meta: 80 },
    { nome: "Inovação", atual: 60, meta: 75 },
    { nome: "Tecnologia", atual: 70, meta: 95 },
];

export default function PaginaPerfil() {
    return (
        <div className="container-fluid pagina-perfil">
            <div className="row flex-nowrap">
                {/* Sidebar */}
                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
                    <ul className="list-unstyled menu">
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <span>Dashboard</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-book"></i>
                            <span>Catálogo de Treinamentos</span>
                        </li>
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-award"></i>
                            <span>Meus Treinamentos</span>
                        </li>
                        <li className="ativo d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <span>Meu Perfil</span>
                        </li>
                    </ul>
                </aside>

                {/* Conteúdo principal */}
                <main className="flex-grow-1 px-4 py-4">
                    <div className="row">
                        <div className="col mb-3">
                            <h1>Meu Perfil</h1>
                            <p>Gerencie suas informações pessoais e profissionais</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-8">
                            <div className="perfil-container">
                                <header className="perfil-header">
                                    <h2>Informações Pessoais</h2>
                                    <button className="btn-acao"><i className="bi bi-floppy"></i>Salvar</button>
                                </header>
                                <hr className="separator" />
                                <section className="info-perfil">
                                    <div className="foto-perfil">JS</div>
                                    <div className="texto-perfil">
                                        <span className="nome-completo">João Silva</span>
                                        <span className="cargo">Engenheiro Sênior</span>
                                        <button className="botao-perfil-foto">
                                            Alterar Foto
                                        </button>
                                    </div>
                                </section>
                                <section className="info-detalhes">
                                    <div className="campo-grupo">
                                        <label htmlFor="nome">Nome Completo</label>
                                        <input type="text" id="nome" defaultValue="João Silva" readOnly="" />
                                    </div>
                                    <div className="campo-grupo">
                                        <label htmlFor="email">E-mail</label>
                                        <input
                                            type="email"
                                            id="email"
                                            defaultValue="joao.silva@gm.com"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="campo-grupo">
                                        <label htmlFor="telefone">Telefone</label>
                                        <input
                                            type="tel"
                                            id="telefone"
                                            defaultValue="+55 11 98765-4321"
                                            readOnly=""
                                        />
                                    </div>
                                    <div className="campo-grupo">
                                        <label htmlFor="colaborador">ID Colaborador</label>
                                        <input
                                            type="text"
                                            id="colaborador"
                                            defaultValue="GM-2023-001234"
                                            readOnly=""
                                        />
                                    </div>
                                </section>
                                <section className="info-sobre">
                                    <label htmlFor="sobre">Sobre Mim</label>
                                    <textarea
                                        id="sobre"
                                        rows={4}
                                        readOnly=""
                                        defaultValue={
                                            "Engenheiro com mais de 5 anos de experiência em desenvolvimento de sistemas automotivos.\nApaixonado por inovação e tecnologia."
                                        }
                                    />
                                </section>
                            </div>

                            <div className="infoProfissionais-container mt-3">
                                <div className="card-infoProfissional">
                                    <div className="icon me-3">
                                        <i className="bi bi-buildings"></i>
                                    </div>
                                    <div className="conteudo-infoProfissional">
                                        <h4>Departamento</h4>
                                        <p>Engenharia</p>
                                    </div>
                                </div>

                                <div className="card-infoProfissional">
                                    <div className="icon me-3">
                                        <i className="bi bi-suitcase-lg"></i>
                                    </div>
                                    <div className="conteudo-infoProfissional">
                                        <h4>Cargo</h4>
                                        <p>Engenheiro Sênior</p>
                                    </div>
                                </div>

                                <div className="card-infoProfissional">
                                    <div className="icon me-3">
                                        <i className="bi bi-geo-alt"></i>
                                    </div>
                                    <div className="conteudo-infoProfissional">
                                        <h4>Unidade</h4>
                                        <p>São Caetano do Sul</p>
                                    </div>
                                </div>

                                <div className="card-infoProfissional">
                                    <div className="icon me-3">
                                        <i className="bi bi-person"></i>
                                    </div>
                                    <div className="conteudo-infoProfissional">
                                        <h4>Data de Admissão</h4>
                                        <p>15/03/2020</p>
                                    </div>
                                </div>
                            </div>

                            <div className="competencias-container mt-3">
                                <header className="competencias-header">
                                    <h2>Mapa de Competências</h2>
                                    <p>Acompanhe seu desenvolvimento em relação às metas</p>
                                </header>

                                <div className="competencias-list">
                                    {dadosCompetencias.map((item) => (
                                        <div key={item.nome} className="competencia-item">
                                            <span className="competencia-nome">{item.nome}</span>

                                            <div className="competencia-valores">
                                                <span className="valor-atual">Atual: {item.atual}%</span>
                                                <span className="valor-meta">Meta: {item.meta}%</span>
                                            </div>

                                            <div className="barra-progresso">
                                                {/* Barra de Progresso Laranja (Atual) */}
                                                <div
                                                    className="barra-atual"
                                                    style={{ width: `${item.atual}%` }}
                                                ></div>

                                                {/* Marcador da Meta (Linha Vertical) */}
                                                <div
                                                    className="barra-meta-marcador"
                                                    style={{ left: `${item.meta}%` }}
                                                ></div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 flex-direction-column">
                            <div className="conquista-container">
                                <h2>Conquistas Recentes</h2>
                                <div className="card-conquista mt-4">
                                    <div className="icon me-3">
                                        <i className="bi bi-award"></i>
                                    </div>
                                    <div className="conteudo-conquista">
                                        <h4>Aluno Dedicado</h4>
                                        <p>Completou 10 cursos</p>
                                        <p>10/2025</p>
                                    </div>
                                </div>

                                <div className="card-conquista">
                                    <div className="icon me-3">
                                        <i className="bi bi-reception-4"></i>
                                    </div>
                                    <div className="conteudo-conquista">
                                        <h4>Meta Alcançada</h4>
                                        <p>Atingiu 100h de treinamento</p>
                                        <p>09/2025</p>
                                    </div>
                                </div>

                                <div className="card-conquista">
                                    <div className="icon me-3">
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </div>
                                    <div className="conteudo-conquista">
                                        <h4>Líder Inspirador</h4>
                                        <p>Avaliação 5 estrelas em liderança</p>
                                        <p>08/2025</p>
                                    </div>
                                </div>

                                <button className="botao-conquista-ver">
                                    Ver Todas as Conquistas
                                </button>
                            </div>

                            <div className="estatistica-container mt-3">
                                <h2>Estatísticas</h2>
                                <div className="card-estatistica">
                                    <div className="info-estatistica">
                                        <h3>24</h3>
                                        <p>Cursos Concluídos</p>
                                    </div>
                                    <hr className="separator" />
                                    <div className="info-estatistica">
                                        <h3>156h</h3>
                                        <p>Horas de Treinamento</p>
                                    </div>
                                    <hr className="separator" />
                                    <div className="info-estatistica">
                                        <h3>18</h3>
                                        <p>Badges Conquistados</p>
                                    </div>
                                    <hr className="separator" />
                                    <div className="info-estatistica">
                                        <h3>87%</h3>
                                        <p>Taxa de Conclusão</p>
                                    </div>
                                </div>
                            </div>

                            <div className="preferencias-container mt-3">
                                <h2>Preferências</h2>
                                <div className="card-preferencias">
                                    <button className="botao-preferencias">
                                        <i className="bi bi-envelope"></i> Notificações
                                    </button>
                                    <button className="botao-preferencias">
                                        <i className="bi bi-person"></i> Privacidade
                                    </button>
                                    <button className="botao-preferencias vermelho">
                                        <i className="bi bi-key"></i> Alterar senha
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div >
        </div >
    );
}
