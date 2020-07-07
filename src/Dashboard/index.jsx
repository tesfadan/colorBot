import React, { useContext } from "react";
import styled from "styled-components";
import { ColorContext } from "../Context/Context";

export const Dashboard = () => {
  const { mode, setMode } = useContext(ColorContext);
  if (!mode.dashboard) { setMode({ ...mode, dashboard: true }); }
  return null;
};

export const Container = styled.div`
      justify-self:center;
      padding: 40px;
      padding-top:160px;
      display: flex;

      div{
        max-width: 1200px;
        margin: auto;
      }

      input{
        height: 60px;
        width: 60px;
        border: 0px;
        outline: 0px;
        padding: unset;
        margin: unset;
        background-color: unset;
      }
`;
