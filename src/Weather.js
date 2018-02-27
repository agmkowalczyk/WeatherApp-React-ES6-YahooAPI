import React, { Component } from 'react';
import Location  from './Location';
import Condition from './Condition';
import Details   from './Details';
import Forecast  from './Forecast';
import './Weather.css';

class Weather extends Component {
  render() {
    const data = this.props.data;
    if (data === null) {
      return <i className="fas fa-5x fa-spinner fa-spin Weather-spinner"></i>;
    } else {  
      return (
        <section className="Weather">
          <Location location={data.location} />
          <Condition condition={data.item.condition} />
          <Details details={data} />
          <Forecast forecast={data.item.forecast} />
        </section>
      );
    }
  }
}

export default Weather;
