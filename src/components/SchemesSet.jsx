import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { Scheme } from "./Scheme";
import { FetchSchemes } from "../Functions"
import { ColorContext } from "../Context/Context";

export const SchemesSet = () => {
  const { schemes, setSchemes, mode } = useContext(ColorContext);
  const [loaded, setLoaded] = useState(false);
  useEffect(() =>
    FetchSchemes({ setSchemes, setLoaded })
    , !loaded)
  return (
    <Container>
      {schemes.map((scheme, index) => <Scheme scheme={scheme} index={index} dashboard={mode.dashboard} />)}
    </Container>
  );
};

const Container = styled.div`
  align-self: center;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  @media (max-width: 840px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 420px) {
    margin-top: 85px;
    margin-bottom: 20px;
    grid-template-columns: 1fr;
  }

  button{
    height: 80px;
  }
`;
