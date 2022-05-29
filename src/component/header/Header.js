import styled from 'styled-components';

export default function Header({img}) {

    return (
        <ContainerHeader>
            <h2>
                CINEFLEX
            </h2>

            <img src={img} alt='foto usuario' />
        </ContainerHeader>
    )
}

const ContainerHeader = styled.div`

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    padding: 10px 18px;

    h2{

        width: 97px;
        height: 49px;
        font-family: 'Playball';
        font-style: normal;
        font-weight: 400;
        font-size: 38.982px;
        line-height: 49px;
        color: #FFFFFF;
    }

    img{
        width: 51px;
        height: 51px;
        background: url(image.png);
        border-radius: 98.5px;
    }

`