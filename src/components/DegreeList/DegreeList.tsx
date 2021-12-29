import React from 'react';
import styles from './DegreeList.module.scss';
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { currentWeather, dates } from "../../store/weather/types";
import Degree, { IDegree } from '../Degree/Degree';



function DegreeList() {

    const currentDegree = useSelector<RootState, currentWeather>(
        state => state.weatherReducer.currentWeather
    )

    const sevenDaysDegree = useSelector<RootState, Array<IDegree>>(
        state => state.weatherReducer.getArray
    )
    const dates = useSelector<RootState, dates>(
        state => state.weatherReducer.dates
    )


    return (
        <div className={styles.allContent} >
            <div className={styles.bigDegree}>
                <div className={styles.day}>
                {!currentDegree.temp ? ("") : `${dates.firstDay} ${dates.firstMonth} ${dates.firstYeas} - 
                ${dates.lastDay} ${dates.lastMonth} ${dates.lastYear}`} 
                </div>
                <div className={styles.degree}>{!currentDegree.temp ? ("") : (currentDegree.temp)}{!currentDegree.temp ? ("") : ("°")}  </div>
            </div>
            <div className={styles.content}>
                {sevenDaysDegree?.map((sevenDays) => (
                    <div key={sevenDays.id}>
                        <Degree
                            day={sevenDays.day}
                            temp={sevenDays.temp}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default DegreeList
