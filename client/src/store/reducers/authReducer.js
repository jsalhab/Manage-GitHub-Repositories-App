import {
  LOGIN,
  SIGNUP,
  FAILD_REQUEST,
  SET_TOKEN,
  LOGOUT,
} from "../actions/types";

const INITAL_STATE = {};
export default (state = INITAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, user: action.payload };
    case SIGNUP:
      return { ...state, user: action.payload };
    case FAILD_REQUEST:
      return { ...state, error: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case LOGOUT:
      return { ...state, token: "" };
    default:
      return state;
  }
};
