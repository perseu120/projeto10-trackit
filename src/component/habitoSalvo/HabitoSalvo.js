import styled from "styled-components"
export default function HabitoSalvo() {
    return (
        <ContainerCriarHabito>
            <h4>Ler 1 capítulo de livro</h4>
            <BotoeSemana>
                <Botoes>D</Botoes>
                <Botoes>S</Botoes>
                <Botoes>T</Botoes>
                <Botoes>Q</Botoes>
                <Botoes>Q</Botoes>
                <Botoes>S</Botoes>
                <Botoes>S</Botoes>
            </BotoeSemana>

        </ContainerCriarHabito>
    )
}

const ContainerCriarHabito = styled.div`
 
    min-width: 340px;
    height: 91px;
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
    h4{
        diplay: flex;
        justify-content: start;
        width: 303px;
        height: 25px;
        
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        color: #666666;
    }
   
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