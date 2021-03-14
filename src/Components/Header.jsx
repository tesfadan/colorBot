import React from "react";
import styled from "styled-components";
import Format from "./FormatOptions";
import Logo from "./Logo";

export const Header = () => {
  return (
    <Container>
      <Logo />
      <Format />
    </Container>
  );
};

const Container = styled.div`
  background:red;
`;
