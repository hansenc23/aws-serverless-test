import { returnResponse } from './return';
import axios from 'axios';

export const myhandler = async (event) => {
  // // this is my code, this is my destiny\
  try {
    const { countryCode, postcode } = event.pathParameters;
    if (!countryCode || !postcode) {
      return returnResponse(400, {
        message: 'Invalid request body. Please input country code and postcode',
      });
    }
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?zip=${postcode},${countryCode}&appid=${process.env.OPEN_WEATHER_API_KEY}`,
    );
    if (res.status === 200) {
      const data = res.data;
      const response = {
        lon: data.coord.lon,
        lat: data.coord.lat,
        main: data.weather[0].main,
        description: data.weather[0].description,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        pressure: data.main.temp_min,
        humidity: data.main.humidity,
      };
      return returnResponse(200, { response });
    }
  } catch (error) {
    return returnResponse(error.response.status, error.response.data);
  }
};

export const handler = myhandler;
