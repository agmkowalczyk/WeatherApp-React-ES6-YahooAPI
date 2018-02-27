import React, { Component } from 'react';
import './Condition.css';

class Condition extends Component {
  render() {
    return (
      <div className="Condition">
        <div className="Condition-date">{this.props.condition.date.substr(0, 16)}</div>
        <div className="Condition-text">{this.props.condition.text}</div>
        <div className="Condition-temp"><i className="fa fa-thermometer-half small-icon"></i>{this.props.condition.temp}°</div>
      </div>
    );
  }
}

export default Condition;
