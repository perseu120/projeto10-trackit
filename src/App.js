import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TelaCadastro from "./component/telaCadastro/TelaCadastro.js";
import TelaHabitos from "./component/telaHabitos/TelaHabitos.js";
import TelaLogin from "./component/telaLogin/TelaLogin.js";
import TelaHoje from "./component/telaHoje/TelaHoje.js"
import UserContext from "./component/contexts/UseContext.js";

function App() {

  const [token, setToken] = useState(null);
  const [img, setImg] = useState(null);

  return (
    <UserContext.Provider value={{ token, setToken, img, setImg }}>
      
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TelaLogin />} />
            <Route path="/cadastro" element={<TelaCadastro />} />
            <Route path="/habito" element={<TelaHabitos />} />
            <Route path="/hoje" element={<TelaHoje />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </UserContext.Provider>
  );
}

const Container = styled.main`

  display:flex;
  align-items: center;
  flex-direction: column;
  background: #E5E5E5;
  height: 100vh;
`

export default App;
