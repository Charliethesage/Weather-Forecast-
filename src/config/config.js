/**
 * @link https://home.openweathermap.org/api_keys
 */
const OPEN_WEATHER_MAP_API_KEY = "a5bb4718b30b6f58f58697997567fffa";


const config = {
  WEATHER_API_ENDPOINT: `https://api.openweathermap.org/data/2.5/weather?appid=${OPEN_WEATHER_MAP_API_KEY}&`,
  WEATHER_DATA_ENDPOINT: `https://api.openweathermap.org/data/2.5/onecall?appid=${OPEN_WEATHER_MAP_API_KEY}&exclude=minutely&units=metric&`,
};

export default config;
