import styled from "styled-components";
import Topo from "../topo/Topo.js";
import Header from "../header/Header.js"
import Footer from "../footer/Footer";


export default function Habitos(){
    return(
        <>
            <Header />
            <Topo>
                <h3>Meus Habitos</h3>
                <button>+</button>
            </Topo>

            <Container>
                <p>
                    você não tem nenhum habito cadastrado ainda
                        adicone um habito para começar a trakear!
                </p>
            </Container>
            <Footer/>
        </>
    )
}

const Container = styled.div`
    
    display: flex;
    align-items: center;
    justify-content: space-between;
 
`