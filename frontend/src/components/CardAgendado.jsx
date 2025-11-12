export default function CardAgendado({ t }) {
    return (
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-3">
        <h5 className="fw-bold text-dark mb-1">
        {t.nome}
        </h5>
        <small className="text-muted d-block mb-2">{t.tag}</small>
        <p className="text-secondary mb-1">
          <strong>Início:</strong> {t.data} • <strong>Modalidade:</strong> {t.modalidade} • <strong>Duração:</strong> {t.duracao}
        </p>
        <p className="text-secondary mb-2">
          <strong>Local:</strong> {t.local}
        </p>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm">Ver Detalhes</button>
          <button className="btn btn-light btn-sm">Cancelar Inscrição</button>
        </div>
      </div>
    );
  }
  