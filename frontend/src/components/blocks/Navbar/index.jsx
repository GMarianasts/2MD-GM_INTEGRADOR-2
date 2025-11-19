"use client";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";

export default function Navbar() {
  const { user, login, logout } = useAuth();

  return (
    <>
      <nav className="navbar bg-white border-bottom px-3 py-2 d-flex justify-content-between align-items-center">
        
        <div className="d-flex align-items-center">
          <img
            src="/General_Motors_(2021).svg.png" 
            alt="Logo"
            style={{ height: 35, width: 'auto' }}
          />
          <span
            className="ms-2 fw-semibold"
            style={{ color: "#0d3b66" }}
          >
            GM | Ignite
          </span>
        </div>
        <div className="d-flex align-items-center">
          
          {user ? (
            <>
              <button className="btn position-relative me-3 border-0">
                <i className="bi bi-bell fs-5 text-secondary"></i>
                <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle">
                  <span className="visually-hidden">Novas notificações</span>
                </span>
              </button>

              <div className="dropdown">
                <button
                  className="btn d-flex align-items-center dropdown-toggle border-0"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <div
                    className="rounded-circle d-flex justify-content-center align-items-center me-2 fw-bold shadow-sm"
                    style={{
                      width: 35,
                      height: 35,
                      backgroundColor: user.avatarColor || "#0d3b66",
                      color: "white",
                      fontSize: "0.9rem"
                    }}
                  >
                    {user.iniciais || "U"}
                  </div>
                  <span className="fw-medium text-dark d-none d-sm-block">
                    {user.nome}
                  </span>
                </button>

                <ul className="dropdown-menu dropdown-menu-end shadow border-0">
                  <li>
                    <h6 className="dropdown-header text-muted small">
                      {user.email}
                    </h6>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-person me-2"></i> Perfil
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      <i className="bi bi-gear me-2"></i> Configurações
                    </a>
                  </li>
                  <li><hr className="dropdown-divider" /></li>
                  <li>
                    <button 
                      className="dropdown-item text-danger" 
                      onClick={logout}
                    >
                      <i className="bi bi-box-arrow-right me-2"></i> Sair
                    </button>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <button 
              className="btn btn-primary btn-sm px-4 rounded-pill fw-semibold"
              onClick={() => login("admin@gm.com", "123")}
            >
              Simular Login
            </button>
          )}

        </div>
      </nav>
    </>
  );
}