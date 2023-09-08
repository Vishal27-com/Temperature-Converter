import React from 'react'
import styles from './Result.module.css'
const Result = ({tempData}) => {
  const {curr_temp,unit,res_temp}=tempData;
  return (
    <div className={styles.resultDiv}>
     <h3>{curr_temp}&deg;{unit==='celsius'?"C":"F"} is equal to {(res_temp).toFixed(1)}&deg;{unit==='celsius'?"F":"C"}</h3>
    </div>
  )
}

export default Result