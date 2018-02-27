import React, { Component } from 'react';
import './Location.css';

class Location extends Component {
  render() {
    return (
      <section className="Location">
        <div className="Location-city">{this.props.location.city}</div>
        <div className="Location-country">{this.props.location.country}</div>
      </section>
    );
  }
}

export default Location;
