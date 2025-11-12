export default function CardEmAndamento({ t }) {
    return (
      <div className="card border-0 shadow-sm rounded-4 p-4 mb-3">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h5 className="fw-bold text-dark mb-0">{t.nome}</h5>
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
  