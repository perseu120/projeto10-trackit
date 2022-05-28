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
    height: 117px;
    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;
    justify-content: space-between;
 
`