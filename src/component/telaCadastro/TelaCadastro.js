import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png";

function TelaCadastro() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [foto, setFoto] = useState("");

  const navigate = useNavigate();

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

      navigate("/");
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
        á tem uma conta? faça login!
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

  img{
      width: 180px;
      margin-top: 68px;
      margin-bottom: 33px;
  }

  a{
    width: 232px;
    height: 17px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 13.976px;
    line-height: 17px;
    text-align: center;
    text-decoration-line: underline;
    
    color: #52B6FF;
  }

`
const Form = styled.form`

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  input{
    box-sizing: border-box;
    width: 303px;
    height: 45px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    margin-bottom: 8px;
  }

  button{
    width: 303px;
    height: 45px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-bottom: 25px;
    
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 20.976px;
    line-height: 26px;
    text-align: center;

    color: #FFFFFF;

  }

`
