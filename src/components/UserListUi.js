import React from 'react'
import styles from '../css/landing.module.css'

const UserListUi = ({name,profilePic}) => {
  return (
    <div className={styles.user}>
        <img className={styles.userAvatar} src={profilePic} alt='avt'></img>
        <h6 className={styles.userName}>{name}</h6>
    </div>
  )
}

export default UserListUi