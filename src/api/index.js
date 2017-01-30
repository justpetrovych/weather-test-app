import axios from 'axios';
import config from '../config';

export const getUserLocationByIP = () => axios.get('http://ip-api.com/json');

export const getWeatherByPlace = name => axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=${config.owmKey}`);
