import React from "react";
import "./cardGerenciaPresenca.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function GerenciarInscricoes() {
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
                    <span>Progresso</span>
                    <span>Status</span>
                    <span>Ações</span>
                </div>

                {inscricoesData.map((item, index) => (
                    <div className="table-row" key={index}>
                        <span className="colaborador-nome">{item.colaborador}</span>
                        <span>{item.curso}</span>
                        <span>{item.data}</span>
                        <span className="progresso-cell">
                            <ProgressBar progresso={item.progresso} />
                            {item.progresso}%
                        </span>
                        <span>
                            <StatusBadge status={item.status} />
                        </span>
                        <span className="acoes-cell">
                            <button className="btn-acao-visualizar"><i className="bi bi-eye"></i></button>
                            <button className="btn-acao-remover"><i className="bi bi-x-circle-fill"></i></button>
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
}
