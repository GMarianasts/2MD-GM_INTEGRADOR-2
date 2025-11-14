import React from "react";
import "./cardGerenciaPresenca.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const presencaData = [
    { nome: "Workshop: Vendas Inteligentes", data: "16/11/2025", presentes: "", ausentes: "", total: "", percentual: "" },
    { nome: "Workshop: Marketing Digital", data: "18/11/2025", presentes: "", ausentes: "", total: "", percentual: "" },
    { nome: "Workshop: Cultura de Segurança", data: "10/11/2025", presentes: 28, ausentes: 2, total: 30, percentual: 93 },
    { nome: "Lean Manufacturing - Módulo 1", data: "08/11/2025", presentes: 43, ausentes: 2, total: 45, percentual: 96 },
    { nome: "Gestão de Qualidade", data: "05/11/2025", presentes: 38, ausentes: 2, total: 40, percentual: 95 },
    { nome: "Liderança 4.0", data: "03/11/2025", presentes: 40, ausentes: 2, total: 42, percentual: 95 },
];

const PresencaCard = ({ item }) => (
    <div className="presenca-card">
        <div className="presenca-card-content">
            <h3 className="presenca-titulo">{item.nome}</h3>
            <p className="presenca-data">Data: {item.data}</p>
            <div className="presenca-status">
                <span className="status-item presente">
                    <i className="bi bi-circle-fill"></i> Presentes: {item.presentes}
                </span>
                <span className="status-item ausente">
                    <i className="bi bi-circle-fill"></i> Ausentes: {item.ausentes}
                </span>
                <span className="status-item total">
                    Total: {item.total}
                </span>
            </div>
        </div>
        
        <div className="presenca-percentual-area">
            <span className="presenca-percentual">{item.percentual}%</span>
            <span className="presenca-percentual-label">Presença</span>
            <button className="btn-detalhes">
                <i className="bi bi-eye"></i> Detalhes
            </button>
        </div>
    </div>
);

export default function GerenciarPresenca() {
    return (
        <div className="presenca-list-container">
            <header className="presenca-header">
                <div>
                    <h2>Controle de Presença</h2>
                    <p>Registre e acompanhe a presença nos treinamentos</p>
                </div>
                <button className="btn-registrar-presenca">
                    Registrar Presença<i className="bi bi-plus-lg"></i>
                </button>
            </header>
            
            <div className="presenca-cards-wrapper">
                {presencaData.map((item, index) => (
                    <PresencaCard key={index} item={item} />
                ))}
            </div>
        </div>
    );
}