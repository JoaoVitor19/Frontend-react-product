import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./Telas/Cadastro/Cadastro";
import Cadastro from "./Telas/TabelaCadastro/TabelaCadastro"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/tabela" element={<Cadastro />} />
      </Routes>
      </div>
 )
 }

export default App;