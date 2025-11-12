export default function ResumoCard({ titulo, valor }) {
    return (
      <div className="col">
        <div className="card shadow-sm border-0 rounded-4 text-center p-3 h-100">
          <h6 className="text-secondary mb-2">{titulo}</h6>
          <h3 className="fw-bold text-dark">{valor}</h3>
        </div>
      </div>
    );
  }
  