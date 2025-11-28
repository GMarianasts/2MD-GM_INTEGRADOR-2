"use client";

import React, { useState, useEffect } from "react";
import "./cardGerenciarInscricoes.css";
import "bootstrap-icons/font/bootstrap-icons.css";


const ProgressBar = ({ progresso }) => (
    <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progresso}%` }}></div>
    </div>
);

const StatusBadge = ({ status }) => {
    let className = "status-badge";
    if (status === "Ativo") className += " status-ativo";
    else if (status === "Concluído") className += " status-concluido";
    else if (status === "Cancelado") className += " status-cancelado";
    return <span className={className}>{status}</span>;
};

export default function GerenciarInscricoes() {
    const [inscricoes, setInscricoes] = useState([]);

    // Carregar do backend
    async function carregarInscricoes() {
        const response = await fetch("http://localhost:3001/inscricoes");
        const data = await response.json();
        console.log("INSCRIÇÕES:", data);
        setInscricoes(data.dados || []);  // ✅ agora é sempre array
    }

    async function remover(id) {
        const resultado = await Swal.fire({
            title: "Tem certeza?",
            text: "Você está prestes a excluir esta inscrição.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sim, excluir",
            cancelButtonText: "Cancelar"
        });

        if (!resultado.isConfirmed) {
            return; // cancelou → não remove
        }

        await fetch(`http://localhost:3001/inscricoes/${id}`, {
            method: "DELETE",
        });

        Swal.fire({
            title: "Removido!",
            text: "A inscrição foi excluída com sucesso.",
            icon: "success",
            timer: 1500,
            showConfirmButton: false
        });

        carregarInscricoes();
    }

    useEffect(() => {
        carregarInscricoes();
    }, []);

    return (
        <div className="inscricoes-card-container">
            <header className="inscricoes-header">
                <div>
                    <h2>Gerenciar Inscrições</h2>
                    <p>Visualize e gerencie as inscrições dos colaboradores</p>
                </div>
                <button className="btn-filtros">
                    <i className="bi bi-funnel"></i> Filtros
                </button>
            </header>

            {/* Barra de busca */}
            <div className="search-bar-inscricoes">
                <i className="bi bi-search"></i>
                <input type="text" placeholder="Buscar inscrições..." />
            </div>

            {/* Tabela */}
            <div className="inscricoes-table">
                <div className="table-header">
                    <span>Colaborador</span>
                    <span>Curso</span>
                    <span>Data de Inscrição</span>
                    <span>Status</span>
                    <span>Ações</span>
                </div>

                {inscricoes.map((item) => (
                    <div className="table-row" key={item.id}>
                        <span className="colaborador-nome">{item.usuario}</span>
                        <span>{item.treinamento}</span>
                        <span>
                            {new Date(item.data_inscricao).toLocaleDateString("pt-BR")}
                        </span>


                        <span>
                            <StatusBadge status={item.status ?? "Ativo"} />
                        </span>

                        <span className="acoes-cell">
                            <button className="btn-acao-remover" onClick={() => remover(item.id)}>
                                <i className="bi bi-x-circle-fill"></i>
                            </button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
