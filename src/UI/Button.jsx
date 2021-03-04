import styled, { css } from 'styled-components';
import { Color } from './Color';


export const Button = styled.button`
    height: 50px;
    border-radius:2px;
    border: 0px;
    font-size:14px;
    color: ${Color.black};
    transition: 0.025s ease-in;

    &:hover{
    background-color: ${Color.offWhite2};
    }

    ${props => props.primary && css`
        background-color: ${Color.blue};
        color: #fff;

        &:hover{
        background-color: ${Color.blueDark};
        }
    `}
`

export const ButtonLike = styled.label`
    height: 50px;
    border-radius:2px;
    border: 0px;
    font-size:14px;
    color: ${Color.black};
    transition: 0.025s ease-in;
    background-color: #efefef;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover{
    background-color: ${Color.offWhite2};
    }

    ${props => props.primary && css`
        background-color: ${Color.blue};
        color: #fff;

        &:hover{
        background-color: ${Color.blueDark};
        }
    `}
`
