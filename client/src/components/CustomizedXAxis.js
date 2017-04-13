import React, { Component } from 'react';

class CustomizedXAxis extends Component {
  render() {
    const { x, y, payload } = this.props;
    const d = new Date(payload.value);
    const dString = `${d.getDate()}.${d.getMonth()}.${d.getFullYear()}`;
    return(
      <g transform={`translate(${x+5},${y})`}>
        <text x={0} y={0} dy={16} textAnchor="end" fill="#fffbfb" >{dString}</text>
      </g>
    )
  }
};

export default CustomizedXAxis;
