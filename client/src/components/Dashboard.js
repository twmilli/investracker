import React, { Component } from 'react';
import { connect } from 'react-redux';
import StockChart from './StockChart';
import StockList from './StockList';
import { getStockData } from '../actions';
import './Dashboard.css';
class Dashboard extends Component {
  componentWillMount() {
    const { list, from, to } = this.props;
    this.props.getStockData({
      symbols: list,
      from: from.toISOString(),
      to: to.toISOString()
    });
  }

  render() {
    return (
      <div className="stock-chart-container">
        <p className="error">{this.props.error}</p>
        <StockChart {...this.props}/>
        <StockList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { stockData, list, from, to, error } = state.stocks;
  return {
    stockData,
    list,
    from,
    to,
    error
  };
};

export default connect(mapStateToProps, { getStockData })(Dashboard);
