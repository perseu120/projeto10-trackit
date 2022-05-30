import styled from "styled-components";
import Topo from "../topo/Topo.js";
import Header from "../header/Header.js"
import Footer from "../footer/Footer";
import UserContext from "../contexts/UseContext.js";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import CriarHabito from "../criarHabito/CriarHabito.js";
import HabitoSalvo from "../habitoSalvo/HabitoSalvo.js";
import UserContextAddHabito from "../contexts/UseContextAddHabito.js";



export default function TelaHabitos() {

    const { token, img } = useContext(UserContext);
    const [habito, setHabito] = useState(false);
    const [listaHabito, setListaHabito] = useState([]);

    const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }

    useEffect(() => {

        const promise = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", config);

        promise.then((response) => {
            setListaHabito(response.data)
        })

        promise.catch((err) => {
            console.log(err);
        })

    }, [])


    function addHabito() {

        if (habito === false) {

            return <></>

        } else {


            return <CriarHabito />
        }
    }

    return (
        <UserContextAddHabito.Provider value={{ setHabito }}>
            <Header img={img} />
            <Topo>
                <H3>Meus Habitos</H3>
                <Button onClick={() => { setHabito(!habito)}}><ion-icon name="add"></ion-icon></Button>
            </Topo>

            {addHabito()}
            <ContainerHabitos>

                {listaHabito.length === 0 ? <p>
                    você não tem nenhum habito cadastrado ainda
                    adicone um habito para começar a trakear!
                </p> : listaHabito.map((arr) => (

                    <HabitoSalvo name={arr.name} id={arr.id} dias={arr.days} />
                ))}
            </ContainerHabitos>
            <Footer />
        </UserContextAddHabito.Provider>
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
const H3 = styled.h3`
  
    width: 148px;
    height: 29px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    color: #126BA5;
    margin-left: 18px;
`

const Button = styled.button`
    width: 40px;
    height: 35px;
    background: #52B6FF;
    border-radius: 4.63636px;
    margin-right: 18px;

    ion-icon{
      
        width: 16px;
        height: 34px;
        text-align: center;
        color: #FFFFFF;

    }

`