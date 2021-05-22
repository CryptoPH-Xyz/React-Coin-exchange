import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section1 = styled.section`
    margin: auto;
    box-shadow: 2px 2px 7px 1px black;
    background-color: rgb(253, 239, 218);
    float: center;
    font-size: 1.5rem;
    box-sizing: content-box;
    font-weight: bold;
`;

export default function AccountBalance(props) {
    const buttonText = props.showBalance ? 'Hide Balance' : 'Show Balance';

    let balance = props.showBalance ?
    <>Current Balance is: ${props.amount}</>
    : null

    return (
        <Section1 className = "balance">
            {balance}
            <button onClick = {props.handleBalance}>{buttonText}</button>
        </Section1>
    );
}

AccountBalance.propTypes = {
    amount: PropTypes.number.isRequired
}