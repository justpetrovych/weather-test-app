export const getGreetingTime = (moment) => {
  let greeting = 'Hello';

  if (!moment || !moment.isValid()) { return greeting; }

  const splitAfternoon = 12;
  const splitEvening = 17;
  const currentHour = parseFloat(moment.format('HH'));

  if (currentHour >= splitAfternoon && currentHour <= splitEvening) {
    greeting = 'good afternoon';
  } else if (currentHour >= splitEvening) {
    greeting = 'good evening';
  } else {
    greeting = 'good morning';
  }

  return greeting;
};

export const getWeatherCondition = (code) => {
  switch (code) {
    case '01d':
    case '01n':
      return 'Sunny';

    case '02d':
    case '02n':
    case '03d':
    case '03n':
    case '04d':
    case '04n':
    case '50d':
    case '50n':
      return 'Cloudy';

    case '09d':
    case '09n':
      return 'Rainy';

    case '10d':
    case '10n':
      return 'SunShower';

    case '11d':
    case '11n':
      return 'ThunderStorm';

    case '13d':
    case '13n':
      return 'Flurries';

    default:
      return 'Cloudy';
  }
};

export const getBackgroundByCode = (code) => {
  switch (getWeatherCondition(code)) {
    case 'Sunny':
      return './images/sunny.jpg';

    case 'Cloudy':
      return './images/cloudy.jpg';

    case 'Rainy':
      return './images/rainy.jpg';

    case 'SunShower':
      return './images/sunshower.jpg';

    case 'ThunderStorm':
      return './images/thunderstorm.jpg';

    case 'Flurries':
      return './images/flurries.jpg';

    default:
      return './images/cloudy.jpg';
  }
};

export const getColorByCode = (code) => {
  switch (getWeatherCondition(code)) {
    case 'Sunny':
    case 'Cloudy':
    case 'Flurries':
      return '#0066cc';

    case 'Rainy':
    case 'SunShower':
    case 'ThunderStorm':
      return '#ffffff';

    default:
      return '#0066cc';
  }
};

