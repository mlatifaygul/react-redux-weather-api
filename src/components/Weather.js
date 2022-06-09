import styles from "./Weather.module.css";
import "semantic-ui-css/semantic.min.css";
import { Icon, Table } from "semantic-ui-react";
import images from "../app/img";

const Weather = (props) => {
  const { weather } = props;
  if (!weather) {
    return <p>You need to allow location access....</p>;
  }

  const date = weather.list[0].dt_txt.split("-");

  return (
    <div className={styles.container}>
      <img src={images.diego} className={styles.bg}></img>
      <div className={styles.navLink}></div>
      <div className={styles.inBox}>
        <div className={styles.weather}>
          <div className={styles.headerWeather}>
            <h2 style={{ "margin-right": "20px" }}>
              {weather.city.name}-{weather.city.country}
            </h2>
            <p>
              {date[1]}.{date[2].slice(0, -3)}
            </p>
          </div>
          <div className={styles.bodyWeather}>
            <div>
              <p style={{ "font-size": "60px", "margin-top": "20px" }}>
                {Math.round(weather.list[0].main.temp)} °C
              </p>
              <p style={{ "font-size": "20px", "margin-top": "-50px" }}>
                {weather.list[0].weather[0].description}
              </p>
            </div>
            <div>
              <img src={images.cloud} className={styles.weatherImg}></img>
            </div>
          </div>
          <div className={styles.footerWeather}>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Status</Table.HeaderCell>
                  <Table.HeaderCell>Notes</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>No Name Specified</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
                <Table.Row error>
                  <Table.Cell>Jimmy</Table.Cell>
                  <Table.Cell>Cannot pull data</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jamie</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>
                  <Table.Cell error>
                    <Icon name="attention" />
                    Classified
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>Jill</Table.Cell>
                  <Table.Cell>Approved</Table.Cell>
                  <Table.Cell>None</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </div>
        </div>
        <div className={styles.weatherBox}>
          <div className={styles.hoursWeatherBox}></div>
          <div className={styles.daysWeatherBox}></div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
