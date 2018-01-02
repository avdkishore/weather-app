import React, { Component } from 'react';
import { connect } from 'react-redux';

import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather = (data, i) => {
    const values = data.list.map(item => {
      return {
        temperature: item.main.temp, // in K
        pressure: item.main.pressure, // in hPa
        humidity: item.main.humidity // in %
      }
    });

    const { lon, lat } = data.city.coord;

    return (
      <tr key={`${data.city.id - i}`}>
        <td>
          {/* <GoogleMap lon={lon} lat={lat}/> */}
          {data.city.name}
        </td>
        <td>
          <Chart data={values.map(i => i.temperature - 272.15)} color={'red'} unit={'K'}/>
        </td>
        <td>
          <Chart data={values.map(i => i.pressure * 0.00098692326671601)} color={'blue'} unit={'hPa'}/>
        </td>
        <td>
          <Chart data={values.map(i => i.humidity)} color={'green'}/>
        </td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;C)</th>
            <th>Pressure (atm)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

const mapStateToProps = ({ weather }) => {
  return {
    weather
  }
}

export default connect(mapStateToProps)(WeatherList);
