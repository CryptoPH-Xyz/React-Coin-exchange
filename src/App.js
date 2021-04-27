import React from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';
import styled from 'styled-components';

const TitleDetails = styled.th`
    border: 2px solid burlywood;
    width: 25vh;
    background-color: black;
    color: white;
`;
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="React logo" />
        <h1 className = "App-title">
          Coin Exchange
        </h1>
        <p className = "App-subtitle">
          by: Xyz Fiegalan
        </p>
      </header>

      <AccountBalance amount = {10000} />

      <table className = "coin-table">
        <thead>
          <tr>
            <TitleDetails>Name</TitleDetails>
            <TitleDetails>Ticker</TitleDetails>
            <TitleDetails>Price</TitleDetails>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price ={60000}/>
          <Coin name="Ethereum" ticker="ETH" price ={2500}/>
          <Coin name="Cardano" ticker="ADA" price ={1.5}/>
          <Coin name="Binance" ticker="BNB" price = {600}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
