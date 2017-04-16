import React, { Component } from 'react';
import { formatDate } from '../../helpers';
import './CustomYAxis.css';
import './CustomTooltip.css';

class CustomXAxis extends Component {
  formatAxisLabel(date) {
    const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const month = months[date.getMonth()];
    return (
      `${month} '${date.getFullYear()}`
    );
  }

  render() {
    const { x, y, payload } = this.props;
    const d = new Date(payload.value);
    return(
      <g transform={`translate(${x},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="middle" fill="#fffbfb" >{this.formatAxisLabel(d)}</text>
      </g>
    )
  }
};
class CustomYAxisLabel extends Component {
  render() {
    const { height, label } = this.props;
    return(
      <g transform={`translate(${5},${height/2+10})`}>
        <text className='y-label' x={0} y={0} dy={10} transform="rotate(-90)" textAnchor="middle" fill="#fffbfb" >{label}</text>
      </g>
    )
  }
};

class CustomTooltip extends Component {
  renderStockLabels() {
    const { payload } = this.props;
    return (
      payload.map((stock) => {
          if (!stock.payload[stock.name]) {
            return null;
          }
          return (
            <div key={stock.name}>
              <div className="circle" style={{ backgroundColor: stock.stroke }}></div>
              <div className="data-label" >{`${stock.name}: ${stock.payload[stock.name]}`}</div>
            </div>
        );
      })
    )
  }
  render() {
    const { active } = this.props;

    if (active) {
      const { payload } = this.props;
      const d = new Date(payload[0].payload.date);

      return (
        <div className="custom-tooltip">
          <p className="label">{formatDate(d)}</p>
          {this.renderStockLabels()}
        </div>
      );
    }
    return null;
  }
}

export {
  CustomTooltip,
  CustomYAxisLabel,
  CustomXAxis
};
