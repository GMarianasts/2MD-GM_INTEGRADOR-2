"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Filtros from "@/components/Filtro";
import "./catalogo.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Link from "next/link";

export default function Page() {

  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busca, setBusca] = useState(""); // Estado para a barra de busca

  // 1. Busca os dados do Backend ao carregar a página
  useEffect(() => {
    async function fetchCursos() {
      try {
        const res = await fetch("http://localhost:3001/api/treinamentos");
        const data = await res.json();
        if (data.sucesso) {
          // Filtramos para mostrar apenas cursos ATIVOS ou com INSCRIÇÕES ABERTAS no catálogo
          const cursosDisponiveis = data.dados.filter(
            (c) => c.status === "Ativo" || c.status === "Inscrições Abertas"
          );
          setCursos(cursosDisponiveis);
        }
      } catch (error) {
        console.error("Erro ao buscar cursos:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchCursos();
  }, []);

  // 2. Lógica simples de filtro pela barra de busca (Client-side)
  const cursosFiltrados = cursos.filter((curso) => {
    const termo = busca.toLowerCase();
    return (
      curso.titulo.toLowerCase().includes(termo) ||
      curso.instrutor_nome.toLowerCase().includes(termo) ||
      curso.categoria.toLowerCase().includes(termo)
    );
  });

  return (
    <div className="container-fluid pagina-usuario">
      <div className="row flex-nowrap">
        <aside className="d-none d-md-block col-md-3 col-lg-2 sidebar p-3">
          <ul className="list-unstyled menu">
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-house-door"></i>
              <Link href={'paginaUsuario'}><span>Dashboard</span></Link>
            </li>
            <li className="ativo mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-book"></i>
              <span>Catálogo de Treinamentos</span>
            </li>
            <li className="mb-3 d-flex align-items-center gap-2">
              <i className="bi bi-award"></i>
              <Link href={'meuTreinamento'}><span>Meus Treinamentos</span></Link>
            </li>
            <li className="d-flex align-items-center gap-2">
              <i className="bi bi-person"></i>
              <Link href={'paginaPerfil'}><span>Meu Perfil</span></Link>
            </li>
          </ul>
        </aside>
        <main className="col-12 col-md-9 col-lg-10 p-4 conteudo">
          <h2 className="h4 mb-3 titulo">Catálogo de Treinamentos</h2>
          <p className="descricao">
            Explore nosso catálogo completo e encontre o treinamento ideal
          </p>

          <div className="input-group mb-4 shadow-sm rounded-3 overflow-hidden border-0">
            <span className="input-group-text bg-white border-0 ps-3 text-muted">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control border-0 py-3"
              placeholder="Buscar por nome, categoria ou instrutor..."
              value={busca}
              onChange={(e) => setBusca(e.target.value)}
            />
          </div>

          <div className="row g-4">
            <div className="col-lg-3">
              <Filtros />
            </div>

            <div className="col-lg-9">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="text-muted mb-0 small">
                  {cursosFiltrados.length} treinamentos encontrados
                </p>
              </div>

              {loading ? (
                <div className="text-center py-5 text-muted">
                  <div className="spinner-border spinner-border-sm me-2" role="status"></div>
                  Carregando catálogo...
                </div>
              ) : (
                <div className="row row-cols-1 row-cols-md-2 row-cols-xl-2 g-4">
                  {cursosFiltrados.length > 0 ? (
                    cursosFiltrados.map((curso) => (
                      <div className="col" key={curso.id}>
                        {/* Passamos o objeto inteiro do curso para o Card */}
                        <Card data={curso} />
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-5 text-muted">
                      <i className="bi bi-emoji-frown fs-1 d-block mb-2"></i>
                      Nenhum treinamento encontrado para sua busca.
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}