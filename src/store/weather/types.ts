import { IDegree } from "../../components/Degree/Degree";

export interface WeatherState{
    currentWeather: currentWeather,
    sevenDaysWeather: sevenDaysWeather,
    getArray: Array<IDegree>,
    dates: dates
}

export interface currentWeather{
    temp : number,
    lon: string,
    lat: string
}
export interface sevenDaysWeather{
    id?: number,
    temp?: number,
    day?: string
}

export interface dates{
    firstDay?: string,
    lastDay?: string,
    firstMonth?: string,
    lastMonth?: string,
    firstYeas?: string,
    lastYear?: string
  }