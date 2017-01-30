import React, { Component, PropTypes } from 'react';
import { getUserLocationByIP, getWeatherByPlace } from '../../api';
import MainView from '../../components/MainView';

class CurrentCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      data: '',
    };
  }

  componentDidMount() {
    const notify = this.props.notify;
    getUserLocationByIP()
      .then((res) => {
        getWeatherByPlace(res.data.city)
          .then((response) => {
            notify.show(`The system has identified your city as ${res.data.city}`, 'success', 3000);
            this.setState({
              data: response.data,
              loading: false,
            });
          })
          .catch((error) => {
            notify.show('Error retrieving weather information', 'error', -1);
            console.log(error);
          });
      })
      .catch((error) => {
        notify.show('Error retrieving location information', 'error', -1);
        console.log(error);
      });
  }

  render() {
    return (this.state.loading ?
      <div className="load-showbox">
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
      </div> :
      <MainView data={this.state.data} />
    );
  }
}

CurrentCity.propTypes = {
  notify: PropTypes.shape({
    show: PropTypes.func.isRequired, //eslint-disable-line react/no-unused-prop-types
    /* this is eslint bug https://github.com/yannickcr/eslint-plugin-react/issues/871 */
  }),
};

export default CurrentCity;
