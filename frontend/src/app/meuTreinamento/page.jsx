"use client"; 

import CardMeuTreinamento from '../components/blocks/CardMeuTreinamento/index.jsx';
import { getMeusTreinamentosMock } from './utils/mockTreinamentos';

const mainLayoutStyles = {
  marginLeft: '280px', 
  padding: '2rem',
  minHeight: '100vh',
  backgroundColor: '#f8f9fa' 
};

export default function MeusTreinamentosPage() {
  const treinamentos = getMeusTreinamentosMock();

  return (
    <div style={{ display: 'flex' }}>
      <main style={mainLayoutStyles}>
        
        <header className="mb-5">
          <h1 className="fw-bold text-dark">Meus Treinamentos</h1>
          <p className="lead text-muted">
            Visualize seu progresso nos cursos inscritos.
          </p>
        </header>

        <div className="row row-cols-1 row-cols-lg-2 g-4">
          {treinamentos.map((treinamento) => (
            <div key={treinamento.id} className="col">
              <CardMeuTreinamento treinamento={treinamento} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}