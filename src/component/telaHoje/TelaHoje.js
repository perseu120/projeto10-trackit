import styled from "styled-components";
import Topo from "../topo/Topo.js";
import Header from "../header/Header.js"
import Footer from "../footer/Footer";
import UserContext from "../contexts/UseContext.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import UserContextAddHabito from "../contexts/UseContextAddHabito.js";
import ConcluirHabito from "../concluirHabito/ConcluirHabito.js";



export default function TelaHabitos() {

    const { token, img } = useContext(UserContext);
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const [habitoHoje, setHabitoHoje] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promise = axios.get(URL, config);

        promise.then((response) => {
            console.log(response.data);
            setHabitoHoje(response.data);
        })

        promise.catch((err) => {
            console.log(err);
        })

    }, [])




    return (
        <>
            <Header img={img} />
            <Topo>

                <Div>
                    <H3>Segunda, 17/05</H3>
                    <H4>Nenhum hábito concluído ainda</H4>
                </Div>

            </Topo>

            <ContainerHabitos>
            
            {habitoHoje.map((arr)=>( <ConcluirHabito key={arr.id} id={arr.id} name={arr.name} done={arr.done} sequencia={arr.currentSequence} record={arr.highestSequence} /> ))}
                
            </ContainerHabitos>
            <Footer quantidadeHabitoHoje ={habitoHoje.length} />
        </>
    )
}

const ContainerHabitos = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0px 18px;
    

    p{
        width: 338px;
        height: 74px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        color: #666666;
    }
 
`
const Div = styled.div`
    display: block;
`
const H3 = styled.h3`

    width: 172px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;

`
const H4 = styled.h4`

    width: 278px;
    height: 22px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;
    
`