"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbar bg-white border-bottom px-3 py-2 d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <img
            src="General_Motors_(2021).svg.png"
            alt="Logo"
            style={{ height: 35, width: 35 }}
          />
          <span
            className="ms-2 fw-semibold text-primary"
            style={{ color: "#0d3b66" }}
          >
            GM | Ignite
          </span>
        </div>

        <div className="d-flex align-items-center">
          <button className="btn position-relative me-3">
            <img src="sino.png" alt="sino" style={{ height: 20, width: 20 }} />
          </button>

          <div className="dropdown">
            <button
              className="btn d-flex align-items-center dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              <div
                className="rounded-circle d-flex justify-content-center align-items-center me-2"
                style={{
                  width: 35,
                  height: 35,
                  backgroundColor: "#0d3b66",
                  color: "white"
                }}
              >
                JS
              </div>
              João Silva
            </button>

            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <h6 className="dropdown-header">Minha Conta</h6>
              </li>
              <li>
                <a className="dropdown-item" href="#">Perfil</a>
              </li>
              <li>
                <a className="dropdown-item" href="#">Configurações</a>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <h6 className="dropdown-header">Área Administrativa</h6>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li>
                <a className="dropdown-item text-danger" href="#">Sair</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    </>
  );
}
