import { combineReducers } from "redux";
import weatherReducer from "./weather/reducer";

export default combineReducers ({
    weatherReducer: weatherReducer
});