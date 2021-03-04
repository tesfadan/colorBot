import React, { useContext, useState, useEffect } from 'react';
import { ColorContext } from '../Context/Context';
import { Color } from "../UI"
import styled, { css } from 'styled-components';
import { toHSL, toRGB } from '../Brain/Conversion';


export const Copied = () => {
    const { format, copied } = useContext(ColorContext);
    // console.log(net.run([HexToRgb(copied.color).r, HexToRgb(copied.color).g, HexToRgb(copied.color).b]));

    // useEffect(() => { setTimeout(() => setFadeOut(true), 2000) }, !fadeOut);

    return <Container color={copied.color} fadeOut={copied.hide} dark={copied.contrast.dark > copied.contrast.light}>
        <span>Copied <span className="bold">{
            format === 'hsl' ? toHSL(copied.color) : format === 'rgb' ? toRGB(copied.color) : copied.color
        }</span></span>
    </Container>
}


const Container = styled.span`
        display:flex;
        width: 260px;
        background-color: ${Color.darkGray};
        background-color: ${props => props.color};
        position: fixed;
        bottom: 40px;
        z-index: 200;
        left: 0px;
        right: 0px;
        margin: auto;
        padding: 20px;
        border-radius: 2px;
        animation: fadeup 0.075s ease-in-out;
        transition: 0.075s ease-in-out;
        color: ${props => props.dark ? 'white' : 'black'};
        span{
            margin: auto;
        };
        .bold{
            font-weight: 600;
        }
        ${props => props.fadeOut && css`
            bottom: 20px;
            opacity: 0;
        `}

        @keyframes fadeup {
            0%{
                bottom: 20px;
                opacity: 0;
            }
            100%{
                bottom: 40px;
                opacity: 1;
            }
        }
`