'use client';

import { useState } from 'react';
import ResumoCard from '@/components/ResumoCard';
import TabsTreinamento from '@/components/TabsTreinamento';
import CardEmAndamento from '@/components/CardemAndamento';
import CardConcluido from '@/components/CardConcluido';
import CardAgendado from '@/components/CardAgendado';
import { resumo, emAndamento, concluidos, agendados } from '@/data/TreinamentosMock';

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
    <div className="container py-4">
      <h2 className="fw-bold text-dark">Meus Treinamentos</h2>
      <p className="text-secondary mb-4">
        Acompanhe seu progresso e histórico de aprendizado.
      </p>

      <div className="row row-cols-2 row-cols-lg-4 g-3">
        {resumo.map((item, index) => (
          <ResumoCard key={index} {...item} />
        ))}
      </div>

      <TabsTreinamento activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="mt-4">{renderContent()}</div>
    </div>
  );
}
