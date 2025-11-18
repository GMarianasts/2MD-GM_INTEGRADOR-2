"use client";

import CertificatesTable from "@/components/gerenciamentoCertificados/certificadosTabela";
import "./certificados.css";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export default function CertificadosAdmin() {
  return (
    <div className="container-fluid pagina-usuario">
      <div className="row g-0">

        {/* ===== SIDEBAR ===== */}
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
              <span>Gerencial Colaboradores</span>
            </li>
          </ul>
        </aside>

        <main className="col-12 col-md-9 px-4 py-4">
          <section className="introducao mb-4">
            <div className="trocaPagina">
              <ul className="nav nav-pills nav-fill">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href={'dashboardAdmin'}>Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link href={'inscricoesAdmin'} className="nav-link" aria-disabled="true">Inscrições</Link>
                </li>
                <li className="nav-item">
                  <Link href={'presencaAdmin'} className="nav-link " aria-disabled="true">Presença</Link>
                </li>
                <li className="nav-item">
                  <Link href={'certificadosAdmin'} className="nav-link active " aria-disabled="true">Certificados</Link>
                </li>
                <li className="nav-item">
                  <Link href={'historicoAdmin'} className="nav-link " aria-disabled="true">Histórico</Link>
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

          {/* Header */}
          <div className="container-certificados">

            <div className="d-flex justify-content-between align-items-center">
              <h2 className="titulo-certificado">Certificados</h2>
              <button className="btn-emitir">
                <i className="bi bi-award"></i> Emitir Certificado
              </button>
            </div>

            <p className="subtitulo">Emita e gerencie certificados de conclusão</p>

            {/* Barra de busca */}
            <div className="search-container">
              <i className="bi bi-search search-icon"></i>
              <input type="text" className="search-input" placeholder="Buscar certificados..." />
            </div>

          
          <div className="tabela-wrapper">
            <CertificatesTable />
          </div>
          </div>


        </main>
      </div>
    </div>
  );
}
