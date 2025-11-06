"use client";

import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.min.css"

export default function Home() {
  return (
    <main className="login-container">
      <div className="row g-0 h-100">

        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center login-fundo-esquerdo">
          <div className="login-conteudo-esquerdo">
            <div className="login-logo-section mb-4">
              <span className="login-logo-text">GM | </span>
            </div>

            <h1 className="login-titulo mb-3">Acelere seu Desenvolvimento Profissional</h1>

            <p className="login-descricao mb-5">
              Plataforma integrada de gestão de treinamentos e desenvolvimento de colaboradores da General Motors.
            </p>

            <ul className="ignite-feature-list">
              <li className="feature-item">Trilhas de Aprendizado Personalizadas</li>
              <li className="feature-item">Catálogo Completo de Treinamentos</li>
              <li className="feature-item">Análise de Competências e Skill Gap</li>
            </ul>
          </div>
          
          <div className="gm-logo-bottom">
            {/*<Image src="/path/to/gm-logo.svg" alt="Nova Logo GM" width={100} height={30} /> */}
          </div>

        </div>

        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center login-form-side">
          <div className="login-form-wrapper">
            <h2 className="login-title mb-4">Bem-vindo de volta</h2>
            <p className="text-muted mb-4 subtitle-form">
              Entre com suas credenciais para continuar.
            </p>

            <form className="formLogin">
              <div className="mb-3">
                <label htmlFor="emailInput" className="form-label login-label">
                  E-mail Corporativo
                </label>
                <input
                  type="email"
                  className="form-control login-input"
                  id="emailInput"
                  placeholder="seu.nome@gm.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="senhaInput" className="form-label login-label d-flex justify-content-between">
                  Senha
                  <a href="#" className="login-forgot-link">Esqueceu a senha?</a>
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  id="senhaInput"
                  placeholder="••••••••"
                  required
                />
              </div>

              <button type="submit" className="btn w-100 login-btn-primary mt-3">
                Entrar
              </button>

              <div className="mt-4 text-center">
                <small>
                  Primeiro acesso?{" "}
                  <a href="#" className="login-link-register">
                    Configure sua conta aqui.
                  </a>
                </small>
              </div>
            </form>
          </div>

          <small className="login-copyright d-none d-lg-block">
            &copy; 2025 General Motors. Todos os direitos reservados.
          </small>
        </div>
      </div>
    </main>
  );
}