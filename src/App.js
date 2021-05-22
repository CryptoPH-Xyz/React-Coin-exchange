import React, {useEffect, useState} from 'react';
import AccountBalance from './components/AccountBalance/AccountBalance';
import CoinList from './components/CoinList/CoinList';
import AppHeader from './components/AppHeader/AppHeader';
import styled from 'styled-components';
import axios from 'axios';

const Div = styled.div`
  text-align: center;
  background-color: lightblue;
`;

function App(props) {

  // const [balance, setBalance] = useState(10000); use for adding money purposes
  const balance = 50000;
  const [showBalance, setShowBalance] = useState(true);
  const [coinData, setCoinData] = useState([]);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    const coinIds = response.data.slice(0, 10).map(coin => coin.id);
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
    setCoinData(coinPriceData)
  }

  useEffect(function() {
    if(coinData.length === 0) {
      componentDidMount();
    }
  });

  const handleBalance = () => {
    setShowBalance(oldValue => !oldValue)
  }

  const handleRefresh = async (valueChangeId) => {
    const tickerUrl = `https://api.coinpaprika.com/v1/tickers/${valueChangeId}`;
    const response = await axios.get(tickerUrl);
    const newPrice = parseFloat(Number(response.data.quotes.USD.price).toFixed(4));
    const newCoinData = coinData.map( function ( values ) {
      let newValues = { ...values };
      if( valueChangeId === values.key){
        newValues.price *= newPrice;
      }
      return newValues;

    });
    setCoinData(newCoinData);
  }

    return (
      <>
      <Div className="App">
        <AppHeader />
        <AccountBalance amount = {balance} 
          showBalance={showBalance}
          handleBalance = {handleBalance}
        />
        <CoinList coinData={coinData} 
          handleRefresh={handleRefresh}
          showBalance={showBalance}
        /> 
      </Div>
      </>
    );
}

export default App;
