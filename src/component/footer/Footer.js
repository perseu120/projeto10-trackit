import styled from "styled-components";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Footer({ quantidadeHabitoHoje, habitoHoje =[] }) {

 
    let quantidadeHabitoFeito = 0;

    habitoHoje.map((arr)=>(arr.done ? quantidadeHabitoFeito+=1 : ""));

    console.log(habitoHoje);
    return (
        <RodaPe>

            <Link to={"/habito"}>
                <p>
                    Habitos
                </p>
            </Link>


            <div>
                <Link to={"/hoje"}>
                    <CircularProgressbar
                        value={100 * quantidadeHabitoFeito/ quantidadeHabitoHoje}
                        text={quantidadeHabitoHoje ? `${Math.ceil(100 * quantidadeHabitoFeito/ quantidadeHabitoHoje)}%` : "0"}
                        background
                        backgroundPadding={6}
                        styles={buildStyles({
                            backgroundColor: "#52B6FF",
                            textColor: "#fff",
                            pathColor: "#fff",
                            trailColor: "transparent"
                        })}
                    />
                </Link>
            </div>

            <Link to={"/historico"}>
                <p>
                    Historico
                </p>
            </Link>

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

    div{
        width: 91px;
        height: 91px;
        margin-bottom: 50px;
    }
 
`