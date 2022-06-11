import axios from 'axios'
const key = process.env.REACT_APP_WEATHER_API_KEY;
export const  data  = await axios.get(
    `https://api.openweathermap.org/data/2.5/forecast?q=istanbul&lang=tr&units=metric&appid=${key}`
  );