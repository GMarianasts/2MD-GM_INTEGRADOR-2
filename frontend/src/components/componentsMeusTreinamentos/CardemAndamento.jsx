export default function CardemAndamento({ t }) {
  
  // Funçãozinha para formatar a data (pra não aparecer 2025-12-20T00:00...)
  const formatarData = (dataISO) => {
    if (!dataISO) return 'Sem prazo';
    return new Date(dataISO).toLocaleDateString('pt-BR');
  };

  return (
    <div className="card card-em-andamento border-0 shadow-sm rounded-4 p-4 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-play-circle-fill text-primary fs-4"></i>
          {/* CORREÇÃO: t.titulo em vez de t.nome */}
          <h5 className="fw-bold text-dark mb-0">{t.titulo}</h5>
        </div>
        {/* CORREÇÃO: t.categoria em vez de t.tag */}
        <span className="badge bg-light text-primary">{t.categoria}</span>
      </div>

      {/* CORREÇÃO: t.duracao_horas e t.data_fim */}
      <small className="text-secondary">
       {t.duracao_horas}h • Prazo: {formatarData(t.data_fim)}
      </small>

      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-outline-secondary rounded-3">Ver Detalhes</button>
        <button className="btn btn-primary rounded-3 text-white">Continuar</button>
      </div>
    </div>
  );
}