import React from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RowDetails = styled.td`
    border: 2px solid burlywood;
    width: 25vh;
    background-color: white;
`;


export default function Coin(props) {

    const handleClick = (event) => {
    // Prevent the default action of submitting the form
        event.preventDefault();
        props.handleRefresh(props.ticker);

    }

    return (
    <tr>
        <RowDetails>{props.name}</RowDetails>
        <RowDetails>{props.ticker}</RowDetails>
        <RowDetails>${props.price}</RowDetails>
        {props.showBalance ?
            <RowDetails>{props.balance}</RowDetails> : null}
        <RowDetails>
            <form action = "#" method = "POST">
                <button onClick = {handleClick}>Refresh</button>
            </form>
        </RowDetails>
    </tr>
    )
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
