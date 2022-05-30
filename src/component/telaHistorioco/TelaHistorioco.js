import styled from "styled-components";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Topo from "../topo/Topo";


export default function TelaHistorico(){

    
    return(
        <>
            <Header />
            <Topo>
                <H1>Historico</H1>
            </Topo>
            <HistoricoUsuario>
                <Historico>Em breve você poderá ver o histórico dos seus hábitos aqui!</Historico>
            </HistoricoUsuario>
            <Footer />
        </>
    )
}
const HistoricoUsuario = styled.div`
padding: 100px 17px 0 17px;
display: flex;
flex-direction: column;
`
const H1 = styled.h1`
font-size: 23px;
color: #126Ba5;
margin-bottom: 17px;
margin-left: 10px;
`
const Historico = styled.p`
font-size: 18px;
color: #666666;
`
