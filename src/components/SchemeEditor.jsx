import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Scheme } from "./Scheme";
import { Color, Button, ButtonLike } from "../UI";
import { ColorContext } from "../Context/Context";
import { SaveScheme } from "../Functions";
import { PaletteFromUrl } from "../Brain/Vibrant";

export const SchemeEditor = ({ }) => {
    const { setMode, mode, setSchemes, schemes } = useContext(ColorContext);
    const [colors, setColors] = useState([mode.scheme.colors[0], mode.scheme.colors[1], mode.scheme.colors[2]]);
    return <Container>
        <div className="editor">
            <ul className="scheme">
                <li><input type="color" id="color0" name="color0" value={colors[0]} onChange={e => setColors({ ...colors, [0]: e.target.value })} style={{ backgroundColor: ` ${Color.offWhite}` }} /></li>
                <li><input type="color" id="color1" name="color1" value={colors[1]} onChange={e => setColors({ ...colors, [1]: e.target.value })} style={{ backgroundColor: ` ${Color.offWhite}` }} /></li>
                <li><input type="color" id="color2" name="color2" value={colors[2]} onChange={e => setColors({ ...colors, [2]: e.target.value })} style={{ backgroundColor: ` ${Color.offWhite}` }} /></li>
            </ul>

            {mode.new ? <>
                <input className="fromURL" placeholder="Paste Image url" onChange={(e) => PaletteFromUrl({ url: e.target.value, setColors: setColors })} />
            </> : null}

            <div className="actions">
                <Button onClick={() => setMode({ ...mode, edit: false })}> Cancel</Button>
                <Button primary onClick={() => SaveScheme({ schemes, setSchemes, setMode, mode, index: mode.index, uid: mode.uid, colors })}>Save</Button>
            </div>

        </div>

    </Container>
}


const Container = styled.div`
    justify-content: center;
    align-self: center;
    display: flex;
    height: 100%;
    width: 100%;
    top: 0px;
    margin: auto;
    min-height: 100vh;
    z-index: 1;
    position: fixed;
    background-color: ${Color.offWhite};
    align-items: center;
    background-color: #00000098;
    backdrop-filter: blur(20px);
    z-index: 200;
    animation:load 0.20s;

    @keyframes load {
        0%{
            opacity:0;
        }

        100%{
            opacity:1;
        }
    }



    .fromImage{
        grid-column: 1/4;
        width: 100%;
        margin-bottom: 14px;
    }

    ul li{
        /* display: flex;
        position: fixed; */
        width: 92px;
        height: 92px;
        overflow: hidden;
        position:relative;
        /* border-radius: 8px; */
    }
    
    input{
        /* display: none; */
        position: absolute;
        width: 112px;
        height: 112px;
        border: unset;
        outline: unset;
        margin: unset;
        padding: unset;
        left: -6px;
        top: -6px;


    }

    .fromURL{
        height: 50px;
        width: 100%;
        margin-bottom: 10px;
        border: 1px solid ${Color.offWhite2};
        padding: 8px;
        position: relative;
        left: 0px;
        background-color: unset;
    }

    .scheme{
        display: flex;
        margin-bottom: 22px;
    }

    .editor{
        border: 1px solid ${Color.offWhite2};
        padding: 16px;
        border-radius: 4px;
        position: relative;
        top: -60px;
        box-shadow: 0px 20px 48px #00000010;
        background-color: ${Color.offWhite};
        animation: loadUp 0.05s ease-in;
    }

    @keyframes loadUp {
        0%{
            opacity:0;
            /* top: -40px; */
        }
        100%{
            opacity:1;
            /* top: -60px; */
        }
    }
    .actions{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
    }
    button{
        /* width: 130px; */
    }
`;
