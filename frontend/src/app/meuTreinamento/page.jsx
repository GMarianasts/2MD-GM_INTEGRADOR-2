'use client';

import { useState } from 'react';
import ResumoCard from '@/components/ResumoCard';
import TabsTreinamento from '@/components/TabsTreinamento';
import CardEmAndamento from '@/components/CardemAndamento';
import CardConcluido from '@/components/CardConcluido';
import CardAgendado from '@/components/CardAgendado';
import { resumo, emAndamento, concluidos, agendados } from '@/data/TreinamentosMock';
import './meutreinamento.css';
import '@/components/components.css';


export default function MeuTreinamentosPage() {
  const [activeTab, setActiveTab] = useState('Em Andamento');

  const renderContent = () => {
    switch (activeTab) {
      case 'Concluídos':
        return concluidos.map((t) => <CardConcluido key={t.id} t={t} />);
      case 'Agendados':
        return agendados.map((t) => <CardAgendado key={t.id} t={t} />);
      default:
        return emAndamento.map((t) => <CardEmAndamento key={t.id} t={t} />);
    }
  };

  return (
    <div className="container-fluid pagina-treinamentos">
      <div className="row flex-nowrap">

        <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar">
          <ul className="list-unstyled menu">
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-house-door"></i>
              <span>Dashboard</span>
            </li>
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-book"></i>
              <span>Catálogo de Treinamentos</span>
            </li>
            <li className="ativo mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-award"></i>
              <span>Meus Treinamentos</span>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="bi bi-person"></i>
              <span>Meu Perfil</span>
            </li>
          </ul>
        </aside>

        <main className="col px-4 py-4 conteudo-treinamentos">
          <h2 className="titulo-azul">Meus Treinamentos</h2>
          <p className="text-secondary">Acompanhe seu progresso e histórico de aprendizado.</p>

          <div className="row row-cols-2 row-cols-lg-4 g-3 mb-4">
            {resumo.map((item, index) => (
              <ResumoCard key={index} {...item} />
            ))}
          </div>

          <TabsTreinamento activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="mt-4">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}
