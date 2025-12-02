"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./gerenciar.css";
import Link from "next/link";
import { useState, useEffect } from "react";
import ModalNovoTreinamento from "@/components/modalNovoTreinamento/modalNovoTreinamento";

export default function GerenciadorTreinamento() {
    const [treinamentos, setTreinamentos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);
    const [busca, setBusca] = useState('');
    const [menuAberto, setMenuAberto] = useState(null);
    const [cursoParaEditar, setCursoParaEditar] = useState(null);

    const [filtroStatus, setFiltroStatus] = useState('');
    const [filtroModalidade, setFiltroModalidade] = useState('');
    const [mostrarFiltros, setMostrarFiltros] = useState(false);

    const [estatisticas, setEstatisticas] = useState({
        total: 0,
        ativos: 0,
        inscritos: 0,
        taxaOcupacao: 0,
        porcentagemAtivos: 0
    });

    const treinamentosFiltrados = treinamentos.filter((item) => {
        const termo = busca.toLowerCase();
        const tituloMatch = item.titulo?.toLowerCase().includes(termo);
        const instrutorMatch = item.instrutor_nome?.toLowerCase().includes(termo);
        const competenciaMatch = item.competencias?.some(comp => comp.toLowerCase().includes(termo));


        const statusMatch = filtroStatus ? item.status.toLowerCase() === filtroStatus.toLowerCase() : true;
        const modalidadeMatch = filtroModalidade ? item.modalidade.toLowerCase() === filtroModalidade.toLowerCase() : true;

        return (tituloMatch || instrutorMatch || competenciaMatch) && statusMatch && modalidadeMatch;
    });

    const handleNovoTreinamento = () => {
        setCursoParaEditar(null);
        setShowModal(true);
    };

    const handleEditar = (curso) => {
        setCursoParaEditar(curso);
        setShowModal(true);
        setMenuAberto(null);
    };

    const toggleMenu = (id) => {
        if (menuAberto === id) {
            setMenuAberto(null);
        } else {
            setMenuAberto(id);
        }
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.dropdown-acao')) {
                setMenuAberto(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    async function fetchTreinamentos() {
        setLoading(true);
        try {
            const res = await fetch('http://localhost:3001/api/treinamentos');
            const data = await res.json();

            if (data.sucesso) {
                const listaTreinos = data.dados;
                setTreinamentos(listaTreinos);

                const total = listaTreinos.length;
                const ativos = listaTreinos.filter(t => t.status === 'Ativo').length;
                const totalInscritos = listaTreinos.reduce((acc, curr) => acc + (curr.inscritos_atuais || 0), 0);
                const capacidadeTotal = listaTreinos.reduce((acc, curr) => acc + (curr.capacidade || 0), 0);
                const taxa = capacidadeTotal > 0 ? Math.round((totalInscritos / capacidadeTotal) * 100) : 0;
                const porcAtivos = total > 0 ? Math.round((ativos / total) * 100) : 0;

                setEstatisticas({
                    total: total,
                    ativos: ativos,
                    inscritos: totalInscritos,
                    taxaOcupacao: taxa,
                    porcentagemAtivos: porcAtivos
                });
            }
        } catch (error) {
            console.error("Erro ao buscar treinamentos:", error);
        } finally {
            setLoading(false);
        }
    }

    const handleExcluir = async (id) => {
        if (window.confirm("Tem certeza que deseja excluir este treinamento?")) {
            try {
                const res = await fetch(`http://localhost:3001/api/treinamentos/${id}`, {
                    method: 'DELETE'
                });

                const data = await res.json();

                if (data.sucesso) {
                    fetchTreinamentos();
                    setMenuAberto(null);
                } else {
                    alert('Erro ao excluir: ' + data.erro);
                }
            } catch (error) {
                console.error("Erro na exclusão:", error);
                alert("Erro ao conectar com o servidor.");
            }
        }
    };

    useEffect(() => {
        fetchTreinamentos();
    }, []);

    const formatarData = (dataISO) => {
        if (!dataISO) return '-';
        const data = new Date(dataISO);
        return data.toLocaleDateString('pt-BR', { timeZone: 'UTC' });
    };

    const getStatusBadge = (status) => {
        if (status === 'Ativo') return 'bg-success-subtle text-success border-success-subtle';
        if (status === 'Rascunho') return 'bg-secondary-subtle text-secondary border-secondary-subtle';
        return 'bg-light text-dark border';
    };

    return (
        <div className="container-fluid pagina-usuario">

            {showModal && (
                <ModalNovoTreinamento
                    onClose={() => setShowModal(false)}
                    onSalvar={fetchTreinamentos}
                    dadosEditar={cursoParaEditar}
                />
            )}

            <div className="row flex-nowrap">
                <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar" style={{ minHeight: '100vh' }}>
                    <ul className="list-unstyled menu">
                        <li className=" mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <Link href={'dashboardAdmin'}><span>Dashboard</span></Link>
                        </li>
                        <li className=" ativo mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-grid"></i>
                            <Link href={'gerenciar_Treinamento_admin'}><span>Gerenciar Treinamentos</span></Link>
                        </li>
                        <li className="d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <Link href={'colaboradorAdmin'}><span>Gerenciar Colaboradores</span></Link>
                        </li>
                    </ul>
                </aside>

                <main className="col-12 col-md-9 col-lg-10 p-4 bg-light">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <div>
                            <h2 className="h4 fw-bold mb-1" style={{ color: "#0a2b6b" }}>Gerenciar Treinamentos</h2>
                            <p className="descricao text-muted mb-0">
                                Administre todos os treinamentos da plataforma
                            </p>
                        </div>

                        <button
                            className="btn text-white ..."
                            onClick={handleNovoTreinamento}
                            style={{ backgroundColor: "#0a2b6b" }}
                        >
                            <i className="bi bi-plus-lg fs-5"></i>
                            <span>Novo Treinamento</span>
                        </button>
                    </div>


                    <div className="pesquisa">
                        <input
                            type="text"
                            placeholder="Buscar por título, instrutor ou competência..."
                            value={busca}
                            onChange={(e) => setBusca(e.target.value)}
                        />

                        <button
                            className="btn-filtros"
                            onClick={() => setMostrarFiltros(!mostrarFiltros)}
                        >
                            <i className="bi bi-funnel"></i> Filtros
                        </button>
                    </div>


                    {mostrarFiltros && (
                        <div className="filtro-dropdown">
                            <select
                                className="form-select"
                                value={filtroStatus}
                                onChange={(e) => setFiltroStatus(e.target.value)}
                            >
                                <option value="">Filtrar por Status</option>
                                <option value="Ativo">Ativo</option>
                                <option value="Rascunho">Rascunho</option>
                            </select>

                            <select
                                className="form-select"
                                value={filtroModalidade}
                                onChange={(e) => setFiltroModalidade(e.target.value)}
                            >
                                <option value="">Filtrar por Modalidade</option>
                                <option value="Presencial">Presencial</option>
                                <option value="Online">Online</option>
                            </select>
                        </div>
                    )}


                    <div className="row g-3 mt-3">
                        <div className="col-12">
                            <div className="card1 border rounded-4 bg-white shadow-sm">
                                <div className="card-body p-4">
                                    <div className="mb-4">
                                        <h5 className="fw-bold mb-1">Todos os Treinamentos</h5>
                                        <p className="text-muted small mb-0">
                                            {treinamentosFiltrados.length} treinamentos cadastrados
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
                                                {loading ? (
                                                    <tr><td colSpan="8" className="text-center py-4">Carregando...</td></tr>
                                                ) : (
                                                    treinamentosFiltrados.map((item) => (
                                                        <tr key={item.id}>
                                                            <td className="ps-3 py-3">
                                                                <span className="fw-medium" style={{ color: '#0a2b6b' }}>{item.titulo}</span>
                                                            </td>
                                                            <td className="text-muted">{item.modalidade}</td>
                                                            <td>
                                                                <span className={`badge rounded-pill border px-3 ${getStatusBadge(item.status)}`}>
                                                                    {item.status}
                                                                </span>
                                                            </td>
                                                            <td className="text-muted">{item.instrutor_nome}</td>
                                                            <td>
                                                                <div className="d-flex gap-1 flex-wrap">
                                                                    {item.competencias.map((comp, idx) => (
                                                                        <span key={idx} className="badge bg-light text-dark border fw-normal">{comp}</span>
                                                                    ))}
                                                                </div>
                                                            </td>
                                                            <td className="text-muted">
                                                                <i className="bi bi-people text-secondary me-1"></i>
                                                                {item.inscritos_atuais}/{item.capacidade}
                                                            </td>
                                                            <td className="text-muted">{formatarData(item.data_inicio)}</td>

                                                            <td className="text-end pe-3 position-relative dropdown-acao">
                                                                <i
                                                                    className="bi bi-three-dots-vertical text-muted p-2"
                                                                    style={{ cursor: 'pointer' }}
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        toggleMenu(item.id);
                                                                    }}
                                                                ></i>

                                                                {menuAberto === item.id && (
                                                                    <div className="dropdown-menu show shadow border-0"
                                                                        style={{
                                                                            position: 'absolute',
                                                                            right: '100%',
                                                                            top: '10px',
                                                                            zIndex: 1050,
                                                                            minWidth: '180px'
                                                                        }}>
                                                                        <div className="px-3 py-2 border-bottom">
                                                                            <span className="small text-muted fw-bold">Ações</span>
                                                                        </div>
                                                                        <button className="dropdown-item py-2 d-flex align-items-center gap-2">
                                                                            <i className="bi bi-eye"></i> Visualizar
                                                                        </button>
                                                                        <button
                                                                            className="dropdown-item py-2 d-flex align-items-center gap-2"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                handleEditar(item);
                                                                            }}
                                                                        >
                                                                            <i className="bi bi-pencil"></i> Editar
                                                                        </button>
                                                                        <button className="dropdown-item py-2 d-flex align-items-center gap-2">
                                                                            <i className="bi bi-people"></i> Ver Inscrições
                                                                        </button>
                                                                        <div className="dropdown-divider my-1"></div>
                                                                        <button
                                                                            className="dropdown-item py-2 d-flex align-items-center gap-2 text-danger"
                                                                            onClick={(e) => {
                                                                                e.stopPropagation();
                                                                                handleExcluir(item.id);
                                                                            }}
                                                                        >
                                                                            <i className="bi bi-trash"></i> Excluir
                                                                        </button>
                                                                    </div>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))
                                                )}
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
