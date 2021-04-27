import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RowDetails = styled.td`
    border: 2px solid burlywood;
    width: 25vh;
    background-color: white;
`;


export default class Coin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            price: this.props.price
        }
        this.handleClick = this.handleClick.bind(this);
    }
 
    handleClick(event) {
    // Prevent the default action of submitting the form
        event.preventDefault();

        const randomPercentage = 0.995 + Math.random() * 0.01;
        this.setState( function(oldState) {
            return {
                price: oldState.price * randomPercentage
            };
        })
    }
    render() {
        return (
        <tr>
            <RowDetails>{this.props.name}</RowDetails>
            <RowDetails>{this.props.ticker}</RowDetails>
            <RowDetails>${this.state.price}</RowDetails>
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
