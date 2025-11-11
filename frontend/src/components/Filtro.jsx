import 'bootstrap-icons/font/bootstrap-icons.css';

export default function Filtros() {
  return (
    <aside className="border p-3 rounded-3 bg-white shadow-sm">

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0">
          <i className="bi bi-filter me-2"></i>
          Filtros
        </h5>
        <button className="btn btn-link text-decoration-none p-0">
          Ocultar
        </button>
      </div>

      <div className="mb-3">
        <label htmlFor="competenciaSelect" className="form-label fw-bold">
          Competência
        </label>
        <select className="form-select" id="competenciaSelect">
          <option defaultValue>Todas</option>
          <option value="1">Agilidade</option>
          <option value="2">Análise de Dados</option>
          <option value="3">Inovação</option>
          <option value="4">Liderança</option>
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Modalidade</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkModalTodas" />
          <label className="form-check-label" htmlFor="checkModalTodas">
            Todas
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkModalOnline" />
          <label className="form-check-label" htmlFor="checkModalOnline">
            Online
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkModalPresencial" />
          <label className="form-check-label" htmlFor="checkModalPresencial">
            Presencial
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkModalHibrido" />
          <label className="form-check-label" htmlFor="checkModalHibrido">
            Híbrido
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Nível</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkNivelTodos" />
          <label className="form-check-label" htmlFor="checkNivelTodos">
            Todos
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkNivelBasico" />
          <label className="form-check-label" htmlFor="checkNivelBasico">
            Básico
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkNivelIntermediario" />
          <label className="form-check-label" htmlFor="checkNivelIntermediario">
            Intermediário
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkNivelAvancado" />
          <label className="form-check-label" htmlFor="checkNivelAvancado">
            Avançado
          </label>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label fw-bold">Status</label>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkStatusAbertas" />
          <label className="form-check-label" htmlFor="checkStatusAbertas">
            Inscrições Abertas
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="checkbox" value="" id="checkStatusAndamento" />
          <label className="form-check-label" htmlFor="checkStatusAndamento">
            Em Andamento
          </label>
        </div>
      </div>

      <button className="btn btn-outline-secondary w-100 mt-2">
        Limpar Filtros
      </button>

    </aside>
  );
}