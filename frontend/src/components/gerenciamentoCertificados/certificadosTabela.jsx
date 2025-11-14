export default function CertificatesTable() {
  const data = [
    { id: "CERT-2025-001234", nome: "João Silva", curso: "Segurança da Informação", data: "20/10/2025", nota: 92 },
    { id: "CERT-2025-001198", nome: "Maria Santos", curso: "Excel Avançado", data: "05/10/2025", nota: 88 },
    { id: "CERT-2025-001045", nome: "Pedro Costa", curso: "Comunicação Corporativa", data: "15/09/2025", nota: 95 },
    { id: "CERT-2025-001123", nome: "Ana Paula", curso: "Metodologias Ágeis", data: "12/10/2025", nota: 90 },
    { id: "CERT-2025-001087", nome: "Carlos Mendes", curso: "Design Thinking", data: "18/09/2025", nota: 85 },
  ];

  return (
    <table className="cert-table">
      <thead>
        <tr>
          <th>ID Certificado</th>
          <th>Colaborador</th>
          <th>Curso</th>
          <th>Data de Emissão</th>
          <th>Nota</th>
          <th>Ações</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.nome}</td>
            <td>{item.curso}</td>
            <td>{item.data}</td>
            <td>
              <span className="badge">{item.nota}%</span>
            </td>
            <td className="actions">
              <button className="icon-btn">👁️</button>
              <button className="icon-btn">⬇️</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
