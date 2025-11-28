import React from 'react';
import Link from 'next/link';

export default function CardEmAndamento({ t }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100 hover-effect">
      <div className="card-body d-flex flex-column p-4">
        
        <div className="d-flex justify-content-between align-items-start mb-3">
          <span className="badge bg-light text-dark border fw-normal">{t.categoria || 'Geral'}</span>
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle">Em Andamento</span>
        </div>

        <h5 className="fw-bold mb-2 text-dark">{t.titulo}</h5>
        <div className="text-muted small mb-4">
           <i className="bi bi-clock me-1"></i> {t.duracao_horas}h • {t.modalidade}
        </div>

        <div className="mt-auto">
          <div className="d-flex justify-content-between small mb-1 text-muted">
             <span>Progresso</span>
             <strong>{t.progresso || 0}%</strong>
          </div>
          <div className="progress mb-3" style={{height: 8}}>
             <div className="progress-bar bg-primary" style={{width: `${t.progresso || 0}%`}}></div>
          </div>

          <Link href={`/catalogo/${t.curso_id}`} className="btn w-100 fw-semibold btn-outline-primary rounded-3">
            Continuar Estudando
          </Link>
        </div>

      </div>
    </div>
  );
}