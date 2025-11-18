import React from 'react';

export default function ResumoCard({ titulo, valor, iconClass, iconBgColor }) {
  return (
    <div className="col">
    
      <div className="card shadow-sm border-0 rounded-4 p-3 h-100 resumo-card-layout">
      
        <div className="d-flex justify-content-between align-items-center">
          
          <div className="text-start">
            <h6 className="text-secondary mb-0 resumo-card-titulo">{titulo}</h6> 
            <h3 className="fw-bold text-dark mb-0 resumo-card-valor">{valor}</h3>
          </div>

          <div className="resumo-card-icon-container" style={{ backgroundColor: iconBgColor }}>
            <i className={`bi ${iconClass} fs-5`}></i>
          </div>
        </div>
      </div>
    </div>
  );
}