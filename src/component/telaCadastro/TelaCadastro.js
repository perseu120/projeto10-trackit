import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  function cadastro() {
    const body = {
      email,
      name: nome,
      image: foto,
      password: senha
    };

    const promise = axios.post(
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
      body
    );

    promise.then((response) => {
      console.log(response.data);
    });

    promise.catch((err) => {
      console.log(err);
    });
  }

  return (
    <Container>
      <img src={logo} alt="logotipo Trackit" />

      <Form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        ></input>
        <input
          placeholder="senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          type="password"
        ></input>
        <input
          placeholder="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          type="text"
        ></input>
        <input
          placeholder="foto"
          value={foto}
          onChange={(e) => setFoto(e.target.value)}
          type="text"
        ></input>

        <button onClick={() => cadastro()}>Cadastra</button>
      </Form>

      <Link to="/">
        <a href="#">já tem uma conta? faça login!</a>
      </Link>
    </Container>
  );
}

export default TelaCadastro;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
