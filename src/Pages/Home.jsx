import React from "react";
import styled from "styled-components";
import { Scheme } from "../Components/Scheme";
import Schemes from "../Data/Schemes.json";

const Home = () => {
  return (
    <Container>
      {Schemes.map((scheme, index) => <Scheme scheme={scheme} index={index} />)}
    </Container>
  );
};

export default Home

const Container = styled.div`
  height: 100vh;
  display:flex;
  flex-flow: column;
`;
