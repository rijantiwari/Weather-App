import React from "react";
import sun from "../images/Sun.svg";
import mostlyCloudy from "../images/mostlyCloudy.svg";
import lightRain from "../images/lightRain.svg";
import heavyRain from "../images/HeavyRain.svg";
import thunderRain from "../images/thunderRain.svg";
import { classifyWeather } from "../utility/weatherUtils";
const WeatherImage = ({ weatherCode, className }) => {
  return (
    <div className={className}>
      {weatherCode >= 1 &&
        weatherCode <= 3 && ( // Render sun and cloud cover for partly cloudy
          <div>
            <img src={sun} alt="Sun" className="rotating-sun" />
            <div className="cloud-cover"></div>
          </div>
        )}
      {weatherCode === 0 && (
        <img src={sun} alt="Sun" className="rotating-sun" />
      )}{" "}
      {/* Clear sky */}
      {weatherCode > 3 &&
        weatherCode !== 0 && ( // Render other weather images
          <img
            src={
              weatherCode === 4
                ? mostlyCloudy
                : weatherCode === 5 || weatherCode === 6
                ? lightRain
                : weatherCode === 7 || weatherCode === 8
                ? heavyRain
                : thunderRain
            }
            alt={classifyWeather(weatherCode)}
            className="mostly-cloudy"
          />
        )}
    </div>
  );
};

export default WeatherImage;
