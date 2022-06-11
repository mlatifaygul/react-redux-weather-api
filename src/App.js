import axios from "axios";
import { useEffect, useState } from "react";
import Weather from "./components/Weather";
import "./index.css";
const App = () => {
  const key = process.env.REACT_APP_WEATHER_API_KEY;
  const [tr, setTr] = useState();

  const getWeatherData = async () => {
    //const key = process.env.REACT_APP_WEATHER_API_KEY;

    try {
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=istanbul&lang=tr&units=metric&appid=${key}`
      );
      setTr(data);
    } catch {
      alert("Veri alinirken hata olustu.");
    }
  };
  

  useEffect(() => {
    getWeatherData();
  }, []);

  return (
    <div className="app">
      <Weather weather={tr} />
    </div>
  );
};

export default App;
