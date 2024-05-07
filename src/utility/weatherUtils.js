export const classifyWeather = (weatherCode) => {
  // Define weather conditions based on weather codes
  switch (weatherCode) {
    case 0:
      return "Clear sky";
    case 1:
    case 2:
    case 3:
      return "Partly cloudy";
    case 4:
      return "Mostly cloudy";
    case 45:
    case 48:
      return "Fog and rime fog";
    case 51:
    case 53:
    case 55:
      return "Light rain";
    case 61:
    case 63:
    case 65:
      return "Rain";
    case 71:
    case 73:
    case 75:
      return "Snowfall";
    case 77:
      return "Snow grains";
    case 80:
    case 81:
    case 82:
      return "Rain showers";
    case 85:
    case 86:
      return "Snow showers";
    case 95:
      return "Thunderstorm";
    case 96:
    case 99:
      return "Thunderstorm with hail";
    default:
      return "Unknown";
  }
};
