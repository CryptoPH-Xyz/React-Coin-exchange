import React from 'react';
import logo from './logo.svg';
import styled from 'styled-components';

const Header = styled.header`
    background-color: #030011;
    min-height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: inherit;
    justify-content: flex-start;
    color: white;
`;

const H1 = styled.h1`
    font-size: 4rem;
    font-style: oblique;
    font-family: Georgia, 'Times New Roman', Times, serif;
`;

const P = styled.p`
    font-size: 1.5rem;
    font-style: normal;
    font-family: 'Lucida Sans Regul';
`;

const Image = styled.img`
    height: 20vmin;
    pointer-events: none;
`;

export default function Appheader() {
    return (
        <Header>
        <Image src={logo} alt="React logo" />
        <H1>
            Coin Exchange
        </H1>
        <P className = "App-subtitle">
            by: Xyz Fiegalan
        </P>
        </Header>
    );
}
