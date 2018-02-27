import React, { Component } from 'react';
import './ForecastDay.css';

class ForecastDay extends React.Component {
  convertDayNames(day) {
    switch (day) {
      case 'Mon': return 'Monday';
      case 'Tue': return 'Tuesday';
      case 'Wed': return 'Wednesday';
      case 'Thu': return 'Thursday';
      case 'Fri': return 'Friday';
      case 'Sat': return 'Saturday';
      case 'Sun': return 'Sunday';
    }
  }
  render() {
    return (
      <li className="Forecast-day">
        <span>{this.convertDayNames(this.props.eachDay.day)}</span>
        <span>{this.props.eachDay.high}°</span>
        <span>{this.props.eachDay.low}°</span>
      </li>
    );
  }
}

export default ForecastDay;
