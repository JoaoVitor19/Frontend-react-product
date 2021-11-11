import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Form from "./Telas/Cadastro/Cadastro";
import TabelaCadastro from "./Telas/TabelaCadastro/TabelaCadastro"
import PorId from "./Telas/EncontrarPorId/PorId"
import TelaDelete from "./Telas/TelaDelete/TelaDelete"
import UpdateTela from "./Telas/TelaUpdate/UpdateTela"


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/tabela" element={<TabelaCadastro />} />
        <Route path="/porid" element={<PorId />} />
        <Route path="/delete" element={<TelaDelete />} />
        <Route path="/update" element={<UpdateTela />} />
      </Routes>
      </div>
 )
 }

export default App;