import React, { useContext } from "react";
import styled, { css } from "styled-components";
import { ColorBox } from "./ColorBox";
import { Color } from "../UI";
import { ColorContext } from "../Context/Context";
import { DeleteScheme } from "../Functions";



export const Scheme = ({ ...props }) => {
  const { setMode, mode, setSchemes, schemes } = useContext(ColorContext)
  return (
    <Container dashboard={props.dashboard}>
      {props.scheme.colors.map(color => <ColorBox color={color} />)}
      {mode.dashboard ? <><span className="actions"><span className="action schemeID hover" onClick={() => setMode({ ...mode, edit: true, scheme: props.scheme, index: props.index, uid: props.scheme.uid })}>
        {/* <img src={edit} alt="Edit" /> */}
        Edit
      </span>
        <span className="action schemeIndex hover" onClick={() => DeleteScheme({ setSchemes, schemes, index: props.index, uid: props.scheme.uid })}>
          {/* <img src={trash} alt="Edit" /> */}
          Delete
        </span>
      </span>
      </>
        : null}

    </Container>
  );
};

const Container = styled.span`
  width: auto;
  height: auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  .action{
    cursor: pointer;
    color: ${Color.gray};
    padding: 4px 12px;
    border-radius:3px;
    &:hover{
      opacity: 1
    }
  }
  .schemeID{
    grid-column: 1/end;
    grid-row: 2;

  }
  .schemeIndex{
    grid-column-end: 4;
    text-align: right;
    grid-row: 2;
  }
  .actions{
    display: flex;
    /* margin: auto; */
    grid-column: 1/4;
    /* margin-top:8px; */
    padding: 8px;
    justify-content: space-between;
    width: 100%;
  }
  border: 1px solid #efeee9;

  transition: 0.15s ease-in;

  ${props => props.dashboard && css`
    cursor: pointer;
    background: ${Color.offWhite};
    border-radius: 4px;
    overflow: hidden;
    &:hover{
      box-shadow: 0px 8px 32px #0001;
    }
  `}
`
