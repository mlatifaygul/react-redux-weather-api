import axios from "axios";
const key = process.env.REACT_APP_WEATHER_API_KEY;

export const getPersons = () => (dispatch) => {
  //dispatch({ type: "GET_PERSONS_START" });
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?q=almanya&lang=tr&units=metric&appid=${key}`
    )
    .then((res) => dispatch({ type: "GET_PERSONS_SUCCESS", payload: res.data }))
    .catch((err) => {
      dispatch({ type: "GET_PERSONS_ERROR", payload: err });
    });
};
