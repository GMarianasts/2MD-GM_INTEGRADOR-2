"use client";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Importações necessárias para os gráficos
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Radar, Bar } from "react-chartjs-2";
import Link from "next/link";

// Registrando os componentes do Chart.js
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export default function RelatorioSkillGap() {
  // --- DADOS DO GRÁFICO DE RADAR (Matriz de Competências) ---
  const radarData = {
    labels: [
      "Liderança",
      "Análise de Dados",
      "Agilidade",
      "Inovação",
      "Tecnologia",
      "Gestão de Projetos",
    ],
    datasets: [
      {
        label: "Nível Atual",
        data: [65, 59, 90, 81, 56, 55],
        backgroundColor: "rgba(253, 126, 20, 0.5)", // Laranja transparente
        borderColor: "#fd7e14", // Laranja
        borderWidth: 2,
      },
      {
        label: "Nível Exigido",
        data: [80, 70, 85, 90, 80, 75],
        backgroundColor: "rgba(10, 43, 107, 0.2)", // Azul transparente
        borderColor: "#0a2b6b", // Azul
        borderWidth: 2,
      },
    ],
  };

  const radarOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      r: {
        angleLines: { color: "#e9ecef" },
        grid: { color: "#e9ecef" },
        pointLabels: { font: { size: 12 } },
        ticks: { display: false, maxTicksLimit: 5 }, // Remove números do eixo radial
      },
    },
    plugins: {
      legend: { position: "bottom" },
    },
  };

  // --- DADOS DO GRÁFICO DE BARRAS (Lacunas) ---
  const barData = {
    labels: [
      "Agilidade",
      "Tecnologia",
      "Liderança",
      "Análise de Dados",
      "Inovação",
      "Gestão de Projetos",
    ],
    datasets: [
      {
        label: "Gap (%)",
        data: [25, 24, 20, 15, 15, 5],
        backgroundColor: "#fd7e14", // Laranja igual da imagem
        borderRadius: 4,
      },
    ],
  };

  const barOptions = {
    indexAxis: "y", // Isso faz o gráfico ser HORIZONTAL
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }, // Esconde a legenda pois já tem título
    },
    scales: {
      x: { grid: { display: true, color: "#f0f0f0" } },
      y: { grid: { display: false } },
    },
  };

  return (
    <div className="container-fluid pagina-usuario">
      <div className="row flex-nowrap">
        {/* === SIDEBAR (Mantendo a estrutura padrão) === */}
        <aside
          className="d-none d-md-block col-md-3 col-lg-2 sidebar p-3 border-end bg-white"
          style={{ minHeight: "100vh" }}
        >
          <ul className="list-unstyled menu sticky-top pt-3">
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-house-door"></i> 
              <Link href={'dashboardAdmin'}><span>Dashboard</span></Link>
            </li>
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-book"></i> 
              <Link href={'gerenciar_Treinamento_admin'}><span>Gerenciar Treinamentos</span></Link>
            </li>
            <li className="ativo mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-bar-chart"></i> 
              <Link href={'Relatorio'}><span>Relatório de Skill Gap</span></Link>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="bi bi-person"></i> <span>Gerenciar Colaboradores</span>
            </li>
          </ul>
        </aside>

        {/* === CONTEÚDO PRINCIPAL === */}
        <main className="col-12 col-md-9 col-lg-10 bg-light p-4">
          
          {/* 1. HEADER: Título e Botão Exportar */}
          <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4 gap-3">
            <div>
              <h2 className="h4 fw-bold mb-1" style={{ color: "#0a2b6b" }}>
                Relatório de Skill Gap
              </h2>
              <p className="text-muted mb-0">
                Análise de lacunas de competências por departamento
              </p>
            </div>
            <button className="btn btn-outline-secondary d-flex align-items-center gap-2 bg-white">
              <i className="bi bi-download"></i>
              Exportar Relatório
            </button>
          </div>

          {/* 2. FILTROS DE ANÁLISE */}
          <div className="card border-0 rounded-4 shadow-sm mb-4">
            <div className="card-body p-4">
              <h6 className="fw-bold mb-3 text-dark">Filtros de Análise</h6>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Departamento</label>
                  <select className="form-select bg-light border-0">
                    <option>Engenharia</option>
                    <option>Vendas</option>
                    <option>RH</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Unidade</label>
                  <select className="form-select bg-light border-0">
                    <option>São Caetano do Sul</option>
                    <option>São José dos Campos</option>
                  </select>
                </div>
                <div className="col-md-4">
                  <label className="form-label small fw-semibold text-muted">Cargo/Nível</label>
                  <select className="form-select bg-light border-0">
                    <option>Todos os Cargos</option>
                    <option>Júnior</option>
                    <option>Pleno</option>
                    <option>Sênior</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* 3. KPI CARDS (Os que ajustamos) */}
          <div className="row g-3 mb-4">
            {/* Card 1 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="text-muted mb-1 small">Colaboradores Analisados</p>
                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>156</h3>
                  </div>
                  <div className="d-flex align-items-center justify-content-center rounded-3 ms-2" style={{ width: '42px', height: '42px', backgroundColor: '#e6f0ff', color: '#0d6efd' }}>
                    <i className="bi bi-bar-chart fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 2 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="text-muted mb-1 small">Competências Críticas</p>
                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>4</h3>
                  </div>
                  <div className="d-flex align-items-center justify-content-center rounded-3 ms-2" style={{ width: '42px', height: '42px', backgroundColor: '#ffe6e6', color: '#dc3545' }}>
                    <i className="bi bi-exclamation-triangle fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 3 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="text-muted mb-1 small">Gap Médio</p>
                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>18%</h3>
                  </div>
                  <div className="d-flex align-items-center justify-content-center rounded-3 ms-2" style={{ width: '42px', height: '42px', backgroundColor: '#fff5e6', color: '#fd7e14' }}>
                    <i className="bi bi-graph-down-arrow fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
            {/* Card 4 */}
            <div className="col-12 col-sm-6 col-xl-3">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-3 d-flex align-items-center justify-content-between">
                  <div>
                    <p className="text-muted mb-1 small">Treinamentos Sugeridos</p>
                    <h3 className="fw-bold mb-0" style={{ color: "#0a2b6b" }}>12</h3>
                  </div>
                  <div className="d-flex align-items-center justify-content-center rounded-3 ms-2" style={{ width: '42px', height: '42px', backgroundColor: '#e6fffa', color: '#198754' }}>
                    <i className="bi bi-book fs-5"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 4. SEÇÃO DE GRÁFICOS */}
          <div className="row g-4">
            
            {/* Gráfico 1: Matriz de Competências (Radar) */}
            <div className="col-lg-6">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-1 text-dark">Matriz de Competências</h6>
                  <p className="text-muted small mb-3">
                    Comparação entre competências exigidas vs. nível atual
                  </p>
                  
                  <div style={{ height: "300px", width: "100%" }}>
                    <Radar data={radarData} options={radarOptions} />
                  </div>
                </div>
              </div>
            </div>

            {/* Gráfico 2: Lacunas por Competência (Barras Horizontais) */}
            <div className="col-lg-6">
              <div className="card border-0 rounded-4 shadow-sm h-100">
                <div className="card-body p-4">
                  <h6 className="fw-bold mb-1 text-dark">Lacunas por Competência</h6>
                  <p className="text-muted small mb-3">
                    Diferença percentual entre nível exigido e atual
                  </p>
                  
                  <div style={{ height: "300px", width: "100%" }}>
                    <Bar data={barData} options={barOptions} />
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