import axios from "axios";
import { useEffect, useState } from "react";
import Weather from './components/Weather'
import "semantic-ui-css/semantic.min.css";
import "./index.css";
const App = () => {
  const [weather, setWeather] = useState();

  const getWeatherData = async () => {
    //const key = process.env.REACT_APP_WEATHER_API_KEY;


    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=ANKARA&lang=tr&units=metric&appid=79d77bf409e84e6b3dd0b3ddcdff88da`
      );
      setWeather(data);
      
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };
  console.log(weather)

  useEffect(() => {
    getWeatherData();
  }, []);
 
  return (
    <div className="app">
      <Weather weather={weather}/>
    </div>
  );
};

export default App;
