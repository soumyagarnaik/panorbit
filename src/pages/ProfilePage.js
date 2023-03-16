import React, { useEffect, useState } from 'react'
import styles from '../css/profile.module.css'
import SIdeNavbar from '../components/SIdeNavbar'
import MainContent from '../components/MainContent'
import UserService from '../services/UserService'
import { useParams,useLocation } from 'react-router-dom'

const ProfilePage = () => {
  const [userList,setUserList] = useState([])
  const [userData,setUserData] = useState({})
  const {id} = useParams()
  const userService = new UserService()
  const getUserList = () => {
    userService.getUserList().then(res => {
      if(res && res.data && res.data.users && id) {
        setUserList(res.data.users)
        const user =  res.data.users.find(userData => userData.id === Number(id))
        setUserData(user)
      }
    })
  }
  useEffect(() => {
    getUserList()
  },[])
  return (
    <div className={styles.profileContainer}>
        <div className={styles.sideNavbar}>
            <SIdeNavbar id={id}/>
        </div>
        <div className={styles.mainContent}>
            <MainContent user = {userData} userList={userList}/>
        </div>
    </div>
  )
}

export default ProfilePage