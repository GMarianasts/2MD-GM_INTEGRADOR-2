export default function CardemAndamento({ t }) {
  return (
    <div className="card card-em-andamento border-0 shadow-sm rounded-4 p-4 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-play-circle-fill text-primary fs-4"></i>
          <h5 className="fw-bold text-dark mb-0">{t.nome}</h5>
        </div>
        <span className="badge bg-light text-primary">{t.tag}</span>
      </div>

      <p className="text-secondary mb-2">Módulo Atual: {t.moduloAtual}</p>

      <div className="progress mb-3" style={{ height: '8px' }}>
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          style={{ width: `${t.progresso}%` }}
        />
      </div>

      <small className="text-secondary">
        {t.modulos} módulos • {t.horas} • Prazo: {t.prazo}
      </small>

      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-primary rounded-3">Continuar</button>
        <button className="btn btn-outline-secondary rounded-3">Ver Detalhes</button>
      </div>
    </div>
  );
}
