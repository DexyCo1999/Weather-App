import { AnyAction } from "redux";
import { GET_CURRENT_WEATHER, GET_SEVEN_DAYS_WEATHER, GET_ARRAY, GET_FIRST_LAST_DAY} from "./constants";
import { WeatherState} from "./types";

const initialState: WeatherState = {
    currentWeather:
    {
        temp : 0,
        lon: "",
        lat: ""
    },
    sevenDaysWeather:
    {
        id: 0,
        temp: 0,
        day: ""
    },
    getArray: [],
    dates:
    {
        firstDay: "",
        lastDay: "",
        firstMonth: "",
        lastMonth: "",
        firstYeas: "",
        lastYear: ""
    }
}

const weatherReducer = (state = initialState, action: AnyAction) => {
    const {type, payload} = action;

    switch(type){
        case GET_CURRENT_WEATHER:
            return{
                ...state,
                currentWeather: payload
            }
        case GET_SEVEN_DAYS_WEATHER:
            return{
                ...state,
                sevenDaysWeather: payload
            }
        case GET_ARRAY:
            return{
                ...state,
                getArray: payload
            }
        case GET_FIRST_LAST_DAY:
            return{
                ...state,
                dates: payload
            }
        default:
            return state;
    }
}

export default weatherReducer;