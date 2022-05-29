import { useContext } from "react"
import styled from "styled-components"
import UserContextAddHabito from "../contexts/UseContextAddHabito"
export default function CriarHabito() {

    const {setHabito} = useContext(UserContextAddHabito)

    

    return (
        <ContainerCriarHabito>
            <input placeholder="Nome do hábito" />
            <BotoeSemana>
                <Botoes>D</Botoes>
                <Botoes>S</Botoes>
                <Botoes>T</Botoes>
                <Botoes>Q</Botoes>
                <Botoes>Q</Botoes>
                <Botoes>S</Botoes>
                <Botoes>S</Botoes>
            </BotoeSemana>

            <BotoeAcao>
                <BotaoCancelar onClick={()=>{setHabito(false)}} >cancelar</BotaoCancelar>
                <BotaoSalvar>Salvar</BotaoSalvar>
            </BotoeAcao>
        </ContainerCriarHabito>
    )
}

const ContainerCriarHabito = styled.div`
 
    min-width: 340px;
    height: 180px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

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
const Botoes = styled.div`

    box-sizing: border-box;
    width: 30px;
    height: 30px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 4px;
    
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