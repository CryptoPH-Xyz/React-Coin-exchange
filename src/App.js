import React from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: lightblue;
`;

const COIN_COUNT = 10;

class App extends React.Component {
  state = {
    balance: 10000,
    showBalance: false,
    coinData: [
      /*
      {
        name: 'Bitcoin',
        ticker: 'BTC',
        balance: 0.5,
        price: 60000
      },
      {
        name: 'Ethereum',
        ticker: 'ETH',
        balance: 2,
        price: 2500
      },
      {
        name: 'Cardano',
        ticker: 'ADA',
        balance: 3000,
        price: 1.5
      },
      {
        name: 'Binance',
        ticker: 'BNB',
        balance: 5,
        price: 600
      }
      */
    ]
  }

  componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, COIN_COUNT).map(coin => coin.id);
    const tickerUrl = 'https://api.coinpaprika.com/v1/tickers/';
    const promises = coinIds.map(id => axios.get(tickerUrl + id)); //key will fetch the endpoints for each coin
    const coinData = await Promise.all(promises);
    const coinPriceData = coinData.map(function(response) {
      const coin = response.data;
      return {
        key: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: parseFloat(Number(coin.quotes.USD.price).toFixed(4))
      }
    })
    this.setState({ coinData: coinPriceData })
  }


  handleRefresh = (valueChangeTicker) => {
    const newCoinData = this.state.coinData.map( function ( values ) {
      let newValues = { ...values };
      if( valueChangeTicker === values.ticker){
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newValues.price *= randomPercentage;
      }
      return newValues;

    });
    this.setState({ coinData: newCoinData })
  }

  handleBalance = () => {
    this.setState(function(oldState) {
      return{
        ...oldState,
        showBalance: !oldState.showBalance
      }
    })
  }

  render () {
    return (
      <>
      <Div className="App">
        <AppHeader />
        <AccountBalance amount = {this.state.balance} 
          showBalance={this.state.showBalance}
          handleBalance = {this.handleBalance}
        />
        <CoinList coinData={this.state.coinData} 
          handleRefresh={this.handleRefresh}
          showBalance={this.state.showBalance}
        /> 
      </Div>
      </>
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
