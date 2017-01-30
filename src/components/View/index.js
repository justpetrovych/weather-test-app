import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';

class View extends Component {

  shouldComponentUpdate(newProps) {
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Col lg={12} md={12} sm={12} xs={12} className="city-view">
        <h3>{this.props.data.name}</h3>
        <p className="description">{this.props.data.weather[0].description}</p>
        <p>Temperature: <big>
          <strong>{Math.floor(this.props.data.main.temp - 273)}°C</strong>
        </big>
        </p>
        <p>Clouds: <big><strong>{this.props.data.clouds.all}%</strong></big></p>
        <p>Humidity: <big><strong>{this.props.data.main.humidity}%</strong></big></p>
        <p>Pressure: <big><strong>{this.props.data.main.pressure} hpa</strong></big></p>
      </Col>
    );
  }
}

View.propTypes = {
  data: PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    weather: React.PropTypes.array.isRequired,
    main: React.PropTypes.object.isRequired,
    clouds: React.PropTypes.object.isRequired,
  }),
};

export default View;
