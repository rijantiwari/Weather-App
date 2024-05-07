export const classifyWeather = (weatherCode) => {
  switch (weatherCode) {
    case 0:
      return "It's a clear sky";
    case 1:
    case 2:
    case 3:
      return "It's Partly cloudy";
    case 4:
      return "It's Mostly cloudy";
    case 45:
    case 48:
      return "There's Fog and rime fog";
    case 51:
    case 53:
    case 55:
      return "There's light rain";
    case 61:
    case 63:
    case 65:
      return "It's raining";
    case 71:
    case 73:
    case 75:
      return "There's snowfall";
    case 77:
      return "There's Snow grains";
    case 80:
    case 81:
    case 82:
      return "There's rain showers";
    case 85:
    case 86:
      return "There's snow showers";
    case 95:
      return "There's a thunderstorm";
    case 96:
    case 99:
      return "There's a thunderstorm with hail";
    default:
      return "Unknown";
  }
};
