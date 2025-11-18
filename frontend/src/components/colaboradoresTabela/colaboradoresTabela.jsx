"use client";

export default function TabelaColaboradores() {
  const colaboradores = [
    {
      nome: "João Silva",
      email: "joao.silva@gm.com",
      id: "GM-2023-001234",
      departamento: "Engenharia",
      cargo: "Engenheiro Sênior",
      unidade: "São Caetano do Sul",
      treinos: 12,
      conclusao: "87%",
      status: "Ativo",
    },
    {
      nome: "Maria Santos",
      email: "maria.santos@gm.com",
      id: "GM-2023-001456",
      departamento: "Recursos Humanos",
      cargo: "Analista de RH",
      unidade: "São Caetano do Sul",
      treinos: 8,
      conclusao: "92%",
      status: "Ativo",
    },
    {
      nome: "Pedro Costa",
      email: "pedro.costa@gm.com",
      id: "GM-2023-001789",
      departamento: "Produção",
      cargo: "Supervisor",
      unidade: "Gravatá",
      treinos: 15,
      conclusao: "78%",
      status: "Ativo",
    },
    {
      nome: "Ana Paula",
      email: "ana.paula@gm.com",
      id: "GM-2023-002012",
      departamento: "Qualidade",
      cargo: "Engenheira de Qualidade",
      unidade: "São José dos Campos",
      treinos: 10,
      conclusao: "95%",
      status: "Ativo",
    },
    {
      nome: "Carlos Mendes",
      email: "carlos.mendes@gm.com",
      id: "GM-2023-002345",
      departamento: "TI",
      cargo: "Desenvolvedor",
      unidade: "São Caetano do Sul",
      treinos: 6,
      conclusao: "65%",
      status: "Inativo",
    },
  ];

  return (
    <div className="tabela-container shadow-sm">
      <div className="header-lista">
        <h5 className="fw-semibold">
          <i className="bi bi-people me-2"></i> Lista de Colaboradores
        </h5>
        <p className="text-muted">
          Gerencie cadastros, permissões e histórico de colaboradores
        </p>
      </div>

      {/* Barra de busca */}
      <div className="search-box">
        <i className="bi bi-search"></i>
        <input
          type="text"
          className="form-control"
          placeholder="Buscar colaboradores por nome, e-mail ou ID..."
        />
        <button className="btn btn-primary cadastrar-btn">
          <i className="bi bi-plus-lg me-2"></i> Cadastrar Colaborador
        </button>
      </div>

      <table className="table tabela-colaboradores">
        <thead>
          <tr>
            <th>Colaborador</th>
            <th>ID</th>
            <th>Departamento</th>
            <th>Cargo</th>
            <th>Unidade</th>
            <th>Treinamentos</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {colaboradores.map((c, i) => (
            <tr key={i}>
              <td>
                <div className="d-flex align-items-center">
                  <div className="avatar">
                    {c.nome
                      .split(" ")
                      .map((x) => x[0])
                      .join("")
                      .slice(0, 2)
                      .toUpperCase()}
                  </div>
                  <div className="ms-2">
                    <strong>{c.nome}</strong>
                    <br />
                    <span className="text-muted small">{c.email}</span>
                  </div>
                </div>
              </td>
              <td>{c.id}</td>
              <td>{c.departamento}</td>
              <td>{c.cargo}</td>
              <td>{c.unidade}</td>
              <td>
                {c.treinos}
                <br />
                <span className="text-muted small">{c.conclusao} concluído</span>
              </td>
              <td>
                <span className={`status ${c.status === "Ativo" ? "ativo" : "inativo"}`}>
                  {c.status}
                </span>
              </td>
              <td className="acoes">
                <i className="bi bi-eye"></i>
                <i className="bi bi-pencil-square"></i>
                <i className="bi bi-trash text-danger"></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
