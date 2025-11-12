export default function CardConcluido({ t }) {
    return (
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-3">
        <h5 className="fw-bold text-dark mb-1">
         {t.nome}
        </h5>
        <small className="text-muted d-block mb-2">{t.area}</small>
        <p className="text-secondary mb-1">
          <strong>Data:</strong> {t.data} • <strong>Duração:</strong> {t.duracao} • <strong>Nota:</strong> {t.nota}
        </p>
        <p className="text-secondary mb-2">
          Certificado: <code>{t.certificado}</code>
        </p>
        <div className="d-flex gap-2">
          <button className="btn btn-outline-primary btn-sm">Baixar Certificado</button>
          <button className="btn btn-light btn-sm">Revisar</button>
        </div>
      </div>
    );
  }
  