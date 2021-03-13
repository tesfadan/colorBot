import React, { useContext } from 'react';
import styled from "styled-components";
import { ColorContext } from '../Context/Context';

export default function Format() {
    const { format, setFormat } = useContext(ColorContext);

    return (
        <Container className="typeNav">
            <li>
                <input type="radio" id="hsl" value="hsl" name="format" checked={format === 'hsl'} onClick={e => setFormat(e.target.value)} />
                <label htmlFor="hsl" className="hover">
                    Hsl
          </label>
            </li>
            <li>
                <input type="radio" id="rgb" value="rgb" name="format" checked={format === 'rgb'} onClick={e => setFormat(e.target.value)} />
                <label htmlFor="rgb" className="hover">
                    Rgb
          </label>
            </li>
            <li>
                <input type="radio" id="hex" value="hex" name="format" checked={format === 'hex'} onClick={e => setFormat(e.target.value)} />
                <label htmlFor="hex" className="hover">
                    Hex
          </label>
            </li>
        </Container>
    );
}
const Container = styled.ul`
    position:fixed;
    right: 32px;
    top: 32px;
    display: flex;
    z-index: 200;
    li {
        margin-left: 6px;
    }
    input {
        display: none;
    }
    label {
        cursor: pointer;
        padding: 4px 12px;
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
    }
    input {
        &:checked {
        & + label {
            color: #181D3D;
            background: #180C2420;
        }
        }
    }
`