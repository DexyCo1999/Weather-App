import { IDegree } from "../../components/Degree/Degree";
import {
    GET_ARRAY,
    GET_CURRENT_WEATHER,
    GET_SEVEN_DAYS_WEATHER,
    GET_FIRST_LAST_DAY
}
from "./constants";

import {
    currentWeather as currentWeatherState,
    sevenDaysWeather as sevenDaysWeatherState,
    dates as datesState
}
from "./types";

export const currentWeather = (data: currentWeatherState) => ({
    type: GET_CURRENT_WEATHER,
    payload: data
})

export const sevenDaysWeather = (data: sevenDaysWeatherState) => ({
    type: GET_SEVEN_DAYS_WEATHER,
    payload: data
})
export const getArray = (data: Array<IDegree>) => ({
    type: GET_ARRAY,
    payload: data
})
export const dates = (data: datesState) => ({
    type: GET_FIRST_LAST_DAY,
    payload: data
})

