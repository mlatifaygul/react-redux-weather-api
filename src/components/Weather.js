/* eslint-disable jsx-a11y/alt-text */
import styles from "./Weather.module.css";
import images from "../app/img";
import { Button } from "semantic-ui-react";

const Weather = (props) => {
  const { weather } = props;
  if (!weather) {
    return <p>You need to allow location access....</p>;
  }

  const data = weather.list[0];
  const date = data.dt_txt.split("-");
  const descStyle = {
    fontSize: "18px", marginTop: "-25px" 
  }

  const getIcon = (no) => {
    return weather.list[no].weather[0].icon;
  };
  const getTemp = (no) => {
    return Math.round(weather.list[no].main.temp);
  };
  const getDate = (no) => {
    return weather.list[no].dt_txt.split("-")[2].split(" ")[1].slice(0, -3);
  };
  const getDesc = (no) => {
    return weather.list[no].weather[0].description;
  }
  const getIconLink = (no) => {
    return `http://openweathermap.org/img/wn/${getIcon(no)}@2x.png`
  }

  return (
    <div className={styles.container}>
      <img src={images.diego} className={styles.bg}></img>
      <div className={styles.navLink}></div>
      <div className={styles.inBox}>
        <div
          className={styles.weather}
          // style={{
          //   backgroundImage: `url(${images.bgCloud})`,
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundColor: 'rgba(1, 1, 1, 0.8)'
          // }}
        >
          <div
            className={styles.headerWeather}
            style={{
              backgroundImage: `url(${images.bgClyde})`, //   backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
            <h2
              style={{
                "margin-right": "20px",
                "margin-top": "3px",
              }}
            >
              {weather.city.name}-{weather.city.country}
            </h2>
            <p style={{ "margin-top": "10px" }}>
              {date[1]}/{date[2].split(" ")[1].slice(0, -3)}
            </p>
          </div>
          <div className={styles.bodyWeather}>
            <div>
              <p style={{ "font-size": "60px", "margin-top": "20px" }}>
                {Math.round(data.main.temp)} °C
              </p>
              <p style={{ "font-size": "20px", "margin-top": "-50px" }}>
                {data.weather[0].description}
              </p>
            </div>
            <div>
              <img src={images.cloud} className={styles.weatherImg}></img>
            </div>
          </div>
          <div className={styles.footerWeather}>
            <ul>
              <li>
                <img src={images.maxMin} className={styles.icons}></img>
                <pre>Max/Min: </pre>
                <p style={{ "margin-left": "135px" }}>
                  {" "}
                  {Math.round(data.main.temp_max)}/
                  {Math.round(data.main.temp_min)}°C
                </p>
              </li>
              <li>
                <img src={images.humidity} className={styles.icons}></img>
                <pre>Humidity: </pre>
                <p style={{ "margin-left": "145px" }}> {data.main.humidity}%</p>
              </li>
              <li>
                <img src={images.pressures} className={styles.icons}></img>
                <pre>Pressure: </pre>
                <p style={{ "margin-left": "125px" }}>
                  {data.main.pressure} mb
                </p>
              </li>
              <li>
                <img src={images.speed} className={styles.icons}></img>
                <pre>Speed: </pre>
                <p style={{ "margin-left": "140px" }}>{data.wind.speed} km/s</p>
              </li>
              <li>
                <img src={images.deg} className={styles.icons}></img>
                <pre>Deg: </pre>
                <p style={{ "margin-left": "175px" }}>{data.wind.deg}°</p>
              </li>
              <li>
                <img src={images.gust} className={styles.icons}></img>
                <pre>Gust: </pre>
                <p style={{ "margin-left": "165px" }}>{data.wind.gust}</p>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.weatherBox}>
          <div className={styles.hoursWeatherBox}>
            <h2 style={{"margin-right":"65vh"}}>Saatlik Tahmin</h2>
            <div className={styles.listSingle}>
              <div className={styles.singleHours}>
                <h3>Şimdi</h3>
                <p>{getTemp(0)}°C</p>
                <img
                  src={getIconLink(0)}
                  className={styles.weatherImg}
                ></img>
                <p style={descStyle}>{getDesc(0)}</p>
              </div>
              <div className={styles.singleHours}>
                <h3>
                  {getDate(1)}
                </h3>
                <p>{getTemp(1)}°C</p>
                <img
                  src={getIconLink(1)}
                  className={styles.weatherImg}
                ></img>
                <p style={descStyle}>{getDesc(1)}</p>
              </div>
              <div className={styles.singleHours}>
                <h3>
                  {getDate(2)}
                </h3>
                <p>{getTemp(2)}°C</p>
                <img
                  src={getIconLink(2)}
                  className={styles.weatherImg}
                ></img>
                <p style={descStyle}>{getDesc(2)}</p>
              </div>
              <div className={styles.singleHours}>
                <h3>
                  {getDate(3)}
                </h3>
                <p>{getTemp(3)}°C</p>
                <img
                  src={getIconLink(3)}
                  className={styles.weatherImg}
                ></img>
                <p style={descStyle}>{getDesc(3)}</p>
              </div>
              <div className={styles.singleHours} style={{"border-right":"none"}}>
                <h3>
                  {getDate(4)}
                </h3>
                <p>{getTemp(4)}°C</p>
                <img
                  src={getIconLink(4)}
                  className={styles.weatherImg}
                ></img>
                <p style={descStyle}>{getDesc(4)}</p>
              </div>
            </div>
            <button>Sonraki Saatler</button>
          </div>
          <div className={styles.daysWeatherBox}></div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
