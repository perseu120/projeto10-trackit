import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import TelaCadastro from "./component/telaCadastro/TelaCadastro.js";
import TelaLogin from "./component/telaLogin/TelaLogin.js";

function App() {
  return (
    <Container>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TelaLogin />} />
          <Route path="/cadastro" element={<TelaCadastro />} />
        </Routes>
      </BrowserRouter>
    </Container>
  );
}

const Container = styled.main`

  displey:flex;
  justify-content:center;
  align-item:center;
  felx-direction: column;
`

export default App;
