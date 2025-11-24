"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [verificandoToken, setVerificandoToken] = useState(true); // 🔹 controla checagem do token

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setVerificandoToken(false); // sem token, liberar formulário
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split(".")[1]));

      if (payload.exp * 1000 < Date.now()) {
        localStorage.removeItem("token");
        localStorage.removeItem("usuario");
        setVerificandoToken(false);
        return;
      }

      // Se quiser redirecionar automático, pode descomentar:
      // if (payload.tipo === "admin") router.push("/dashboardAdmin");
      // else router.push("/paginaUsuario");

      setVerificandoToken(false); // liberar formulário mesmo com token válido
    } catch (err) {
      localStorage.removeItem("token");
      localStorage.removeItem("usuario");
      setVerificandoToken(false);
    }
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email || !senha) {
      alert("Preencha todos os campos!");
      return;
    }

    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha })
      });

      const json = await res.json();
      console.log("RESPOSTA DO BACKEND:", json);

      if (!json.sucesso) {
        alert(json.mensagem);
        return;
      }

      localStorage.setItem("token", json.dados.token);
      localStorage.setItem("usuario", JSON.stringify(json.dados.usuario));

      if (json.dados.usuario.nivel_acesso === "Admin") {
        window.location.href = "/dashboardAdmin";
      } else {
        window.location.href = "/paginaUsuario";
      }

    } catch (erro) {
      console.error("Erro no login:", erro);
      alert("Erro ao conectar ao servidor.");
    }
  }

  if (verificandoToken) {
    return (
      <main className="login-container d-flex justify-content-center align-items-center h-100">
        <p>Verificando sessão...</p>
      </main>
    );
  }

  return (
    <main className="login-container">
      <div className="row g-0 h-100">

        <div className="col-lg-6 d-none d-lg-flex flex-column justify-content-center login-fundo-esquerdo">
          <div className="login-conteudo-esquerdo">
            <h1 className="login-titulo mb-3">Acelere seu Desenvolvimento Profissional</h1>
            <p className="login-descricao mb-5">
              Plataforma integrada de gestão de treinamentos e desenvolvimento.
            </p>

            <ul className="ignite-feature-list">
              <li className="feature-item">Trilhas de Aprendizado Personalizadas</li>
              <li className="feature-item">Catálogo de Treinamentos</li>
              <li className="feature-item">Análise de Competências</li>
            </ul>
          </div>
        </div>

        <div className="col-lg-6 col-md-12 d-flex flex-column justify-content-center align-items-center login-form-side">
          <div className="login-form-wrapper">
            <h2 className="login-title mb-4">Bem-vindo de volta</h2>

            <form className="formLogin" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label login-label">E-mail Corporativo</label>
                <input
                  type="email"
                  className="form-control login-input"
                  placeholder="seu.nome@gm.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label login-label d-flex justify-content-between">
                  Senha
                  <a href="#" className="login-forgot-link">Esqueceu a senha?</a>
                </label>
                <input
                  type="password"
                  className="form-control login-input"
                  placeholder="••••••••"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  required
                />
              </div>

              <button type="submit" className="btn w-100 login-btn-primary mt-3">
                Entrar
              </button>
            </form>

          </div>
        </div>
      </div>
    </main>
  );
}
