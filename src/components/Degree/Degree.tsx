import React from 'react';
import styles from './Degree.module.scss';

export interface IDegree{
    id?: number,
    temp: number,
    day: string,
    sevenDays?: IDegree
}


function Degree({temp, day}:IDegree){

    return (
        <div className={styles.content}>
            <div className={styles.day}> {day} </div>
            <div className={styles.degree}> {temp}° </div>            
        </div>
    )
}

export default Degree
