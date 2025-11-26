'use client';

import { useState } from 'react';
import ResumoCard from '@/components/componentsMeusTreinamentos/ResumoCard';
import TabsTreinamento from '@/components/componentsMeusTreinamentos/TabsTreinamento';
import CardEmAndamento from '@/components/componentsMeusTreinamentos/CardemAndamento';
import CardConcluido from '@/components/componentsMeusTreinamentos/CardConcluido';
import CardAgendado from '@/components/componentsMeusTreinamentos/CardAgendado';
import { resumo, emAndamento, concluidos, agendados } from '@/data/TreinamentosMock';
import './meutreinamento.css';
import Link from 'next/link';
 
const iconMap = {
  'Em Andamento': { icon: 'bi-play-circle-fill', bgColor: '#e9f0ff' }, 
  'Concluídos': { icon: 'bi-check-circle-fill', bgColor: '#e5faed' }, 
  'Agendados': { icon: 'bi-calendar-event-fill', bgColor: '#fff4e5' }, 
  'Taxa de conclusão': { icon: 'bi-graph-up', bgColor: '#f9f0ff' } 
};


export default function MeuTreinamentosPage() {
  const [activeTab, setActiveTab] = useState('Em Andamento');

  const renderContent = () => {
    switch (activeTab) {
      case 'Concluídos':
        return concluidos.map((t) => <CardConcluido key={t.id} t={t} />);
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
              <Link href={'paginaUsuario'}><span>Dashboard</span></Link>
            </li>
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-book"></i>
              <Link href={'catalogo'}><span>Catálogo de Treinamentos</span></Link>
            </li>
            <li className="ativo mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-award"></i>
              <Link href={'meuTreinamento'}><span>Meus Treinamentos</span></Link>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="bi bi-person"></i>
              <Link href={'paginaPerfil'}><span>Meu Perfil</span></Link>
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
