import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RowDetails = styled.td`
    border: 2px solid burlywood;
    width: 25vh;
    background-color: white;
`;


export default class Coin extends Component {

    handleClick = (event) => {
    // Prevent the default action of submitting the form
        event.preventDefault();
        this.props.handleRefresh(this.props.ticker);

    }
    
    render() {
        return (
        <tr>
            <RowDetails>{this.props.name}</RowDetails>
            <RowDetails>{this.props.ticker}</RowDetails>
            <RowDetails>${this.props.price}</RowDetails>
            {this.props.showBalance ?
                <RowDetails>{this.props.balance}</RowDetails> : null}
            <RowDetails>
                <form action = "#" method = "POST">
                    <button onClick = {this.handleClick}>Refresh</button>
                </form>
            </RowDetails>
        </tr>
        )
    }
}

Coin.propTypes = {
    name: PropTypes.string.isRequired,
    ticker: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}
