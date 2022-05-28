import styled from 'styled-components';
import logo from "../../img/logo.png"

export default function Header(){

    return(
        <Container>
            <h2>
                CINEFLEX
            </h2>

            <img src={logo} alt=''/>
        </Container>
    )
}

const Container = styled.div`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;
    background: #C3CFD9;
    text-align:center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`