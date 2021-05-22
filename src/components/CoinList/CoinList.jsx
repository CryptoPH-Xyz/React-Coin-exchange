import React from 'react';
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

export default function CoinList(props) {
    return (
        <Table>
        <thead>
            <tr>
            <TitleDetails>Name</TitleDetails>
            <TitleDetails>Ticker</TitleDetails>
            <TitleDetails>Price</TitleDetails>
            {props.showBalance ?
                <TitleDetails>Balance</TitleDetails> : null}
            <TitleDetails>Actions</TitleDetails>
            </tr>
        </thead>
        <tbody>
            {
            props.coinData.map(({key, name, ticker, price, balance}) =>
                <Coin key={key}
                handleRefresh = {props.handleRefresh} 
                name={name} 
                ticker={ticker} 
                price={price}
                balance = {balance}
                showBalance={props.showBalance}
                />
                )
            }
        </tbody>
        </Table>
    )
}
