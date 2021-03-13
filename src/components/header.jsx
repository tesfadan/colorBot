import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../Context/Context";
import Format from "./FormatOptions";
import Logo from "./Logo";

export const Header = ({ }) => {
  const { format, setFormat } = useContext(ColorContext);
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
