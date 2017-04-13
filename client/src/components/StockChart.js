import React, { Component } from 'react';
import { ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend } from 'recharts';
import { connect } from 'react-redux';
import './StockChart.css';
import { getStockData } from '../actions';
import CustomizedXAxis from './CustomizedXAxis';
import CustomTooltip from './CustomTooltip';

const lineColors = [
  '#4464AD',
  '#A4B0F5',
  '#F58F29',
  '#7D4600',
  '#36494E',
  '#4D5057',
  '#D81E5B',
  '#3A3335',
  '#D81E5B',
  '#C200FB'
]
class StockChart extends Component {
  componentWillMount() {
    const { list, from, to } = this.props;
    this.props.getStockData({
      symbols: list,
      from: from.toISOString(),
      to: to.toISOString()
    });
  }
  mapToArray(obj) {
    let i=0, arr=[];
    for (var ob in obj){
      arr[i++]=obj[ob];
    }
    return arr;
  }

  mapDataToGraph() {
    const { stockData } = this.props;
    let stockArr = this.mapToArray(stockData);
    if (stockArr.length <= 0){
      return;
    }


    let chartData = [];
    for (let i=0; i < stockArr[0].length; i++) {
      let chartObject = {date: stockArr[0][i].date};
      for (let j=0; j < stockArr.length; j++){
        let symbol = stockArr[j][i].symbol;
        chartObject[symbol] = stockArr[j][i].close;
      }
      chartData.push(chartObject);
    }
    this.data = chartData;
  }

  renderLines() {
    return (
      this.props.list.map((stock, key) => {
        return (
          <Line
          type="monotone"
          dot={false}
          key={stock}
          dataKey={stock}
          stroke={lineColors[key]} />
        );
      })
    );
  }
  render() {
    this.mapDataToGraph();
    return (
      <div className="stock-chart-container">
        <ResponsiveContainer>
          <LineChart data={this.data}>
          <Tooltip content={<CustomTooltip external={external}/>} />
          <XAxis dataKey="date" tick={<CustomizedXAxis />} />
          <YAxis tick= {{stroke: 'white', strokeWidth: 1}}/>
          <CartesianGrid stroke="white" vertical={false}/>
          <Legend verticalAlign='top'/>
            {this.renderLines()}
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { stockData, list, from, to } = state.stocks;
  return {
    stockData,
    list,
    from,
    to
  };
};

export default connect(mapStateToProps, {getStockData})(StockChart);
