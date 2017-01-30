import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import { getWeatherByPlace } from '../../api';
import View from '../../components/View';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: '',
    };
  }

  componentDidMount() {
    const { notify, cityName } = this.props;
    getWeatherByPlace(cityName)
      .then((response) => {
        this.setState({
          data: response.data,
          loading: false,
        });
      })
      .catch((error) => {
        notify.show('Error retrieving weather information', 'error', -1);
        console.log(error);
      });
  }

  render() {
    return (this.state.loading ?
      <Col lg={12} md={12} sm={12} xs={12} className="f-load-showbox">
        <div className="loader">
          <svg className="circular" viewBox="25 25 50 50">
            <circle
              className="path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth="2"
              strokeMiterlimit="10"
            />
          </svg>
        </div>
      </Col> :
      <View data={this.state.data} onDel={this.props.onDel} />
    );
  }
}

Card.propTypes = {
  cityName: PropTypes.string.isRequired,
  onDel: PropTypes.func.isRequired,
  notify: PropTypes.shape({
    show: PropTypes.func.isRequired, //eslint-disable-line react/no-unused-prop-types
    /* this is eslint bug https://github.com/yannickcr/eslint-plugin-react/issues/871 */
  }),
};

export default Card;
