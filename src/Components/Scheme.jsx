import React from "react";
import styled from "styled-components";
import { ColorBox } from "./ColorBox";

export const Scheme = ({ ...props }) => {
  return (
    <Container dashboard={props.dashboard}>
      {props.scheme.colors.map(color => <ColorBox color={color} />)}
    </Container>
  );
};

const Container = styled.span`
  width: auto;
  height: auto;
  display:flex;
  border: 1px solid #232D50;
  flex: 1;
`
