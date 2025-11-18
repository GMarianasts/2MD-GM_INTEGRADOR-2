import React from "react";
import "./cardGerenciaHistorico.css";
import "bootstrap-icons/font/bootstrap-icons.css";

// Dados de exemplo baseados na imagem
const historicoData = [
    { 
        tipo: "Novo curso cadastrado", 
        descricao: "Inovação e Design Thinking", 
        usuario: "Admin", 
        dataHora: "06/11/2025 14:30",
        icon: "bi-file-earmark-text"
    },
    { 
        tipo: "Certificado emitido", 
        descricao: "CERT-2025-001234 para João Silva", 
        usuario: "Sistema", 
        dataHora: "06/11/2025 10:15",
        icon: "bi-file-earmark-text"
    },
    { 
        tipo: "Inscrição realizada", 
        descricao: "Maria Santos em Liderança 4.0", 
        usuario: "Maria Santos", 
        dataHora: "05/11/2025 16:45",
        icon: "bi-file-earmark-text"
    },
    { 
        tipo: "Curso atualizado", 
        descricao: "Excel Avançado - Nova turma aberta", 
        usuario: "Admin", 
        dataHora: "05/11/2025 09:20",
        icon: "bi-file-earmark-text"
    },
    { 
        tipo: "Presença registrada", 
        descricao: "28 participantes em Workshop Segurança", 
        usuario: "Carlos Mendes", 
        dataHora: "04/11/2025 18:00",
        icon: "bi-file-earmark-text"
    },
];

const HistoricoItem = ({ item }) => (
    <div className="atividade-item">
        <div className="atividade-content">
            <div className="atividade-icon">
                <i className={`bi ${item.icon}`}></i>
            </div>
            <div className="atividade-info">
                <h3>{item.tipo}</h3>
                <p>{item.descricao}</p>
                <p className="small-text  texto-menor">Usuário: {item.usuario}</p>
            </div>
        </div>
        <span className="atividade-detalhe">{item.dataHora}</span>
    </div>
);

export default function GerenciarHistorico() {
    return (
        <div className="historico-card-container">
            <header className="historico-header">
                <div>
                    <h2>Histórico de Atividades</h2>
                    <p>Visualize o histórico completo de ações no sistema</p>
                </div>
                <button className="btn-exportar">
                    <i className="bi bi-download"></i> Exportar
                </button>
            </header>

            <div className="historico-lista">
                {historicoData.map((item, index) => (
                    <HistoricoItem key={index} item={item} />
                ))}
            </div>
        </div>
    );
}