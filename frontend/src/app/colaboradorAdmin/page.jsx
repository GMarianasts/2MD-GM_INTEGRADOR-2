"use client";

import { useState } from "react";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import TabelaColaboradores from "../../components/colaboradoresTabela/colaboradoresTabela";
import "./colaborador.css";

export default function PaginaColaboradores() {
  const [showModal, setShowModal] = useState(false);

  const [formData, setFormData] = useState({
    nome: "", email: "", senha: "", cargo: "", departamento: "", unidade: "", nivelAcesso: "Colaborador"
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3001/api/usuarios", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("✅ Colaborador cadastrado com sucesso!");
        handleCloseModal();
        window.location.reload();
      } else {
        alert("❌ Erro: " + data.mensagem);
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão com o servidor.");
    }
  };

  return (
    <>
      <style>{`
        .modal-overlay { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background-color: rgba(0, 0, 0, 0.5); z-index: 1050; display: flex; align-items: center; justify-content: center; }
        .custom-modal { background: white; width: 95%; max-width: 1100px; border-radius: 8px; box-shadow: 0 5px 15px rgba(0,0,0,0.3); z-index: 1051; display: flex; flex-direction: column; max-height: 90vh; animation: fadeIn 0.3s ease; }
        .modal-body-scroll { overflow-y: auto; padding: 20px; flex: 1; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-20px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>

      <div className="container-fluid pagina-usuario">
        <div className="row g-0">

          <aside className="col-12 col-md-3 col-lg-2 bg-white border-end p-3 sidebar" style={{minHeight: '100vh'}}>
            <ul className="list-unstyled menu sticky-top">
              <li className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-house-door"></i><Link href={'dashboardAdmin'}><span>Dashboard</span></Link>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-grid"></i><Link href={'gerenciar_Treinamento_admin'}><span>Gerenciar Treinamentos</span></Link>
              </li>
              <li className="mb-3 d-flex align-items-center gap-2">
                <i className="bi bi-bar-chart"></i><Link href={'Relatorio'}><span>Relatório de Skill Gap</span></Link>
              </li>
              <li className="ativo d-flex align-items-center gap-2">
                <i className="bi bi-person"></i><span>Gerenciar Colaboradores</span>
              </li>
            </ul>
          </aside>

          <main className="col-12 col-md-9 px-4 py-4 bg-light">

            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h2 className="h4 fw-bold mb-1" style={{ color: "#0a2b6b" }}>Gerenciar Colaboradores</h2>
                    <p className="descricao text-muted mb-0">Administre os colaboradores e suas permissões</p>
                </div>

                <button className="btn text-white d-flex align-items-center gap-2 px-4 py-2 fw-semibold shadow-sm" 
                        style={{ backgroundColor: "#0a2b6b" }}
                        onClick={handleOpenModal}>
                    <i className="bi bi-person-plus fs-5"></i> Novo Colaborador
                </button>
            </div>

            <div className="row g-3 cards-wrapper mb-4">
              <div className="col-12">
                <div className="row g-3">
                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info azul">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso"><p className="titulo mb-1">Total de Colaboradores</p><p className="valor mb-0">5</p></div>
                        <div className="posicaoIcon"><div className="icon me-0"><i className="bi bi-bar-chart"></i></div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info laranja">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso"><p className="titulo mb-1">Colaboradores Ativos</p><p className="valor mb-0">4</p></div>
                        <div className="posicaoIcon"><div className="icon me-0"><i className="bi bi-people"></i></div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info verde">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso"><p className="titulo mb-1">Departamentos</p><p className="valor mb-0">8</p></div>
                        <div className="posicaoIcon"><div className="icon me-0"><i className="bi bi-award"></i></div></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-6 col-sm-6 col-md-3 px-2">
                    <div className="card card-info roxo">
                      <div className="card-body d-flex align-items-center">
                        <div className="progresso"><p className="titulo mb-1">Taxa média</p><p className="valor mb-0">83%</p></div>
                        <div className="posicaoIcon"><div className="icon mb-0"><i className="bi bi-graph-up-arrow"></i></div></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <TabelaColaboradores onNovoColaborador={handleOpenModal} />

          </main>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="custom-modal" onClick={(e) => e.stopPropagation()}>
            
            <div className="modal-header p-3 border-bottom d-flex justify-content-between align-items-center">
              <h5 className="modal-title fw-bold" style={{ color: "#0a2b6b" }}>Cadastrar Novo Colaborador</h5>
              <button type="button" className="btn-close" onClick={handleCloseModal}></button>
            </div>

            <div className="modal-body-scroll">
              <form className="row g-3">

                <h6 className="fw-bold mt-2">🧍 Informações Pessoais</h6>
                <hr />
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Nome Completo *</label>
                  <input type="text" name="nome" onChange={handleChange} className="form-control" placeholder="Ex: João Silva" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">CPF *</label>
                  <input type="text" className="form-control" placeholder="000.000.000-00" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">RG</label>
                  <input type="text" className="form-control" placeholder="00.000.000-0" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Data de Nascimento *</label>
                  <input type="date" className="form-control" />
                </div>

                <h6 className="fw-bold mt-3">📧 Informações de Contato & Acesso</h6>
                <hr />
                <div className="col-md-6">
                  <label className="form-label fw-semibold">E-mail Corporativo (Login) *</label>
                  <input type="email" name="email" onChange={handleChange} className="form-control" placeholder="nome.sobrenome@gm.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Senha Inicial *</label>
                  <input type="text" name="senha" onChange={handleChange} className="form-control" placeholder="Senha provisória" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Telefone</label>
                  <input type="text" className="form-control" placeholder="+55 11 98765-4321" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Endereço</label>
                  <input type="text" className="form-control" placeholder="Rua, Número..." />
                </div>

                <h6 className="fw-bold mt-3">🏢 Informações Profissionais</h6>
                <hr />
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Cargo *</label>
                  <input type="text" name="cargo" onChange={handleChange} className="form-control" placeholder="Ex: Engenheiro Sênior" />
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Departamento *</label>
                  <select name="departamento" onChange={handleChange} className="form-select">
                    <option value="">Selecione...</option>
                    <option value="Engenharia">Engenharia</option>
                    <option value="Produção">Produção</option>
                    <option value="RH">RH</option>
                    <option value="TI">TI</option>
                    <option value="Qualidade">Qualidade</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Unidade *</label>
                  <select name="unidade" onChange={handleChange} className="form-select">
                    <option value="">Selecione...</option>
                    <option value="São Caetano do Sul">São Caetano do Sul</option>
                    <option value="Gravatá">Gravatá</option>
                    <option value="São José dos Campos">São José dos Campos</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label fw-semibold">Perfil de Acesso *</label>
                  <select name="nivelAcesso" onChange={handleChange} className="form-select">
                    <option value="Colaborador">Colaborador</option>
                    <option value="Gestor">Gestor</option>
                    <option value="Administrador">Administrador</option>
                  </select>
                </div>

              </form>
            </div>

            <div className="modal-footer bg-light p-3 rounded-bottom">
              <button className="btn btn-secondary px-4" onClick={handleCloseModal}>Cancelar</button>
              <button className="btn btn-primary px-4" onClick={handleSave} style={{backgroundColor: '#0a2b6b', borderColor: '#0a2b6b'}}>
                Salvar Cadastro
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}