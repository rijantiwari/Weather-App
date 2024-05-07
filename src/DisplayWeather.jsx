import React from "react";
import Header from "./components/Header";
import WeatherImage from "./components/WeatherImage";

const DisplayWeather = ({
  location,
  weather,
  temperature,
  windSpeed,
  weatherCode,
  hourlyTemp,
}) => {
  const hourlyData = hourlyTemp;
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  let oneHourAgoIndex = currentHour - 1;
  let oneHourAfterIndex = currentHour + 1;

  if (oneHourAgoIndex < 0) {
    oneHourAgoIndex = 0;
  }
  if (oneHourAfterIndex >= hourlyData.length) {
    oneHourAfterIndex = hourlyData.length - 1;
  }
  const temperatureOneHourAgo = hourlyData[oneHourAgoIndex];
  const temperatureOneHourAfter = hourlyData[oneHourAfterIndex];

  return (
    <div className="weather-container">
      <Header location={location} weather={weather} />
      <WeatherImage weatherCode={weatherCode} />
      <div className="temperature-display">
        <p className="mainTemperature">{temperature} °C</p>
        <p className="hourlyTemperature">
          {temperatureOneHourAgo}°C (1h Ago) / {temperatureOneHourAfter}°C (1h
          After)
        </p>
      </div>

      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default DisplayWeather;
