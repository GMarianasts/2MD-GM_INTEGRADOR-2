"use client";

import CertificatesTable from "@/components/gerenciamentoCertificados/certificadosTabela";
import "./certificados.css";

export default function CertificadosAdmin() {
  return (
    <div className="layout">

      {/* ==== SIDEBAR ==== */}
      <aside className="sidebar">
        <div className="menu-item ativo">
          <i className="bi bi-house-door"></i> Dashboard
        </div>

        <div className="menu-item">
          <i className="bi bi-grid"></i> Gerenciar Treinamentos
        </div>

        <div className="menu-item">
          <i className="bi bi-bar-chart"></i> Relatório de Skill Gap
        </div>

        <div className="menu-item">
          <i className="bi bi-people"></i> Gerenciar Colaboradores
        </div>
      </aside>

      {/* ==== CONTEÚDO PRINCIPAL ==== */}
      <main className="conteudo-principal">
        
        <div className="header">
          <h2>Certificados</h2>
          <button className="btn-emitir">
            <i className="bi bi-award"></i> Emitir Certificado
          </button>
        </div>

        <p className="subtitulo">Emita e gerencie certificados de conclusão</p>

        <div className="search-bar">
          <input type="text" placeholder="Buscar certificados..." />
        </div>

        <div className="tabela-container">
          <CertificatesTable />
        </div>

      </main>

    </div>
  );
}
