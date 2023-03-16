import React, { useEffect, useState } from 'react'
import styles from '../css/landing.module.css'
import UserService from '../services/UserService'
import UserListUi from '../components/UserListUi'
import { Link } from "react-router-dom";

const LandingPage = () => {
  const [userList,setUserList] = useState([])
  const userService = new UserService()
  const getUserList = () => {
    userService.getUserList().then(res => {
      setUserList(res.data && res.data.users)
    })
  }
  useEffect(() => {
    getUserList()
  },[])
  return (
    <div className={styles.container}>
        <div className={styles.userContainer}>
          <div className={styles.top}>
              <h4>Select Acount</h4>
          </div>    
          <div className={styles.userListSection}>
            {
              userList.map(data => (
                <div key={data.id}>
                  <Link to={`profile/${data.id}`} style={{textDecoration:'none'}}><UserListUi name={data.name} profilePic={data.profilepicture} /></Link>
                </div>
              ))
            }
          </div>
        </div>
    </div>
  )
}

export default LandingPage