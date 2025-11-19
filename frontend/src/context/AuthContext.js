"use client";

import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, senha) => {
    console.log("Fazendo login simulado...");

    const mockUser = {
      id: 1,
      nome: "Thiago Menezes",
      email: email,
      cargo: "Administrador",
      iniciais: "TM",
      avatarColor: "#0a2b6b"
    };

    setUser(mockUser);
    localStorage.setItem("gm_user", JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gm_user");
    window.location.href = "/";
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("gm_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);