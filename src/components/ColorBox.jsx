import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ColorContext } from "../Context/Context";
import { CopyToClipboard } from "../Functions"
import { contrastBrain } from "../Brain";
import { toRGB, toHSL, toSmallRGB } from "../Brain/Conversion.jsx"

export const ColorBox = ({ color }) => {
  const { format, copied, setCopied } = useContext(ColorContext);
  const [time, setTime] = useState(5000)
  const copy = ({ color }) => {
    const contrast = contrastBrain.run([toSmallRGB(color)[0], toSmallRGB(color)[1], toSmallRGB(color)[2]]);
    setCopied({ color: color, state: true, hide: false, contrast });
    CopyToClipboard(format === 'hsl' ? toHSL(color) : format === 'rgb' ? toRGB(color) : color)
    setTimeout(() => setCopied({ color: color, state: true, hide: true, contrast, }), time);
  }

  return (
    <Container
      color={color}
      onClick={(e) => copy({ color })}
    />
  );
};

const Container = styled.span`
  width: 80px;
  height: 80px;
  background-color: ${props => props.color};
  cursor: pointer;
  transition: 0.15s ease-in-out;
  position: relative;
  top: 0px;

  @media (max-width: 580px) {
    width: 60px;
    height: 60px;
  }

  @media (max-width: 420px) {
    width: calc(100vw / 3 - 14px);
    height: calc(100vw / 3 - 14px);
  }
`;
