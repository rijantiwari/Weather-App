import React, { useState, useEffect } from "react";
import axios from "axios";
import "./WeatherApp.css";
import { classifyWeather } from "./utility/weatherUtils";
import DisplayWeather from "./DisplayWeather";

const WeatherApp = ({ latitude, longitude, locationName }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Function to fetch weather data
    const fetchWeatherData = async () => {
      try {
        const url = "https://api.open-meteo.com/v1/forecast";
        const params = {
          latitude: latitude,
          longitude: longitude,
          hourly: ["temperature_2m", "weather_code", "windspeed_10m"],
          current: [
            "temperature_2m",
            "weather_code",
            "windspeed_10m",
            "relative_humidity_2m",
            "precipitation_probability",
          ],
          daily: ["weather_code", "temperature_2m_max", "temperature_2m_min"],
          timezone: "auto",
        };
        const response = await axios.get(url, { params });
        setWeatherData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    // Call the fetchWeatherData function
    fetchWeatherData();
  }, [latitude, longitude]);

  if (loading) return <div className="weather-container">Loading...</div>;
  if (error) return <div className="weather-container">Error: {error}</div>;

  const weatherDescription =
    weatherData && weatherData.current.weather_code
      ? classifyWeather(weatherData.current.weather_code)
      : "Unknown";

  console.log("DailyTempMax", weatherData.daily.temperature_2m_max);
  return (
    <DisplayWeather
      hourlyTemp={weatherData.hourly.temperature_2m}
      weatherCode={weatherData.current.weather_code}
      location={locationName}
      weather={weatherDescription}
      temperature={weatherData.current.temperature_2m}
      windSpeed={weatherData.current.windspeed_10m}
      humidity={weatherData.current.relative_humidity_2m}
      rainfallProbability={weatherData.current.precipitation_probability}
      daily={weatherData.daily}
    />
  );
};

export default WeatherApp;
