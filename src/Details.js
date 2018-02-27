import React, { Component } from 'react';
import './Details.css';

class Details extends React.Component {
  showIcoAtm(atmRising) {
    switch (atmRising) {
      case 1:
        return 'fa fa-long-arrow-alt-up fa-xs';
      case 2:
        return 'fa fa-long-arrow-alt-down fa-xs';
      default:
        return 'fa fa-long-arrow-alt-down fa-xs';
    }
  }

  render() {
    const convertPressure = (mbar => mbar * 0.0295301);
    return (
        <section className="Details">
          <div className="section-title">Details</div>
          <div className="DetailsList">
            <div><span>Humidity</span><span>{this.props.details.atmosphere.humidity}%</span></div>
            <div><span>Barometer</span>
                 <span><i className={this.showIcoAtm(this.props.details.atmosphere.rising)}>
                      </i> {convertPressure(this.props.details.atmosphere.pressure).toFixed()} hPa
                 </span>
            </div>
            <div><span>Wind</span><span>{Math.round(this.props.details.wind.speed)} km/h</span></div>
            <div><span>Sun & Moon</span>
                 <span><div><i className="fa fa-sun fa-sm"> </i> {this.props.details.astronomy.sunrise}</div>
                       <div><i className="fa fa-moon fa-sm Details-moon"></i> {this.props.details.astronomy.sunset}</div>
                 </span>
            </div>
          </div>
        </section>
      );
    }
}

export default Details;
