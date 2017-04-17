import React, { Component } from 'react';
import { connect } from 'react-redux';
import StockChart from './StockChart';
import StockList from './StockList';
import { getStockData, setDate } from '../actions';
import { timeOptions } from '../helpers';
import './Dashboard.css';
class Dashboard extends Component {
  componentWillMount() {
    this.updateStockData();
  }
  updateStockData() {
    const { list, from, to } = this.props;
    this.props.getStockData({
      symbols: list,
      from: from.toISOString(),
      to: to.toISOString()
    });
  }

  handleTimeButton(option){
    const { list, from, to } = this.props;
    this.props.setDate({
      symbols: list,
      from,
      to,
      option
    });
  }
  renderTimeButtons(){
    const optionButtons = timeOptions.map((option) => {
      const selectedClass = option === this.props.dateOption ? 'selected': '';
      return (
        <button key={option}
          className={"time-btn " + selectedClass}
          onClick={this.handleTimeButton.bind(this, option)}>
          {option}
        </button>)
    });
    return optionButtons;
  }
  render() {
    return (
      <div className="stock-chart-container">
        <p className="error">{this.props.error}</p>
        {this.renderTimeButtons()}
        <StockChart {...this.props}/>
        <StockList />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { stockData, list, from, to, error, dateOption } = state.stocks;
  return {
    stockData,
    list,
    from,
    to,
    error,
    dateOption
  };
};

export default connect(mapStateToProps, { getStockData, setDate })(Dashboard);
