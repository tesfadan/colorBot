import React from "react";
import styled from "styled-components";
import { Color } from "../UI";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { Main } from "../Components/Main";
import { Copied } from "../Components/Copied";

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
