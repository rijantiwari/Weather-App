import React from "react";
import sun from "../images/sun.png";
import mostlyCloudy from "../images/mostlyCloudy.svg";
import lightRain from "../images/light-rain.png";
import heavyRain from "../images/HeavyRain.svg";
import thunderStorm from "../images/thunderStorm.svg";
import snowFall from "../images/snowFall.png";
import rainShowers from "../images/rainShowers.png";
import { classifyWeather } from "../utility/weatherUtils";

const WeatherImage = ({ weatherCode, className }) => {
  return (
    <div className={className}>
      {weatherCode === 0 && (
        <img src={sun} alt="Sun" className="rotating-sun" />
      )}

      {weatherCode >= 1 && weatherCode <= 3 && (
        <div>
          <img src={sun} alt="Sun" className="rotating-sun" />
          <div className="cloud-cover"></div>
        </div>
      )}

      {weatherCode === 4 && (
        <img
          src={mostlyCloudy}
          className="mostly-cloudy"
          alt={classifyWeather(weatherCode)}
        />
      )}

      {(weatherCode === 51 || weatherCode === 53 || weatherCode === 55) && (
        <img
          src={lightRain}
          className="mostly-cloudy"
          alt={classifyWeather(weatherCode)}
        />
      )}
      {weatherCode === 45 ||
        (weatherCode === 48 && (
          <img
            src={mostlyCloudy}
            className="mostly-cloudy"
            alt={classifyWeather(weatherCode)}
          />
        ))}
      {(weatherCode === 61 || weatherCode === 63 || weatherCode === 65) && (
        <img
          src={heavyRain}
          className="mostly-cloudy"
          alt={classifyWeather(weatherCode)}
        />
      )}

      {(weatherCode === 71 ||
        weatherCode === 73 ||
        weatherCode === 75 ||
        weatherCode === 77 ||
        weatherCode === 86) && (
        <img
          src={snowFall}
          className="mostly-cloudy"
          alt={classifyWeather(weatherCode)}
        />
      )}
      {(weatherCode === 80 || weatherCode === 81 || weatherCode === 82) && (
        <img
          src={rainShowers}
          className="mostly-cloudy"
          alt={classifyWeather(weatherCode)}
        />
      )}
      {(weatherCode === 95 || weatherCode === 96 || weatherCode === 99) && (
        <img
          src={thunderStorm}
          className="mostly-cloudy"
          alt={classifyWeather(weatherCode)}
        />
      )}
    </div>
  );
};

export default WeatherImage;
