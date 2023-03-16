import React from 'react'
import styles from '../css/main.module.css'

const ProfileText = (props) => {
    const {lable,value} = props
  return (
    <div className={styles.textContainer}>
        <div className={styles.lableText}>
            <h4 className={styles.text}>{lable} </h4>
            <h4 className={styles.text}> :</h4>
        </div>
        <h4 className={styles.valueText}>{value}</h4>
    </div>
  )
}


export default ProfileText