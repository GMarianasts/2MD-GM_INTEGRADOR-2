import React from "react";
import "./cardGerenciarInscricoes.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const inscricoesData = [
    { colaborador: "João Silva", curso: "Metodologias Ágeis", data: "01/11/2025", progresso: 65, status: "Ativo" },
    { colaborador: "Maria Santos", curso: "Liderança Transformacional", data: "03/11/2025", progresso: 35, status: "Ativo" },
    { colaborador: "Pedro Costa", curso: "Excel Avançado", data: "05/11/2025", progresso: 100, status: "Concluído" },
    { colaborador: "Ana Paula", curso: "Segurança da Informação", data: "02/11/2025", progresso: 0, status: "Cancelado" },
    { colaborador: "Carlos Mendes", curso: "Design Thinking", data: "04/11/2025", progresso: 80, status: "Ativo" },
];

// Barra de progresso
const ProgressBar = ({ progresso }) => (
    <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progresso}%` }}></div>
    </div>
);

// Badge de status
const StatusBadge = ({ status }) => {
    let className = "status-badge";
    if (status === "Ativo") className += " status-ativo";
    else if (status === "Concluído") className += " status-concluido";
    else if (status === "Cancelado") className += " status-cancelado";
    return <span className={className}>{status}</span>;
};

const [inscricoes, setInscricoes] = useState([]);

async function remover(id) {
    await fetch(`http://localhost:3001/inscricoes/${id}`, {
        method: "DELETE"
    });

    carregarInscricoes();
}

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

                {inscricoes.map((item, index) => (
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
