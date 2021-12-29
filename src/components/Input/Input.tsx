import React from 'react';
import styles from "./Input.module.scss";
import path from "../../assets/images/search.png";

export interface IInput{

    onChange: (e:React.ChangeEvent <HTMLInputElement>)=>void; 
}


function Input({onChange}: IInput) {
    return (
        <div className={styles.inputDiv}>
            <input className={styles.input} placeholder='Please enter your location' onChange={(e)=> onChange(e)}/>
            <img className={styles.img} src={path} alt=""/>
        </div>
    )
}

export default Input
