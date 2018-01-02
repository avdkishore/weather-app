import React, { Component } from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

export default class Chart extends Component {
  average = (data, unit = '') => {
    const sum = data.reduce(((prev, curr) => prev + curr), 0);
    let avg = sum / data.length;

    avg = Number((avg * 100 / 100).toFixed(2));
    return avg;
  }

  render() {
    const { color, data, unit } = this.props;
    return (
      <div>
        <Sparklines height={120} width={180} data={data}>
          <SparklinesLine color={color} />
          <SparklinesReferenceLine type="avg" />
        </Sparklines>
        <div>{this.average(data, unit)}</div>
      </div>
    )
  }
}
