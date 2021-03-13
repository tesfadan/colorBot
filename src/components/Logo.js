import React from 'react';
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/Icons/logo.svg";

export default function Logo() {

    return (
        <Container to="/" className="logoContainer">
            <img src={logo} className="logo" alt="Logo" />
        </Container>
    );
};

const Container = styled(Link)`
    left: 32px;
    top: 32px;    
    z-index: 200;
    position:fixed;
`;
