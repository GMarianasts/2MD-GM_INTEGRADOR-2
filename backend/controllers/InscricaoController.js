'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Importante para redirecionar
import ResumoCard from '@/components/componentsMeusTreinamentos/ResumoCard';
import TabsTreinamento from '@/components/componentsMeusTreinamentos/TabsTreinamento';
import CardEmAndamento from '@/components/componentsMeusTreinamentos/CardemAndamento';
import CardConcluido from '@/components/componentsMeusTreinamentos/CardConcluido';
import Link from 'next/link';
import './meutreinamento.css';

export default function MeuTreinamentosPage() {
  const router = useRouter(); // Hook para navegação
  const [activeTab, setActiveTab] = useState('Em Andamento');
  const [meusCursos, setMeusCursos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchMeusTreinamentos() {
      try {
        // 1. Tenta pegar o usuário salvo no navegador
        const dadosStorage = localStorage.getItem('usuario');
        
        // 2. Se NÃO tiver usuário salvo, manda pro login (segurança)
        if (!dadosStorage) {
            console.warn("Nenhum usuário logado. Redirecionando...");
            router.push('/'); // Ou '/login' dependendo da sua rota inicial
            return;
        }

        // 3. Se tiver, converte para objeto e usa o ID real
        const usuarioLogado = JSON.parse(dadosStorage);
        console.log("Buscando cursos para:", usuarioLogado.nome, "(ID:", usuarioLogado.id, ")");

        const res = await fetch(`http://localhost:3001/inscricoes/usuario/${usuarioLogado.id}`);
        const data = await res.json();

        if (data.sucesso) {
          setMeusCursos(data.dados);
        } else {
          console.log("Nenhum curso encontrado ou erro na API");
        }

      } catch (error) {
        console.error("Erro ao buscar meus treinamentos:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchMeusTreinamentos();
  }, [router]);

  // Filtros (Seguros para evitar erro se vier null)
  const cursosEmAndamento = meusCursos.filter(c => 
      c.status_inscricao === 'Inscrito' || c.status === 'Inscrito'
  );

  const cursosConcluidos = meusCursos.filter(c => 
      c.status_inscricao === 'Concluído' || c.status === 'Concluído'
  );

  const renderContent = () => {
    if (loading) return <div className="text-center py-5">Carregando...</div>;

    switch (activeTab) {
      case 'Concluídos':
        return cursosConcluidos.length > 0 
          ? cursosConcluidos.map((t, idx) => <CardConcluido key={idx} t={t} />)
          : <p className="text-muted mt-3">Nenhum curso concluído ainda.</p>;
      
      default: 
        return cursosEmAndamento.length > 0
          ? cursosEmAndamento.map((t, idx) => <CardEmAndamento key={idx} t={t} />)
          : <p className="text-muted mt-3">Você não está inscrito em nenhum curso no momento.</p>;
    }
  };

  const resumo = [
    { title: 'Em Andamento', value: cursosEmAndamento.length, icon: 'bi-play-circle', color: 'blue' },
    { title: 'Concluídos', value: cursosConcluidos.length, icon: 'bi-check-circle', color: 'green' },
    { title: 'Taxa de conclusão', value: `${meusCursos.length > 0 ? Math.round((cursosConcluidos.length / meusCursos.length) * 100) : 0}%`, icon: 'bi-graph-up', color: 'purple' },
  ];

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