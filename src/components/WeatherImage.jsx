import React from "react";
import sun from "../images/Sun.svg";
import mostlyCloudy from "../images/mostlyCloudy.svg";
import lightRain from "../images/lightRain.svg";
import heavyRain from "../images/HeavyRain.svg";
import thunderRain from "../images/thunderRain.svg";

const WeatherImage = ({ weatherCode }) => {
  const classifyWeather = (weatherCode) => {
    // Define weather conditions based on weather codes
    if (weatherCode === 0) {
      return "Clear sky";
    } else if (weatherCode >= 1 && weatherCode <= 3) {
      return "Mainly clear, partly cloudy, and overcast";
    } else if (weatherCode === 45 || weatherCode === 48) {
      return "Fog and depositing rime fog";
    } else if (weatherCode === 51 || weatherCode === 53 || weatherCode === 55) {
      return "Drizzle: Light, moderate, and dense intensity";
    } else if (weatherCode === 56 || weatherCode === 57) {
      return "Freezing Drizzle: Light and dense intensity";
    } else if (weatherCode === 61 || weatherCode === 63 || weatherCode === 65) {
      return "Rain: Slight, moderate, and heavy intensity";
    } else if (weatherCode === 66 || weatherCode === 67) {
      return "Freezing Rain: Light and heavy intensity";
    } else if (weatherCode === 71 || weatherCode === 73 || weatherCode === 75) {
      return "Snow fall: Slight, moderate, and heavy intensity";
    } else if (weatherCode === 77) {
      return "Snow grains";
    } else if (weatherCode >= 80 && weatherCode <= 82) {
      return "Rain showers: Slight, moderate, and violent";
    } else if (weatherCode === 85 || weatherCode === 86) {
      return "Snow showers slight and heavy";
    } else if (weatherCode === 95) {
      return "Thunderstorm: Slight or moderate";
    } else if (weatherCode === 96 || weatherCode === 99) {
      return "Thunderstorm with slight and heavy hail";
    } else {
      return "Unknown";
    }
  };
  return (
    <div>
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
