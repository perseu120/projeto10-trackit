import axios from "axios";
import { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import UserContext from "../contexts/UseContext";
import UserContextAddHabito from "../contexts/UseContextAddHabito"
export default function CriarHabito() {

    const { setHabito } = useContext(UserContextAddHabito);

    const [diasClicados, setDiasClicado] = useState([]);
    const [nomeHabito, setNomeHabito] = useState("");
    const { token } = useContext(UserContext);

    const body = {
        name: nomeHabito,
        days: diasClicados
    }

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    const diasSemana = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

    function salvarHabito() {

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", body, config);

        promise.then((response) => {
            console.log(response.data)
        })
        promise.catch((err) => {
            console.log(err);
        })
    }

    return (
        <ContainerCriarHabito>
            <input value={nomeHabito} onChange={(e) => { setNomeHabito(e.target.value) }} placeholder="Nome do hábito" />
            <BotoeSemana>
                {diasSemana.map((arr, index) => (<DiasSemana key={index} id={index} dia={arr} diasClicados={diasClicados} setDiasClicado={setDiasClicado} />))}
            </BotoeSemana>

            <BotoeAcao>
                <BotaoCancelar onClick={() => { setHabito(false) }} >cancelar</BotaoCancelar>

                <BotaoSalvar onClick={ () => { salvarHabito(); setHabito(false) } }>Salvar</BotaoSalvar>
            </BotoeAcao>
        </ContainerCriarHabito>
    )
}

function DiasSemana({ dia, id, diasClicados, setDiasClicado }) {

    function verificarClick(day) {
        setDiasClicado(diasClicados.includes(day) ? diasClicados.filter(d => d !== day) : [...diasClicados, day]);
    }
    const [isClicado, setIsClicado] = useState(false);

    return (
        <Botoes onClick={() => { setIsClicado(!isClicado); verificarClick(id) }} cor={isClicado ? "#CFCFCF" : "#FFFFFF"}>{dia}</Botoes>
    );


}
const Botoes = styled.div`

box-sizing: border-box;
width: 30px;
height: 30px;
background: ${props => props.cor};
border: 1px solid #D5D5D5;
border-radius: 5px;
display: flex;
justify-content: center;
align-items: center;
margin-right: 4px;
`

const ContainerCriarHabito = styled.div`
 
    min-width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 10px;

    input{

        box-sizing: border-box;
        width: 303px;
        height: 45px;
       
        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 5px;
        margin: 18px 18px 10px 18px
    }

`

const BotoeAcao = styled.div`
    display: flex;
    justify-content: end;
    width: 303px;
    
`
const BotoeSemana = styled.div`
    display: flex;
    justify-content: start;
    width: 303px;
    margin-bottom: 29px;
    
`
const BotaoSalvar = styled.button`
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-left: 23px;
    color: #FFFFFF;
`

const BotaoCancelar = styled.button`

    width: 69px;
    height: 35px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 15.976px;
    line-height: 20px;
    text-align: center;
    color: #52B6FF;
`