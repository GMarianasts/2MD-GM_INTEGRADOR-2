import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Card() {
  return (
    <div className="card shadow-sm rounded-3 h-100">
      <div className="card-body d-flex flex-column">

        <span
          className="badge bg-light-subtle text-emphasis-secondary mb-2 align-self-start"
        >
          Agilidade {/*categoria*/}
        </span>

        <div className="d-flex justify-content-between align-items-start">
          <h5 className="card-title fw-semibold">
            Metodologias Ágeis {/*titulo*/}
          </h5>
          <div className="d-flex align-items-center gap-1">
            <i className="bi bi-star-fill text-warning"></i>
            <span>4.8 {/*avaliacao*/}</span>
          </div>
        </div>

        <p className="card-text text-muted" style={{ fontSize: "0.9rem" }}>
          Aprenda a aplicar Scrum, Kanban e outras... {/*descricao*/}
        </p>

        <div className="d-flex gap-3 text-muted" style={{ fontSize: "0.85rem" }}>
          <span><i className="bi bi-clock me-1"></i> 12h {/*duracao*/}</span>
          <span><i className="bi bi-laptop me-1"></i> Online {/*formato*/}</span>
          <span><i className="bi bi-people me-1"></i> 45 {/*alunos*/}</span>
        </div>

        <hr />

        <div className="d-flex justify-content-between align-items-center mb-3">
          <div>
            <small className="text-muted">Instrutor</small><br />
            <span className="fw-semibold">Maria Santos {/*instrutor*/}</span>
          </div>
          <span className="badge bg-light-subtle text-emphasis-secondary">
            Intermediário {/*nivel*/}
          </span>
        </div>

        <button
          className="btn text-white mt-auto w-100 rounded-3 fw-semibold"
          style={{
            backgroundColor: '#0a2b6b',
            border: 'none'
          }}
        >
          Ver Detalhes
        </button>

      </div>
    </div>
  );
}