import React from 'react';
import { getWeatherCondition } from '../../helpers';

export const Sunny = () => (
  <div className="icon sunny">
    <div className="sun">
      <div className="rays" />
    </div>
  </div>
);

export const Cloudy = () => (
  <div className="icon cloudy">
    <div className="cloud" />
    <div className="cloud" />
  </div>
);

export const Rainy = () => (
  <div className="icon rainy">
    <div className="cloud" />
    <div className="rain" />
  </div>
);

export const SunShower = () => (
  <div className="icon sun-shower">
    <div className="cloud" />
    <div className="sun">
      <div className="rays" />
    </div>
    <div className="rain" />
  </div>
);

export const ThunderStorm = () => (
  <div className="icon thunder-storm">
    <div className="cloud" />
    <div className="lightning">
      <div className="bolt" />
      <div className="bolt" />
    </div>
  </div>
);

export const Flurries = () => (
  <div className="icon flurries">
    <div className="cloud" />
    <div className="snow">
      <div className="flake" />
      <div className="flake" />
    </div>
  </div>
);

export const getIconByCode = (code) => {
  switch (getWeatherCondition(code)) {
    case 'Sunny':
      return <Sunny />;

    case 'Cloudy':
      return <Cloudy />;

    case 'Rainy':
      return <Rainy />;

    case 'SunShower':
      return <SunShower />;

    case 'ThunderStorm':
      return <ThunderStorm />;

    case 'Flurries':
      return <Flurries />;

    default:
      return <Cloudy />;
  }
};
