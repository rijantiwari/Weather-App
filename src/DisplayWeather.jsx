import React from "react";
import Header from "./components/Header";
import WeatherImage from "./components/WeatherImage";
import RainPercentage from "./images/RainPercentage.svg";
import WindSpeed from "./images/windSpeed.svg";
import Humidity from "./images/humidity.svg";
import DailyWeather from "./components/DailyWeather";
const DisplayWeather = ({
  location,
  weather,
  temperature,
  windSpeed,
  weatherCode,
  hourlyTemp,
  humidity,
  rainfallProbability,
  daily,
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
    <div>
      <Header location={location} weather={weather} />
      <WeatherImage weatherCode={weatherCode} />
      <div className="temperature-display">
        <p className="mainTemperature">{temperature} °C</p>
        <p className="hourlyTemperature">
          {temperatureOneHourAgo}°C (1h Ago) / {temperatureOneHourAfter}°C (1h
          After)
        </p>
      </div>
      <div className="detailWeather">
        <div className="weatherItem">
          <img src={WindSpeed} alt="Wind Speed" />
          <p> {windSpeed} km/h</p>
        </div>
        <div className="weatherItem">
          <img src={RainPercentage} alt="Rain Percentage" />
          <p>{rainfallProbability}%</p>
        </div>
        <div className="weatherItem">
          <img src={Humidity} alt="Humidity" />
          <p>{humidity}%</p>
        </div>
      </div>
      <DailyWeather daily={daily} />
    </div>
  );
};

export default DisplayWeather;
