import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import StockChart from './components/StockChart';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="app">
          <StockChart />
        </div>
      </Provider>
    );
  }
}

export default App;
