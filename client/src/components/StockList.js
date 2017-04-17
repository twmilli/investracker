import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStock, getStockData, stockTextUpdate, setError, removeStock } from '../actions';
import './StockList.css';

class StockList extends Component {

  handleRemoveButton(symbol){
    this.props.removeStock({ symbol });
  }
  handleAddButton() {
    const { stockText, from, to, list } = this.props;
    if (list.includes(stockText)) {
      this.props.setError('Stock code has already been added');
    } else{
      this.props.addStock({ symbol: stockText, from: from.toISOString(), to: to.toISOString() });
    }
  }
  render() {
    const stockSquares = this.props.list.map((symbol) => {
      return (
        <div key={symbol} className='stock-display'>
          <h2>{symbol}</h2>
          <button className='x-btn' onClick={this.handleRemoveButton.bind(this, symbol)}>x</button>
        </div>
      );
    });
    return (
      <div className='stock-display-container'>
        {stockSquares}
        <div className="stock-display add-stock">
          <p>Syncs in realtime across clients</p>
          <input
          type="text"
          placeholder='Stock code'
          value={this.props.stockText}
          onChange={e => this.props.stockTextUpdate({ value: e.target.value })}/>
          <button onClick={this.handleAddButton.bind(this)}>Add</button>
        </div>
      </div>);
  }
}

const mapStateToProps = (state) => {
  return ({
    stockData: state.stocks.stockData,
    list: state.stocks.list,
    from: state.stocks.from,
    to: state.stocks.to,
    stockText: state.stocks.stockText
  });
}
export default connect(mapStateToProps,
  { addStock, getStockData, stockTextUpdate, setError, removeStock })(StockList);
