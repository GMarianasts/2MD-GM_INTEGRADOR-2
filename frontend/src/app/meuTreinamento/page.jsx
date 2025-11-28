'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from "@/context/AuthContext";
import ResumoCard from '@/components/componentsMeusTreinamentos/ResumoCard';
import TabsTreinamento from '@/components/componentsMeusTreinamentos/TabsTreinamento';
import CardEmAndamento from '@/components/componentsMeusTreinamentos/CardemAndamento'; // Atenção ao nome do arquivo na sua imagem
import CardConcluido from '@/components/componentsMeusTreinamentos/CardConcluido';
import './meutreinamento.css';

export default function MeuTreinamentosPage() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('Em Andamento');
  const [meusCursos, setMeusCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeusTreinamentos() {
      if (!user || !user.id) return;

      try {
        const res = await fetch(`http://localhost:3001/api/inscricoes/usuario/${user.id}?t=${new Date().getTime()}`);
        const data = await res.json();

        if (data.sucesso) {
          setMeusCursos(data.dados || []);
        }
      } catch (error) {
        console.error("Erro ao buscar:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMeusTreinamentos();
  }, [user]);

  // Filtros
  const statusAtivos = ['Ativo', 'Inscrito', 'ativo', 'inscrito'];
  const statusConcluidos = ['Concluído', 'Concluido', 'concluido'];

  const cursosEmAndamento = meusCursos.filter(c => statusAtivos.includes(c.status));
  const cursosConcluidos = meusCursos.filter(c => statusConcluidos.includes(c.status));

  // Dados para os Cards de Resumo
  const totalCursos = meusCursos.length;
  const taxa = totalCursos > 0 ? Math.round((cursosConcluidos.length / totalCursos) * 100) : 0;

  const resumoData = [
    { title: 'Em Andamento', value: cursosEmAndamento.length, icon: 'bi-play-circle', color: 'text-primary', bg: 'bg-primary-subtle' },
    { title: 'Concluídos', value: cursosConcluidos.length, icon: 'bi-check-circle', color: 'text-success', bg: 'bg-success-subtle' },
    { title: 'Taxa de Conclusão', value: `${taxa}%`, icon: 'bi-graph-up', color: 'text-info', bg: 'bg-info-subtle' },
  ];

  const renderContent = () => {
    if (loading) return <div className="text-center py-5">Carregando...</div>;

    if (meusCursos.length === 0) {
        return (
            <div className="text-center py-5">
                <p className="text-muted">Você ainda não se inscreveu em nenhum curso.</p>
                <Link href="/catalogo" className="btn btn-primary" style={{backgroundColor: '#0a2b6b'}}>Ir para o Catálogo</Link>
            </div>
        );
    }

// ... trecho do renderContent ...
    if (activeTab === 'Concluídos') {
        return cursosConcluidos.length > 0 
          // A chave (key) vai na div da coluna, o dado (t) vai no Card
          ? <div className="row g-3">{cursosConcluidos.map((t) => <div key={t.inscricao_id} className="col-12 col-md-6 col-lg-4"><CardConcluido t={t} /></div>)}</div>
          : <div className="text-center py-4 text-muted">Nenhum curso concluído ainda.</div>;
    }


    // Padrão: Em Andamento
    return cursosEmAndamento.length > 0
          ? <div className="row g-3">{cursosEmAndamento.map((t) => <div key={t.inscricao_id} className="col-12 col-md-6 col-lg-4"><CardEmAndamento t={t} /></div>)}</div>
          : <div className="text-center py-4 text-muted">Nenhum curso em andamento. <Link href="/catalogo" className="text-primary">Ver catálogo</Link></div>;
  };

  if (!user) return <div className="p-5 text-center">Faça login para ver seus cursos.</div>;

  return (
    <div className="container-fluid pagina-treinamentos bg-light min-vh-100">
      <div className="row flex-nowrap">
        
        {/* Sidebar */}
        <aside className="d-none d-md-block col-md-3 col-lg-2 bg-white border-end p-3 sidebar" style={{ minHeight: "100vh" }}>
            <div className="mb-4 px-2"><span className="h5 fw-bold mb-0" style={{ color: "#0a2b6b" }}>GM | Ignite</span></div>
            <ul className="list-unstyled menu sticky-top pt-3">
              <li className="mb-3 d-flex align-items-center gap-2"><i className="bi bi-house-door"></i><Link href="/paginaUsuario" className="text-decoration-none text-dark"><span>Dashboard</span></Link></li>
              <li className="mb-3 d-flex align-items-center gap-2"><i className="bi bi-book"></i><Link href="/catalogo" className="text-decoration-none text-dark"><span>Catálogo</span></Link></li>
              <li className="ativo mb-3 d-flex align-items-center gap-2" style={{color: '#0a2b6b', fontWeight: 'bold'}}><i className="bi bi-award"></i><span>Meus Treinamentos</span></li>
              <li className="d-flex align-items-center gap-2"><i className="bi bi-person"></i><Link href="/paginaPerfil" className="text-decoration-none text-dark"><span>Meu Perfil</span></Link></li>
            </ul>
        </aside>

        <main className="col-12 col-md-9 col-lg-10 px-4 py-4">
          <h2 className="h4 fw-bold mb-2" style={{ color: "#0a2b6b" }}>Meus Treinamentos</h2>
          <p className="text-secondary mb-4">Acompanhe seu progresso e histórico de aprendizado.</p>

          {/* Cards de Resumo (Componente) */}
          <div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
            {resumoData.map((item, index) => (
              <div key={index} className="col">
                  <ResumoCard title={item.title} value={item.value} icon={item.icon} color={item.color} bg={item.bg} />
              </div>
            ))}
          </div>
          
          {/* Abas (Componente) */}
          <TabsTreinamento activeTab={activeTab} setActiveTab={setActiveTab} />

          <div className="mt-4">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}