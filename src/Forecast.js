import React, { Component } from 'react';
import ForecastDay from './ForecastDay';
import './Forecast.css';

class Forecast extends React.Component {
  render() {
    const forecast = this.props.forecast;
    return (
      <section className="Forecast">
        <div className="section-title">10 Day Forecast</div>
        <ul>
          {forecast.map((day,index) => <ForecastDay 
          key={index} 
          eachDay={day} 
          />)}
        </ul>
      </section>
    );
  }
}

export default Forecast;
