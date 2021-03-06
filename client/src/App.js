import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Store from './Store';
import Dashboard from './components/Dashboard';
import './App.css';
import startSocket from './middleware';

startSocket(Store);

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div className="app">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
