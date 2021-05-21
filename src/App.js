import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';

const Div = styled.div`
  text-align: center;
  background-color: lightblue;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 10000,
      coinData: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 60000
        },
        {
          name: 'Ethereum',
          ticker: 'ETH',
          price: 2500
        },
        {
          name: 'Cardano',
          ticker: 'ADA',
          price: 1.5
        },
        {
          name: 'Binance',
          ticker: 'BNB',
          price: 600
        }
      ]
    }
    this.handleRefresh = this.handleRefresh.bind(this);
  }

  handleRefresh(valueChangeTicker){
    const newCoinData = this.state.coinData.map( function ({ticker, name, price}) {
      let newPrice = price;
      if( valueChangeTicker === ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = newPrice * randomPercentage;
      }
      return {
        ticker,
        name,
        price: newPrice
      }
    });
    this.setState({ coinData: newCoinData })
  }
  render () {
    return (
      <Div className="App">
        <AppHeader />
        <AccountBalance amount = {this.state.balance} />
        <CoinList coinData={this.state.coinData} handleRefresh={this.handleRefresh}/> 
      </Div>
    );
  }
}

/*
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
*/

export default App;
