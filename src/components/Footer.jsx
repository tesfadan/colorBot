import React, { useContext } from "react";
import styled from "styled-components";
import { Color } from "../UI";
import github from "../Assets/Icons/github.svg";
import gear from "../Assets/Icons/gear.svg";
import home from "../Assets/Icons/home.svg";
import add from "../Assets/Icons/add.svg";
import { Link } from "react-router-dom";
import { ColorContext } from "../Context/Context";

export const Footer = ({ }) => {
  const { mode, setMode, schemes } = useContext(ColorContext);
  return (
    <Container>
      <span className="leftSide">
        {mode.dashboard ? <> <Link
          className="dashboard hover"
          to="/">
          <img src={home} alt="Home" />
        </Link>
          {
            schemes.length < 9 ?
              <Link
                className="dashboard hover"
                onClick={() => setMode({ ...mode, edit: true, new: true, index: schemes.length + 1, scheme: { colors: { 0: '#8d8d8d', 1: '#c3c3c3', 2: '#eaeaea' } } })}>
                <img src={add} alt="Add" />
              </Link> : null
          }
        </>
          :
          <Link
            className="dashboard hover"
            to="/dashboard">
            <img src={gear} alt="Dashboard" />
          </Link>
        }
      </span>

      <span className="socials">
        {/* <a
          className="tesfadan hover"
          href="https://tesfadan.com"
          rel="noopener noreferrer"
          target="_blank">
          <img src={globe} alt="to tesfadan.com" />
        </a> */}
        <a
          href="https://github.com/tesfadan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover">
          <img src={github} alt="Source Code" />
        </a>
      </span>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  bottom: 0px;
  padding: 28px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background-color: ${Color.offWhite};
  z-index: 10;
  .tesfadan {
    padding: 8px;
    color: ${Color.darkGray};
    margin-left: -6px;
  }
  .leftSide, .socials {
    display: flex;
  }
  .dashboard{
    margin-left:6px;
  }
  .leftSide{
    a{
      width: 36px;
      height: 36px;
      display: flex;
    }
    img{
      margin: auto;
  }
  }
  a {
    padding: 8px;
    margin-left: 6px;
    display: flex;
  }

  @media (max-width: 580px) {
    display: none;
    padding: 12px 20px;
    .socials a {
      margin-left: 12px;
    }
  }
`;
