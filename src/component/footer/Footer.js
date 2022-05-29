import styled from "styled-components";

export default function Footer() {
    return (
        <RodaPe>

            <p>
                Habitos
            </p>

            <p>
                Historico
            </p>

        </RodaPe>
    )
}
 
const RodaPe = styled.footer`
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100hv;
    height: 70px;
    background: #FFFFFF;
    padding: 0px 36px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        
        width: 68px;
        height: 22px;
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;

    }
 
`