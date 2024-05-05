import React from "react";
import Header from "./components/Header";

const DisplayWeather = ({ location, weather, temperature, windSpeed }) => {
  return (
    <div className="weather-container">
      <Header location={location} weather={weather} />
      <p>Location: {location}</p>
      <p>Weather: {weather}</p>
      <p>Temperature: {temperature}°C</p>
      <p>Wind Speed: {windSpeed} m/s</p>
    </div>
  );
};

export default DisplayWeather;
