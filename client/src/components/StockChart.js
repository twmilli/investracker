import React, { Component } from 'react';
import { ResponsiveContainer, LineChart, Line } from 'recharts';
import { connect } from 'react-redux';
import './StockChart.css';
import { getStockData } from '../actions';


const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

class StockChart extends Component {
  componentWillMount() {
    this.props.getStockData({
      symbols:['NASDAQ:AAPL'],
      from: '2014-09-27T06:23:41.000Z',
      to: '2015-09-27T06:23:41.000Z'
    });
  }
  render() {
    console.log(this.props);
    return (
      <div className="stock-chart-container">
        <ResponsiveContainer>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {stocks: state.stocks}
};

export default connect(mapStateToProps, {getStockData})(StockChart);
