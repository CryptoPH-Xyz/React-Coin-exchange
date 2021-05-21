import React, { Component } from 'react';
import Coin from '../Coin/Coin';
import styled from 'styled-components';

const TitleDetails = styled.th`
    border: 2px solid burlywood;
    width: 25vh;
    background-color: black;
    color: white;
`;

const Table = styled.table`
    margin: 20px auto 20px auto;
    display: inline-block;
    font-size: 1.5rem;
`;

export default class CoinList extends Component {
    render() {
        return (
            <Table>
            <thead>
                <tr>
                <TitleDetails>Name</TitleDetails>
                <TitleDetails>Ticker</TitleDetails>
                <TitleDetails>Price</TitleDetails>
                </tr>
            </thead>
            <tbody>
                {
                this.props.coinData.map(({name, ticker, price}) =>
                    <Coin key={ticker}
                    handleRefresh = {this.props.handleRefresh} 
                    name={name} 
                    ticker={ticker} 
                    price={price} />
                    )
                }
            </tbody>
            </Table>
        )
    }
}
