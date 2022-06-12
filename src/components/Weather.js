/* eslint-disable jsx-a11y/alt-text */
import styles from "./Weather.module.css";
import images from "../app/img";
import { ThemeContext } from "../features/theme/theme";
import { useContext } from "react";
import "./toggle.css";

export const Weather = (props) => {
  const { weather } = props;

  const [{ theme, isDark }, toggleTheme] = useContext(ThemeContext);

  if (!weather) {
    return <p>You need to allow location access....</p>;
  }

  const data = weather.list[0];
  const date = data.dt_txt.split("-");
  const descStyle = {
    fontSize: "14px",
    marginTop: "-20px",
  };

  const getDayName = (no) => {
    var days = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    var d = new Date(weather.list[no].dt * 1000);
    var dayName = days[d.getDay()];
    return dayName;
  };

  const dayName = (no) => {
    return `${getDayName(no)} ${
      weather.list[no].dt_txt.split("-")[2].split(" ")[0]
    }`;
  };

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
  };
  const getIconLink = (no) => {
    return `http://openweathermap.org/img/wn/${getIcon(no)}@2x.png`;
  };
  const getTempMax = (no) => {
    return Math.round(weather.list[no].main.temp_max);
  };
  const getTempMin = (no) => {
    return Math.round(weather.list[no].main.temp_min);
  };

  const getLocation = `${weather.city.name}-${weather.city.country}`;

  return (
    <div className={styles.container}>
      <img src={images.diego} className={styles.bg}></img>
      {
        <div
          className={styles.navLink}
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
          // style={{
          //         backgroundImage: `url(${images.bgCloud})`, //   backgroundPosition: "center",
          //         backgroundSize: "cover",
          //         backgroundRepeat: "no-repeat",
          //       }}
        >
          <ul>
            <li
              style={{
                "margin-right": "20px",
                padding: "4px 0px",
                paddingLeft: "10px",
              }}
            >
              {getLocation}
              <p>(Sizin Konumunuz)</p>
            </li>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Menu1</li>
            <li>Menu1</li>
          </ul>
          <div className={styles.checkBox}>
            {/* <div className="text">It's a {isDark ? "Dark" : "Light"} theme</div>
            <button type="button" onClick={toggleTheme}>
              Toggle theme
            </button> */}
            <label for="checkbox">
              <input
                type="checkbox"
                name=""
                onClick={toggleTheme}
                id="checkbox"
              />
              <div class="toggle">
                <svg
                  id="graphic"
                  viewBox="0 0 132.29 132.29"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="sung">
                    <path
                      id="sun"
                      d="m99.722 66.146a33.576 33.576 0 0 1-33.576 33.576 33.576 33.576 0 0 1-33.576-33.576 33.576 33.576 0 0 1 33.576-33.576 33.576 33.576 0 0 1 33.576 33.576"
                    />
                    <g
                      id="sunshine"
                      transform="matrix(.92602 0 0 .92602 -10.774 -58.541)"
                    >
                      <path
                        transform="matrix(0 .58145 -.59067 0 145.26 159.26)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(-.41115 .41115 -.41766 -.41766 109.64 196.03)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(-.58145 0 0 -.59067 58.451 196.84)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(-.41115 -.41115 .41766 -.41766 21.685 161.22)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(0 -.58145 .59067 0 20.875 110.03)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(.41115 -.41115 .41766 .41766 56.495 73.269)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(.58145 0 0 .59067 107.68 72.459)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                      <path
                        transform="matrix(.41115 .41115 -.41766 .41766 144.45 108.08)"
                        d="m-19.4 32.282h-45.867l22.934-39.722z"
                      />
                    </g>
                  </g>
                  <path
                    id="croissant"
                    d="m55.461 34.281a33.587 33.587 0 0 0-22.874 31.832 33.587 33.587 0 0 0 33.587 33.587 33.587 33.587 0 0 0 30.441-19.395 31.187 31.187 0 0 1-17.268 5.2174 31.187 31.187 0 0 1-31.187-31.187 31.187 31.187 0 0 1 7.3022-20.053z"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>
      }
      <div
        className={styles.inBox}
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
      >
        <div
          className={styles.weather}
          // style={{
          //   backgroundImage: `url(${images.bgCloud})`,
          //   backgroundPosition: "center",
          //   backgroundSize: "cover",
          //   backgroundRepeat: "no-repeat",
          //   backgroundColor: 'rgba(1, 1, 1, 0.8)'
          // }}
          style={{ backgroundColor: theme.backgroundColor, color: theme.color }}
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
              {getLocation}
            </h2>
            <p style={{ "margin-top": "10px" }}>
              {dayName(0)}/{date[2].split(" ")[1].slice(0, -3)}
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
          <div
            className={styles.hoursWeatherBox}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <h2
              style={{
                "margin-right": "26.6em",
                fontSize: "22px",
                "margin-top": "2px",
              }}
            >
              Saatlik Tahmin
            </h2>
            <div className={styles.listSingle}>
              <div className={styles.singleHours}>
                <h3>Şimdi</h3>
                <p>{getTemp(0)}°C</p>
                <img src={getIconLink(0)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(0)}</p>
              </div>
              <div className={styles.singleHours}>
                <h3>{getDate(1)}</h3>
                <p>{getTemp(1)}°C</p>
                <img src={getIconLink(1)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(1)}</p>
              </div>
              <div className={styles.singleHours}>
                <h3>{getDate(2)}</h3>
                <p>{getTemp(2)}°C</p>
                <img src={getIconLink(2)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(2)}</p>
              </div>
              <div className={styles.singleHours}>
                <h3>{getDate(3)}</h3>
                <p>{getTemp(3)}°C</p>
                <img src={getIconLink(3)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(3)}</p>
              </div>
              <div
                className={styles.singleHours}
                style={{ "border-right": "none" }}
              >
                <h3>{getDate(4)}</h3>
                <p>{getTemp(4)}°C</p>
                <img src={getIconLink(4)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(4)}</p>
              </div>
            </div>
            <button>Sonraki Saatler</button>
          </div>
          <div
            className={styles.daysWeatherBox}
            style={{
              backgroundColor: theme.backgroundColor,
              color: theme.color,
            }}
          >
            <h2
              style={{
                "margin-right": "26.5em",
                fontSize: "22px",
                "margin-top": "2px",
              }}
            >
              Günlük Tahmin
            </h2>
            <div className={styles.listSingle}>
              <div className={styles.singleDay}>
                <h3 style={{ marginTop: "3px" }}>Bugün</h3>
                <p style={{ marginTop: "-15px" }}>{getTempMax(0)}°C</p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  {getTempMin(0)}°C
                </p>
                <img src={getIconLink(0)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(0)}</p>
              </div>
              <div className={styles.singleDay}>
                <h3 style={{ marginTop: "3px" }}>{dayName(8)}</h3>
                <p style={{ marginTop: "-15px" }}>{getTempMax(8)}°C</p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  {getTempMin(8)}°C
                </p>
                <img src={getIconLink(8)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(8)}</p>
              </div>
              <div className={styles.singleDay}>
                <h3 style={{ marginTop: "3px" }}>{dayName(16)}</h3>
                <p style={{ marginTop: "-15px" }}>{getTempMax(16)}°C</p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  {getTempMin(16)}°C
                </p>
                <img src={getIconLink(16)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(16)}</p>
              </div>
              <div className={styles.singleDay}>
                <h3 style={{ marginTop: "3px" }}>{dayName(24)}</h3>
                <p style={{ marginTop: "-15px" }}>{getTempMax(24)}°C</p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  {getTempMin(24)}°C
                </p>
                <img src={getIconLink(24)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(24)}</p>
              </div>
              <div
                className={styles.singleDay}
                style={{ "border-right": "none" }}
              >
                <h3 style={{ marginTop: "3px" }}>{dayName(32)}</h3>
                <p style={{ marginTop: "-15px" }}>{getTempMax(32)}°C</p>
                <p style={{ fontSize: "16px", marginTop: "4px" }}>
                  {getTempMin(32)}°C
                </p>
                <img src={getIconLink(32)} className={styles.weatherImg}></img>
                <p style={descStyle}>{getDesc(32)}</p>
              </div>
            </div>
            <button>Sonraki Saatler</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
