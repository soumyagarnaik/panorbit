import React from 'react'
import styles from '../css/main.module.css'
import ProfileText from './ProfileText'
import MapComponent from './Map'
import ChatBox from './ChatBox'
import ComingSoon from './ComingSoon';
import { useLocation } from 'react-router-dom'

const MainContent = ({user, userList}) => {
  const location = useLocation()
  const route = location.pathname.slice(1,location.pathname.length-2)
  const onlineUsers =  userList.filter(data=> data.id !== user.id)
  return (
    <div className={styles.container}>
        <div className={styles.topNav}>
            <h4>{route.toUpperCase()}</h4>
            <div className={styles.profile}>
                <img className={styles.avatar} src={user.profilepicture} alt='avatar'></img>
                <h5>{user.name}</h5>
            </div>
        </div>
      {route === 'profile' ? (
        <div className={styles.profileContent}>
            <div className={styles.profileDetails}>
                <img className={styles.profilePic} src={user.profilepicture} alt='avatar'></img>
                <h4 className={styles.text}>{user.name}</h4>
                <div className={styles.profileData}>
                <ProfileText lable='UserName' value={user.username} />
                <ProfileText lable='email' value={user.email} />
                <ProfileText lable='Phone' value={user.phone} />
                <ProfileText lable='Website' value={user.website}/>
                </div>
                <div className={styles.companyData}>
                <h4 className={styles.comptext}>Company</h4>
                {
                  user.company && (
                    <>
                    <ProfileText lable='Name' value={user.company.name} />
                    <ProfileText lable='catchphrase' value={user.company.catchPhrase} />
                    <ProfileText lable='bs' value={user.company.bs} />
                    </>
                  )
                }
                </div>
                

                {/* </div> */}
            </div>
            <div className={styles.profileAddress}>
                <h4 className={styles.comptext}>Address :</h4>
                {
                  user.address && (
                    <>
                    <div className={styles.address}>
                    <ProfileText lable='Street' value={user.address.street} />
                    <ProfileText lable='Suite' value={user.address.suite} />
                    <ProfileText lable='City' value={user.address.city} />
                    <ProfileText lable='Zipcode' value={user.address.zipcode} />
                  </div>
                    </>
                  )
                }
                <div className={styles.mapHolder}>
                  {
                    user.address && user.address.geo && (
                      <MapComponent lat={user.address.geo.lat} lan={user.address.geo.lat} />
                    )
                  }
                  {
                    user.address && user.address.geo && (
                      <>
                      <div className={styles.geoHolder}>
                        <h5 className={styles.text}>Lat:</h5><h5>{user.address.geo.lat}</h5>
                        <h5 className={styles.text}>Lng:</h5><h5>{user.address.geo.lat}</h5>
                      </div>
                      </>
                    )
                  }
                  
                </div>
                <div className={styles.chatbox}>
                  <ChatBox onlineUsers={onlineUsers}/>
                </div>
            </div>
        </div>
      )  : (
        <ComingSoon />
      ) }
    </div>
  )
}

export default MainContent