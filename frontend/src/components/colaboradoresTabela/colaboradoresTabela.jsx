"use client";

import { useEffect, useState } from "react";

export default function colaboradorestabela({ onNovoColaborador }) {
  const [colaboradores, setColaboradores] = useState([]);
  const [loading, setLoading] = useState(true);

  const carregarDados = async () => {
    try {

      const response = await fetch("http://localhost:3001/api/usuarios");
      const data = await response.json();

      if (response.ok) {

        setColaboradores(data.dados || data || []); 
      } else {
        console.error("Erro ao buscar:", data.mensagem);
      }
    } catch (error) {
      console.error("Erro de conexão:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    carregarDados();
  }, []);

  return (
    <div className="tabela-container shadow-sm bg-white rounded-3 border mt-4">
      <div className="header-lista p-4 border-bottom">
        <h5 className="fw-semibold mb-1">
          <i className="bi bi-people me-2" style={{color: '#0a2b6b'}}></i> Lista de Colaboradores
        </h5>
        <p className="text-muted small mb-0">
          Gerencie cadastros, permissões e histórico de colaboradores
        </p>
      </div>

      <div className="search-box p-3 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="input-group" style={{ maxWidth: '400px' }}>
           <span className="input-group-text bg-light border-end-0"><i className="bi bi-search"></i></span>
           <input type="text" className="form-control border-start-0 bg-light" placeholder="Buscar colaboradores..." />
        </div>

        <button
          className="btn text-white d-flex align-items-center gap-2 fw-semibold"
          style={{ backgroundColor: "#0a2b6b" }}
          onClick={onNovoColaborador}
        >
          <i className="bi bi-plus-lg"></i> Cadastrar Colaborador
        </button>
      </div>

      <div className="table-responsive">
        <table className="table tabela-colaboradores table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              <th className="ps-4">Colaborador</th>
              <th>ID</th>
              <th>Departamento</th>
              <th>Cargo</th>
              <th>Unidade</th>
              <th>Acesso</th>
              <th className="text-end pe-4">Ações</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="7" className="text-center py-5">Carregando colaboradores...</td>
              </tr>
            ) : colaboradores.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-5 text-muted">Nenhum colaborador encontrado.</td>
              </tr>
            ) : (

              colaboradores.map((c) => (
                <tr key={c.id}>
                  <td className="ps-4">
                    <div className="d-flex align-items-center">

                      <div 
                        className="rounded-circle d-flex justify-content-center align-items-center text-white fw-bold"
                        style={{ width: '40px', height: '40px', backgroundColor: '#0a2b6b', fontSize: '0.9rem' }}
                      >
                        {c.nome ? c.nome.substring(0, 2).toUpperCase() : "U"}
                      </div>
                      <div className="ms-3">
                        <strong className="text-dark d-block">{c.nome}</strong>
                        <span className="text-muted small">{c.email}</span>
                      </div>
                    </div>
                  </td>

                  <td className="text-muted">#{c.id}</td>
                  <td>{c.departamento || "-"}</td>
                  <td>{c.cargo || "-"}</td>
                  <td>{c.unidade || "-"}</td>
                  
                  <td>
                    <span className={`badge rounded-pill border px-3 ${
                        c.nivel_acesso === 'Administrador' ? 'bg-danger-subtle text-danger border-danger-subtle' : 
                        c.nivel_acesso === 'Gestor' ? 'bg-warning-subtle text-warning border-warning-subtle' : 
                        'bg-success-subtle text-success border-success-subtle'
                    }`}>
                      {c.nivel_acesso || 'Colaborador'}
                    </span>
                  </td>

                  <td className="text-end pe-4">
                    <button className="btn btn-sm btn-light rounded-circle text-muted"><i className="bi bi-pencil-square"></i></button>
                    <button className="btn btn-sm btn-light rounded-circle text-danger ms-1"><i className="bi bi-trash"></i></button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}