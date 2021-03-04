import React from "react";
import styled from "styled-components";
import { Color } from "../UI";
import { Main } from "../Components/Main";

export const Home = () => {
  return (
    <Container>
      <Main />
    </Container>
  );
};

const Container = styled.div`
  background-color: ${Color.offWhite};
  min-height: 100vh;
`;
