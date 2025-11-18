export default function CardConcluido({ t }) {
  return (
    <div className="card card-concluido border-0 shadow-sm rounded-4 p-4 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center gap-2">
          <h5 className="fw-bold text-dark mb-0">{t.nome}</h5>
        </div>
        <span className="badge bg-light text-success">{t.tag}</span>
      </div>

      <p className="text-secondary mb-1">Concluído em: {t.dataConclusao}</p>
      <p className="text-secondary mb-2">Duração: {t.horas}h</p>

      <small className="text-secondary">
        Nota final: <strong>{t.nota}%</strong> • Certificado: {t.certificado}
      </small>

      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-primary rounded-3">Baixar Certificado</button>
        <button className="btn btn-outline-secondary rounded-3">Revisar</button>
      </div>
    </div>
  );
}
