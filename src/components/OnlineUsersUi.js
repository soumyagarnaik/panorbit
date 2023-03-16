import React from 'react'
import styles from '../css/chat.module.css'
import {RxDot} from 'react-icons/rx'
import {AiTwotoneCheckCircle} from 'react-icons/ai'

const OnlineUsersUi = ({profilePic,name}) => {
  return (
    <div className={styles.onlineUserContainer}>
        <div className={styles.left}>
            <img className={styles.userAvatar} src={profilePic} alt='avt'></img>
            <h6 className={styles.userName}>{name}</h6>
        </div>
        <>
        <AiTwotoneCheckCircle className={styles.dot} />
        </>
    </div>
  )
}

export default OnlineUsersUi