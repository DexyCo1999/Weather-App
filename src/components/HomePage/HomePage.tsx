import React, { useState, FormEvent } from 'react';
import ReactFlagsSelect from 'react-flags-select'
import cloud from '../../assets/images/cloudy.png';
import Input from '../Input/Input';
import styles from './HomePage.module.scss';
import Weather from '../../services/weatherService';
import { useDispatch } from "react-redux";
import { currentWeather, dates, getArray } from "../../store/weather/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { currentWeather as currentWeatherState} from "../../store/weather/types";
import { IDegree } from '../Degree/Degree';
import DegreeList from '../DegreeList/DegreeList';
import { validateSearch } from '../../uts/validation';
import ValidationMessage from '../ValidationMessage/ValidationMessage';


function HomePage() {
  let i = 1;
  const [showModalMessage, setShowModalMessage] = useState(false);

  const [country, setCountry] = useState('');
  const [search, setSearch] = useState('');

  const [errors, setErrors] = useState({
    search: ""
  });

  const dispatch = useDispatch();

  const currentDegree = useSelector<RootState, currentWeatherState>(
    state => state.weatherReducer.currentWeather
  )

  let degreeNumber = 0;

  const getBackgroundColor = () => {
    let color = "linear-gradient(145deg, #0093E9 20%, #e3a93a 60%)";
    if (degreeNumber >= 40) {
      color = "linear-gradient(145deg, #0093E9 1%, #e3a93a 10%)";
    }
    if (degreeNumber <= 40 && degreeNumber > 20) {
      color = "linear-gradient(145deg, #0093E9 10%, #e3a93a 30%)";
    }
    if ((degreeNumber <= 20 && degreeNumber) <= 10) {
      color = "linear-gradient(145deg, #0093E9 20%, #e3a93a 50%)";
    }
    if ((degreeNumber <= 10 && degreeNumber) <= 0) {
      color = "linear-gradient(145deg, #0093E9 20%, #e3a93a 60%)";
    }
    if (degreeNumber < 0 && degreeNumber >= -20) {
      color = "linear-gradient(145deg, #0093E9 50%, #e3a93a 70%)";
    }
    if (degreeNumber <= -20 && degreeNumber >= -40) {
      color = "linear-gradient(145deg, #0093E9 50%, #e3a93a 100%)";
    }
    return color;
  };

  degreeNumber = currentDegree.temp;


  const onModalClose = () => {
    setShowModalMessage(false)
  };


  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const valSearch = validateSearch(search);
    if (valSearch.length > 0) {
      setErrors({
        search: valSearch

      });
      setShowModalMessage(true);
      return;
    }

    Weather.getCurrentWeather(search, country)
      .then(function (response: any) {
        dispatch(
          currentWeather({
            temp: Math.round(response.data.main.temp),
            lon: response.data.coord.lon,
            lat: response.data.coord.lat
          })
        );
        Weather.gettWeatherSevenDays(response.data.coord.lat, response.data.coord.lon)
          .then(function (response: any) {

            const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

            dispatch(dates({
              firstDay: (new Date(response.data.daily[1].dt * 1000).getDate()).toString(),
              lastDay: (new Date(response.data.daily[7].dt * 1000).getDate()).toString(),
              firstMonth: month[new Date(response.data.daily[1].dt * 1000).getMonth()].toString(),
              lastMonth: month[new Date(response.data.daily[7].dt * 1000).getMonth()].toString(),
              firstYeas: new Date(response.data.daily[1].dt * 1000).getFullYear().toString(),
              lastYear: new Date(response.data.daily[7].dt * 1000).getFullYear().toString(),
            }));

            const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const arrayDays = Array<IDegree>();

            for (i = 1; i <= 7; i++) {
              const oneDay = {
                id: response.data.daily[i].dt,
                temp: Math.round(response.data.daily[i].temp.day),
                day: weekday[new Date(response.data.daily[i].dt * 1000).getDay()],
              }
              arrayDays.push(oneDay);
            }

            dispatch(getArray(arrayDays));
          })
          .catch(function (error) {
            console.log(error);
          })
      }).catch(function (error) {
        console.log(error);
      })
  };

  return (
    <div className={styles.all} style={{ background: getBackgroundColor() }} >
      <div className={styles.content} >
        <form className={styles.classNameDivInput} onSubmit={handleSubmit}>
          <img className={styles.image} src={cloud} alt="" />
          <div className={styles.countryList}>
            <ReactFlagsSelect selected={country} onSelect={(code) => setCountry(code)} />
          </div>
          <div className={styles.inputComponent}>
            <Input onChange={(e) => setSearch(e.target.value)} />
          </div>
          <ValidationMessage show={showModalMessage} onClose={() => onModalClose()} text={errors.search} />
        </form >
        <div>
          <DegreeList />
        </div>
      </div>
    </div>
  )
}

export default HomePage;
