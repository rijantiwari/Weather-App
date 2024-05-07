import React from "react";
import Header from "./components/Header";
import WeatherImage from "./components/WeatherImage";

const DisplayWeather = ({
  location,
  weather,
  temperature,
  windSpeed,
  weatherCode,
}) => {
  return (
    <div className="weather-container">
      <Header location={location} weather={weather} />
      <WeatherImage weatherCode={weatherCode} />
      <p>Location: {location}</p>
      <p>Weather: {weather}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default DisplayWeather;
