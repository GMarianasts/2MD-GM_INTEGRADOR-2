"use client";

import { useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./paginaPerfil.css";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function PaginaPerfil() {
    const { user, updateUser } = useAuth(); // <-- permite atualizar contexto

    const [loading, setLoading] = useState(true);

    const [formData, setFormData] = useState({
        nome: "",
        email: "",
        telefone: "",
        cargo: "",
        departamento: "",
        unidade: "",
        sobre: "",
        senha: ""   // <-- ADICIONA SENHA
    });


    // Carrega os dados quando o usuário é identificado
    useEffect(() => {
        if (user) {
            setFormData({
                nome: user.nome || "",
                email: user.email || "",
                telefone: user.telefone || "",
                cargo: user.cargo || "",
                departamento: user.departamento || "",
                unidade: user.unidade || "",
                sobre: user.sobre || ""
            });
            setLoading(false);
        }
    }, [user]);

    // Atualiza estado dos inputs
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    // Salvar perfil
    const handleSave = async () => {
        if (!user) return alert("Usuário não encontrado.");

        try {
            const response = await fetch(`http://localhost:3001/api/usuarios/${user.id}/perfil`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    cargo: formData.cargo || null,
                    departamento: formData.departamento || null,
                    unidade: formData.unidade || null
                }),

            });

            if (response.ok) {
                const atualizado = { ...user, ...formData };

                // Atualiza contexto
                updateUser(atualizado);

                // Persiste no localStorage
                localStorage.setItem("usuario", JSON.stringify(atualizado));

                alert("Perfil atualizado com sucesso!");
            } else {
                alert("Erro ao atualizar o perfil.");
            }

        } catch (error) {
            console.error("Erro ao atualizar:", error);
            alert("Erro de conexão com o servidor.");
        }
    };

    const getIniciais = (nome) => {
        if (!nome) return "U";
        const partes = nome.split(" ");
        if (partes.length >= 2) return (partes[0][0] + partes[1][0]).toUpperCase();
        return nome.substring(0, 2).toUpperCase();
    };

    if (loading) return <div className="p-5 text-center">Carregando...</div>;

    return (
        <div className="container-fluid pagina-usuario">
            <div className="row g-0 flex-nowrap">

                {/* SIDEBAR */}
                <aside className="d-none d-md-block col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
                    <ul className="list-unstyled menu pt-3">
                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-house-door"></i>
                            <Link href="/paginaUsuario">Dashboard</Link>
                        </li>

                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-book"></i>
                            <Link href="/catalogo">Catálogo</Link>
                        </li>

                        <li className="mb-3 d-flex align-items-center gap-2">
                            <i className="bi bi-award"></i>
                            <Link href="/meuTreinamento">Meus Treinamentos</Link>
                        </li>

                        <li className="ativo d-flex align-items-center gap-2">
                            <i className="bi bi-person"></i>
                            <Link href="/paginaPerfil">Meu Perfil</Link>
                        </li>
                    </ul>
                </aside>


                {/* CONTEÚDO PRINCIPAL */}
                <main className="col-12 col-md-9 col-lg-10 px-4 py-4 bg-light">

                    <h1 className="h3 fw-bold" style={{ color: "#0a2b6b" }}>Meu Perfil</h1>
                    <p className="text-muted mb-4">Gerencie suas informações pessoais e profissionais</p>

                    <div className="row g-4">

                        {/* COLUNA ESQUERDA */}
                        <div className="col-lg-8">

                            {/* CARD PRINCIPAL */}
                            <div className="bg-white p-4 rounded-4 shadow-sm border">

                                <header className="d-flex justify-content-between align-items-center mb-3">
                                    <h2 className="h5 fw-bold">Informações Pessoais</h2>

                                    <button
                                        className="btn btn-primary btn-sm d-flex align-items-center gap-2"
                                        style={{ backgroundColor: "#0a2b6b", borderColor: "#0a2b6b" }}
                                        onClick={handleSave}
                                    >
                                        <i className="bi bi-floppy"></i> Salvar
                                    </button>
                                </header>

                                <hr className="opacity-25" />

                                {/* FOTO E CABEÇALHO */}
                                <div className="d-flex align-items-center gap-3 mb-4">
                                    <div
                                        className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold fs-3"
                                        style={{ width: 80, height: 80, background: "#0a2b6b" }}
                                    >
                                        {getIniciais(formData.nome)}
                                    </div>

                                    <div>
                                        <p className="fw-bold fs-5 mb-0">{formData.nome}</p>
                                        <p className="text-muted small mb-2">{formData.cargo || "Colaborador"}</p>

                                        <button className="btn btn-outline-secondary btn-sm rounded-pill">
                                            Alterar Foto
                                        </button>
                                    </div>
                                </div>

                                {/* FORM */}
                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <label className="form-label small text-muted">Nome Completo</label>
                                        <input
                                            id="nome"
                                            type="text"
                                            className="form-control bg-light"
                                            value={formData.nome}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small text-muted">E-mail</label>
                                        <input
                                            id="email"
                                            type="email"
                                            className="form-control bg-light"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small text-muted">Telefone</label>
                                        <input
                                            id="telefone"
                                            type="tel"
                                            className="form-control bg-light"
                                            value={formData.telefone}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className="col-md-6">
                                        <label className="form-label small text-muted">ID Colaborador</label>
                                        <input
                                            className="form-control bg-light text-muted"
                                            value={`GM-${user.id}`}
                                            readOnly
                                            disabled
                                        />
                                    </div>
                                </div>

                                {/* SOBRE */}
                                <div className="mt-3">
                                    <label className="form-label small text-muted">Sobre Mim</label>
                                    <textarea
                                        id="sobre"
                                        className="form-control bg-light"
                                        rows={4}
                                        value={formData.sobre}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            {/* INFORMAÇÕES PROFISSIONAIS */}
                            <div className="mt-4">
                                <h2 className="h5 fw-bold mb-3">Informações Profissionais</h2>

                                <div className="row g-3">
                                    <div className="col-md-6">
                                        <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3 border-0">
                                            <div className="p-3 rounded bg-primary-subtle text-primary">
                                                <i className="bi bi-buildings fs-4"></i>
                                            </div>
                                            <div>
                                                <small className="text-muted">Departamento</small>
                                                <p className="fw-semibold">{formData.departamento || "-"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3 border-0">
                                            <div className="p-3 rounded bg-warning-subtle text-warning">
                                                <i className="bi bi-suitcase-lg fs-4"></i>
                                            </div>
                                            <div>
                                                <small className="text-muted">Cargo</small>
                                                <p className="fw-semibold">{formData.cargo || "-"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3 border-0">
                                            <div className="p-3 rounded bg-success-subtle text-success">
                                                <i className="bi bi-geo-alt fs-4"></i>
                                            </div>
                                            <div>
                                                <small className="text-muted">Unidade</small>
                                                <p className="fw-semibold">{formData.unidade || "-"}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="card shadow-sm p-3 d-flex flex-row align-items-center gap-3 border-0">
                                            <div className="p-3 rounded bg-info-subtle text-info">
                                                <i className="bi bi-calendar-check fs-4"></i>
                                            </div>
                                            <div>
                                                <small className="text-muted">Admissão</small>
                                                <p className="fw-semibold">15/03/2020</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* COLUNA DIREITA */}
                        <div className="col-lg-4">

                            {/* Conquistas */}
                            <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
                                <h2 className="h5 fw-bold mb-3">Conquistas Recentes</h2>

                                <div className="d-flex flex-column gap-3">
                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="p-2 bg-light rounded text-primary">
                                            <i className="bi bi-award fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-0">Aluno Dedicado</h6>
                                            <small className="text-muted">10 cursos • 10/2025</small>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="p-2 bg-light rounded text-primary">
                                            <i className="bi bi-reception-4 fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-0">Meta Alcançada</h6>
                                            <small className="text-muted">100h treino • 09/2025</small>
                                        </div>
                                    </div>

                                    <div className="d-flex gap-3 align-items-center">
                                        <div className="p-2 bg-light rounded text-primary">
                                            <i className="bi bi-graph-up-arrow fs-4"></i>
                                        </div>
                                        <div>
                                            <h6 className="fw-bold mb-0">Líder Inspirador</h6>
                                            <small className="text-muted">5 estrelas • 08/2025</small>
                                        </div>
                                    </div>
                                </div>

                                <button className="btn btn-outline-primary w-100 mt-4 btn-sm">
                                    Ver Todas
                                </button>
                            </div>

                            {/* Estatísticas */}
                            <div className="bg-white p-4 rounded-4 shadow-sm border mb-4">
                                <h2 className="h5 fw-bold mb-3">Estatísticas</h2>

                                <div className="text-center py-2 border-bottom">
                                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>24</h3>
                                    <small className="text-muted">Cursos Concluídos</small>
                                </div>

                                <div className="text-center py-2 border-bottom">
                                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>156h</h3>
                                    <small className="text-muted">Horas de Treinamento</small>
                                </div>

                                <div className="text-center py-2 border-bottom">
                                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>18</h3>
                                    <small className="text-muted">Badges Conquistados</small>
                                </div>

                                <div className="text-center py-2 pt-3">
                                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>87%</h3>
                                    <small className="text-muted">Taxa de Conclusão</small>
                                </div>
                            </div>

                            {/* Alterar senha */}
                            <button className="btn btn-white border shadow-sm w-100 text-start p-3 d-flex align-items-center gap-2 text-danger">
                                <i className="bi bi-key"></i> Alterar senha
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
