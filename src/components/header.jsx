import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "../UI";
import logo from "../Assets/Icons/logo.svg";
import { Link } from "react-router-dom";
import { ColorContext } from "../Context/Context";

export const Header = ({ }) => {
  const { format, setFormat } = useContext(ColorContext);
  return (
    <Container>
      <Link to="/" className="logoContainer">
        <img src={logo} className="logo" alt="Logo" />
      </Link>
      <ul className="typeNav">
        <li>
          <input type="radio" id="hsl" value="hsl" name="format" checked={format === 'hsl'} onClick={e => setFormat(e.target.value)} />
          <label htmlFor="hsl" className="hover">
            Hsl
          </label>
        </li>
        <li>
          <input type="radio" id="rgb" value="rgb" name="format" checked={format === 'rgb'} onClick={e => setFormat(e.target.value)} />
          <label htmlFor="rgb" className="hover">
            Rgb
          </label>
        </li>
        <li>
          <input type="radio" id="hex" value="hex" name="format" checked={format === 'hex'} onClick={e => setFormat(e.target.value)} />
          <label htmlFor="hex" className="hover">
            Hex
          </label>
        </li>
      </ul>
    </Container>
  );
};

const Container = styled.div`
  height: 120px;
  background-color: ${Color.offWhite};
  /* border-bottom: 1px solid ${Color.offWhite2}; */
  display: flex;
  padding: 0px 40px;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 2;
  width: 100vw;
  .typeNav {
    display: flex;
    position: relative;
    /* right: -12px; */
    color: ${Color.darkGray};
  }
  li {
    margin-left: 6px;
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
    padding: 4px 12px;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
  }
  input {
    &:checked {
      & + label {
        background-color: ${Color.offWhite2};
        /* color:  ${Color.offWhite}; */
      }
    }
  }

  @media (max-width: 580px) {
    height: 65px;
    padding: 0px 20px;
    .logo {
      width: 30px;
    }
    li {
      margin-left: 2px;
    }
    label {
      font-size: 12px;
      padding: 6px 12px;
    }
  }
`;
