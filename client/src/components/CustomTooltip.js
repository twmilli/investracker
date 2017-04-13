import React, { Component } from 'react';
import './CustomTooltip.css';

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];

class CustomTooltip extends Component {
  formatDate(date) {
    const day = days[date.getDay()];
    const month = months[date.getMonth()];
    return(`${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`);
  }
  renderStockLabels() {
    const { payload } = this.props;
    return (
      payload.map((stock) => {
        return (
          <div>
            <div className="circle" style={{ backgroundColor: stock.stroke }}></div>
            <div className="data-label" key={stock.name}>{`${stock.name}: ${stock.payload[stock.name]}`}</div>
          </div>
        )
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
          <p className="label">{this.formatDate(d)}</p>
          {this.renderStockLabels()}
        </div>
      );
    }
    return null;
  }
}

export default CustomTooltip;
