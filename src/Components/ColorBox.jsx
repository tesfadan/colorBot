import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Copy } from "../Assets/Icons";
import { contrastBrain } from "../Brain";
import { toHSL, toRGB, toSmallRGB } from "../Brain/Conversion.jsx";
import { ColorContext } from "../Context/Context";
import { CopyToClipboard } from "../Functions";

export const ColorBox = ({ color }) => {
  const { format } = useContext(ColorContext);
  const [copied, setCopied] = useState(false)
  var contrast = contrastBrain.run([toSmallRGB(color)[0], toSmallRGB(color)[1], toSmallRGB(color)[2]]);
  const copy = ({ color }) => {
    setCopied(true)
    CopyToClipboard(format === 'hsl' ? toHSL(color) : format === 'rgb' ? toRGB(color) : color)
  }
  const formated = (format === 'hsl' ? toHSL(color) : format === 'rgb' ? toRGB(color) : color);

  return (
    <Container
      color={color}
      onClick={(e) => copy({ color })}
      style={{ color: contrast.dark > contrast.light ? "#fffff0" : "#232D50" }}
    >
      {copied ?
        <div className="message"
          onAnimationEnd={() => setCopied(false)}
        >
          <h3>{formated}</h3>
        </div>
        : <Copy />}

    </Container>
  );
};

const Container = styled.span`
  width: 100%;
  height: 100%;
  background-color: ${props => props.color};
  cursor: pointer;
  position: relative;
  top: 0px;
  display:flex;
  justify-content:center;
  align-items: center;


  .copy{
    height: 24px;
    opacity: 0;
    transition: 0.12s ease-in;
    transform: scale(1.15);
  }

  @keyframes showClipboard {
    0%{
      opacity: 0;
    }
    100%{
      opacity: 1;
    }
  }

  &:hover, &:focus{
    .copy{
      animation: showClipboard 0.25s ease-in;
      opacity: 0.8;
      transform: scale(1);
    }
  }

  &:active{
    .copy{
      transform: scale(0.9);
    }
  }

  .message{
      font-size: 32px;
      animation: showMessage 2s ease;
      text-align: center;
      h3{
        margin:0px;
        font-size: 24px;
        font-weight:700;
        text-align: center;
      }
  }

  @keyframes showMessage {
    0%{
      opacity: 0;
      transform: scale(0.8);
    }
    10%{
      opacity:1
    }
    20%{
      transform: scale(1);
    }
    90%{
      opacity:1;
      transform: scale(1);
    }
    100%{
      opacity:0;
      transform: scale(0.6);
    }
  }

  @media (max-width: 640px){
    .message h3{
      font-size: 16px;
    }
  }

  @media (max-width: 340px){
    .message h3{
      font-size: 14px;
    }
  }
`;
