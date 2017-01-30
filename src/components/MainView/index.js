import React, { Component, PropTypes } from 'react';
import moment from 'moment';
import { Col } from 'react-bootstrap';
import { getGreetingTime, getBackgroundByCode, getColorByCode } from '../../helpers';
import { getIconByCode } from '../../components/WeatherIcons';

class MainView extends Component {

  shouldComponentUpdate(newProps) {
    if (newProps.data === this.props.data) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <Col lg={12} md={12} sm={12} xs={12} className="current-city">
        <div className="col-xs-12 col-sm-4 col-md-4 curr-weather">
          <div className="day">{moment().format('dddd')}</div>
          {getIconByCode(this.props.data.weather[0].icon)}
          <div className="description">{this.props.data.weather[0].description}</div>
          <div className="info">
            <div className="item col-xs-3 col-sm-6 col-md-3">
              <i className="wi wi-thermometer" /> <br />
              <span>{Math.floor(this.props.data.main.temp - 273)}</span>
              <i className="wi wi-celsius units" />
            </div>
            <div className="item col-xs-3 col-sm-6 col-md-3">
              <i className="wi wi-cloudy" /> <br />
              <span>{this.props.data.clouds.all}%</span>
            </div>
            <div className="item col-xs-3 col-sm-6 col-md-3">
              <i className="wi wi-humidity" /> <br />
              <span>{this.props.data.main.humidity}%</span>
            </div>
            <div className="item col-xs-3 col-sm-6 col-md-3">
              <i className="wi wi-barometer" /> <br />
              <span>{this.props.data.main.pressure}hpa</span>
            </div>
          </div>
        </div>
        <div
          className="col-xs-12 col-sm-8 col-md-8 curr-bg"
          style={{
            background: `url(${getBackgroundByCode(this.props.data.weather[0].icon)})`,
            color: getColorByCode(this.props.data.weather[0].icon),
            backgroundSize: 'cover' }}
        >
          <div className="greeting">{getGreetingTime(moment())}</div>
          <div className="place">{this.props.data.name}</div>
        </div>
      </Col>
    );
  }
}

MainView.propTypes = {
  data: PropTypes.shape({
    name: React.PropTypes.string.isRequired,
    weather: React.PropTypes.array.isRequired,
    main: React.PropTypes.object.isRequired,
    clouds: React.PropTypes.object.isRequired,
  }),
};

export default MainView;
