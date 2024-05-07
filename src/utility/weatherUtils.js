// weatherUtils.js

export const classifyWeather = (weatherCode) => {
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
