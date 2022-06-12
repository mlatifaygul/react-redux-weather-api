import {data} from "../../data"
const INITIAL_STATE = {
  weatherList: data
}
export const reducer = (state = INITIAL_STATE, action) => {
  return state;
}




// const INITIAL_STATE = {
//   personList: [],
//   personDetail: {
//     id: "",
//     name: "",
//     phone: "",
//     mobile_phone: "",
//     address: "",
//     email: "",
//   },
//   personListErr: "",
//   personDetailErr: "",
// };

// export const reducer = (state = INITIAL_STATE, action) => {
//   switch (action.type) {
//     case "GET_PERSONS_SUCCESS":
//       return { ...state, personList: action.payload, personListErr: "" };
//     case "GET_PERSONS_ERROR":
//       return { ...state, personListErr: action.payload };
//     default:
//       return state;
//   }
// };
