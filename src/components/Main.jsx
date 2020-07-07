import React, { useContext } from "react";
import styled from "styled-components";
import { Scheme } from "./Scheme";
import { SchemesSet } from "./SchemesSet";
import { Copied } from "./Copied";
import { ColorContext } from "../Context/Context";
import { SchemeEditor } from "./SchemeEditor";

export const Main = () => {
  const { copied, mode } = useContext(ColorContext);

  return <Container>
    {mode.edit ? <SchemeEditor /> : null}
    <SchemesSet />
    {copied.state ? <Copied /> : null}
  </Container>
};

const Container = styled.div`
  justify-content: center;
  align-self: center;
  display: flex;
  height: 100%;
  width: 100%;
  top: 0px;
  margin: auto;
  min-height: 100vh;

`;
