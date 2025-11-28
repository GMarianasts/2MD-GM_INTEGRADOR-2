export default function CardConcluido({ t }) {
  
  const formatarData = (dataISO) => {
    if (!dataISO) return '-';
    return new Date(dataISO).toLocaleDateString('pt-BR');
  };

  return (
    <div className="card card-concluido border-0 shadow-sm rounded-4 p-4 mb-3">
      <div className="d-flex justify-content-between align-items-center mb-2">
        <div className="d-flex align-items-center gap-2">
          <i className="bi bi-check-circle-fill text-success fs-4"></i>
          {/* CORREÇÃO: t.titulo */}
          <h5 className="fw-bold text-dark mb-0">{t.titulo}</h5>
        </div>
        {/* CORREÇÃO: t.categoria */}
        <span className="badge bg-light text-success">{t.categoria}</span>
      </div>

      {/* CORREÇÃO: t.data_conclusao (ou data_inscricao se conclusao for null) */}
      <p className="text-secondary mb-1">Iniciado em: {formatarData(t.data_inscricao)}</p>
      <p className="text-secondary mb-2">Duração: {t.duracao_horas}h</p>

      <div className="mt-3 d-flex gap-2">
        <button className="btn btn-success text-white rounded-3">Baixar Certificado</button>
      </div>
    </div>
  );
}