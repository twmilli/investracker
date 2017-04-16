import React, { Component } from 'react';
import { ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend } from 'recharts';

import {
  CustomXAxis,
  CustomTooltip,
  CustomYAxisLabel
} from './ChartComponents';
const lineColors = [
  '#7fc97f',
  '#beaed4',
  '#fcc086',
  '#ffff99',
  '#386cb0',
  '#f0027f',
  '#bf5b17',
  '#666666',
  '#D81E5B',
  '#C200FB'
]
class StockChart extends Component {
  mapToArray(obj) {
    let i=0, arr=[];
    for (var ob in obj){
      arr[i++]=obj[ob];
    }
    return arr;
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.error !== nextProps.error){
      return false;
    }
    return true;
  }

  maxLengthOfArrays(arr){
    var max = -Infinity;
    var index = -1;
    arr.forEach(function(a, i){
      if (a.length>max) {
        max = a.length;
        index = i;
      }
    });
    return({ maxIndex: max , indexOfMax: index });
  }
  mapDataToGraph() {
    const { stockData } = this.props;
    let stockArr = this.mapToArray(stockData);
    if (stockArr.length <= 0){
      return;
    }
    const { maxIndex, indexOfMax } = this.maxLengthOfArrays(stockArr);

    let chartData = [];
    for (let i=0; i < maxIndex; i++) {
      let chartObject = {date: stockArr[indexOfMax][i].date};
      for (let j=0; j < stockArr.length; j++){
        const correctedIndex = i-(maxIndex - stockArr[j].length);
        if (correctedIndex >= 0){
          let symbol = stockArr[j][correctedIndex].symbol;
          chartObject[symbol] = stockArr[j][correctedIndex].close;
        }
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
        <ResponsiveContainer>
          <LineChart data={this.data}>
          <Tooltip content={<CustomTooltip external={external}/>} />
          <XAxis dataKey="date" tick={<CustomXAxis />} tickCount={7}/>
          <YAxis label={<CustomYAxisLabel label='Stock Price ($)'/>} tickCount={7} tick={{stroke: 'white', strokeWidth: 1}}/>
          <CartesianGrid stroke="white" vertical={false}/>
          <Legend verticalAlign='top'/>
            {this.renderLines()}
          </LineChart>
        </ResponsiveContainer>
    );
  }
}

export default StockChart;
