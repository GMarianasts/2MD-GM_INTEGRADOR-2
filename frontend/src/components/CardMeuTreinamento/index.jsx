// frontend/src/app/components/MeuTreinamentoCard.jsx

import Image from 'next/image';
import styles from './MeuTreinamentoCard.module.css'; 

export default function meuTreinamentoCard({ treinamento }) {
  const { id, nome, area, progresso, imagemUrl } = treinamento;


  const isConcluido = progresso === 100;
  const buttonText = isConcluido ? 'Ver Certificado' : 'Continuar Treinamento';
  const buttonIcon = isConcluido ? 'bi-award' : 'bi-play-circle-fill';
  const buttonClass = isConcluido ? 'btn-success' : 'btn-outline-primary';
  const buttonLink = isConcluido ? `/certificado/${id}` : `/treinamento/${id}`;
  const progressClass = isConcluido ? 'bg-success' : 'bg-primary';

  return (

    <div className={`card shadow-sm mb-3 border-0 h-100 ${styles.cardContainer}`}>
      <div className="row g-0 h-100">
        <div className="col-md-3">
          <div style={{ height: '100%', position: 'relative' }}>
            <Image
              src={imagemUrl || '/images/placeholder.jpg'}
              alt={`Capa do curso: ${nome}`}
              fill={true}
              className={styles.cardImage}
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            {isConcluido && (
              <span className={`badge position-absolute top-0 start-0 m-2 fs-6 ${styles.concluidoBadge}`}>
                Concluído
              </span>
            )}
          </div>
        </div>
        
        <div className="col-md-9">
          <div className="card-body d-flex flex-column h-100">
            <h5 className="card-title fw-bold text-dark">{nome}</h5>
            <p className="card-text text-muted small mb-3">
              Área: **{area}**
            </p>

            <div className="mt-auto pt-2">
              {!isConcluido && (
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-1">
                    <span className="small text-secondary">
                      Progresso:
                    </span>
                    <span className={`fw-bold text-primary`}>
                      {progresso}%
                    </span>
                  </div>
                  
                  <div className="progress" style={{ height: '8px' }}>
                    <div
                      className={`progress-bar ${progressClass}`}
                      role="progressbar"
                      style={{ width: `${progresso}%` }}
                      aria-valuenow={progresso}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              )}

              <a href={buttonLink} className={`btn btn-sm w-100 fw-bold ${buttonClass}`}>
                {buttonText} <i className={`bi ${buttonIcon}`}></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}