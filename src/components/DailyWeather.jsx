import React from "react";
import WeatherImage from "./WeatherImage";
import cloudImage from "../images/cloud.svg"; // Import the cloud image

const DailyWeather = ({ daily }) => {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const today = new Date().getDay();
  const tomorrow = (today + 1) % 7;

  const forecast = daily.time.slice(1, 5).map((date, index) => {
    const dayOfWeek = (tomorrow + index) % 7;
    const dayName = index === 0 ? "TOM" : days[dayOfWeek];
    return {
      dayOfWeek: dayName,
      minTemp: daily.temperature_2m_min[index + 1],
      maxTemp: daily.temperature_2m_max[index + 1],
      weather_code: daily.weather_code[index + 1],
    };
  });

  return (
    <div className="weather-forecast-container">
      {forecast.map((day, index) => (
        <div key={index} className="weather-forecast-item">
          <div className="weather-image-container">
            <WeatherImage weatherCode={day.weather_code} />
            {day.weather_code >= 1 && day.weather_code <= 3 && (
              <div className="dailyCloud-cover">
                <img src={cloudImage} alt="Cloud" />
              </div>
            )}
          </div>
          <p className="weather-textTemp">
            {day.minTemp} /{day.maxTemp}
          </p>
          <p className="weather-text">{day.dayOfWeek}</p>
        </div>
      ))}
    </div>
  );
};

export default DailyWeather;
