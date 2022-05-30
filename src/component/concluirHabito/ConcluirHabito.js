import { useState } from "react"
import styled from "styled-components"

export default function ConcluirHabito({id, name, done, sequencia, record }) {

    const [feito, setFeito] = useState(done);

    return (
        <ContainerConcluirHabito key={id}>
            <div>
                <h4>{name}</h4>
                <p>
                    Sequência atual: {sequencia} dias
                    Seu recorde: {record} dias
                </p>
            </div>

            <Icon  onClick={()=> {setFeito(!feito) ; console.log("kkkk")}} cor={ feito ? "#8FC549 ": "#EBEBEB" } >
              <ion-icon  name="checkbox"></ion-icon>  
            </Icon>
            

        </ContainerConcluirHabito>

    )

}

const ContainerConcluirHabito = styled.div`
 
    min-width: 340px;
    height: 91px;
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 10px;

    div{

        h4{
            width: 208px;
            height: 25px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 19.976px;
            line-height: 25px;
            color: #666666;
        }

        p{
            width: 146px;
            height: 32px;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 12.976px;
            line-height: 16px;
            color: #666666;
        }
    }
    
`

const Icon = styled.span`
    ion-icon{
        font-size: 69px;
        color: ${props => props.cor};
        border: 1px solid #E7E7E7;
        border-radius: 5px;
    }
`