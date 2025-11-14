export default function TabsTreinamento({ activeTab, setActiveTab }) {
    const tabs = ['Em Andamento', 'Concluídos', 'Agendados'];
    <i class="bi bi-check-square"></i>
  
    return (
      <ul className="nav nav-tabs border-0 mt-4">
        {tabs.map((tab) => (
          <li key={tab} className="nav-item">
            <button
              className={`nav-link fw-semibold ${
                activeTab === tab ? 'active text-primary border-primary border-bottom-2' : 'text-muted'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          </li>
        ))}
      </ul>
    );
  }
  