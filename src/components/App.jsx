import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import UserContext from "../contexts/UserContext";

import TelaCadastro from "./Cadastro/Cadastro";
import TelaLogin from "./Login/Login";
import TelaHabitos from "./Habitos/Habitos";
import TelaHoje from "./Hoje/Hoje";
import TelaHistorico from "./Historico/Historico";

export default function App() {

  const [usuario, setUsuario] = useState(null)
  const [progresso, setProgresso] = useState(0)

  useEffect(() => {
    setUsuario(JSON.parse(window.localStorage.getItem('usuario')))
  }, [])

  return (

    <UserContext.Provider value={{ usuario, setUsuario, progresso, setProgresso }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin setUsuario={setUsuario} />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
          <Route path="/habitos" element={<TelaHabitos />} />
          <Route path="/hoje" element={<TelaHoje />} />
          <Route path="/historico" element={<TelaHistorico />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>


  )
}