import axios from "axios";

export default class Weather{

    static getCurrentWeather(search: string, country: string){
        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search},${country},${country}&cnt=20&units=metric&appid=2cdf81907aa536eb8e531349c6ad40a9`, {
        })
    }

    static gettWeatherSevenDays(lat: string, lon: string){
        return axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=metric&appid=2cdf81907aa536eb8e531349c6ad40a9`, {
        })
    }
    
 
}