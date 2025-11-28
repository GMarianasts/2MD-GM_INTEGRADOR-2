import React from 'react';
import Link from 'next/link';

export default function CardConcluido({ t }) {
  return (
    <div className="card border-0 shadow-sm rounded-4 h-100 hover-effect" style={{opacity: 0.9}}>
      <div className="card-body d-flex flex-column p-4">
        
        <div className="d-flex justify-content-between align-items-start mb-3">
          <span className="badge bg-light text-dark border fw-normal">{t.categoria || 'Geral'}</span>
          <span className="badge bg-success text-white">Concluído</span>
        </div>

        <h5 className="fw-bold mb-2 text-dark">{t.titulo}</h5>
        <div className="text-muted small mb-4">
           <i className="bi bi-check-circle-fill text-success me-1"></i> Finalizado
        </div>

        <div className="mt-auto">
          <button className="btn w-100 fw-semibold btn-outline-success rounded-3">
            Ver Certificado
          </button>
        </div>

      </div>
    </div>
  );
}