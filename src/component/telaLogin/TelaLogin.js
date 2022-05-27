import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../img/logo.png"

function TelaLogin() {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    return (
        <Container>
            <img src={logo} alt="logotipo Trackit" />

            <Form>
                <input placeholder="email" value={email} onChange={(e) => { setEmail(e.target.value) }} type="email"></input>
                <input placeholder="senha" value={senha} onChange={(e) => { setSenha(e.target.value) }} type="password"></input>

                <button>Entrar</button>
            </Form>
            <Link to="/cadastro">
                <a href="#">não tem uma conta? cadastre-se!</a>
            </Link>


        </Container>
    );
}

export default TelaLogin;

const Container = styled.div`

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Form = styled.form`

  display:flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`