import React,{useState} from 'react'
import styles from '../css/chat.module.css'
import {BsChatLeft} from 'react-icons/bs'
import {MdOutlineKeyboardArrowDown, MdOutlineKeyboardArrowUp} from 'react-icons/md'
import OnlineUsersUi from './OnlineUsersUi'

const ChatBox = ({onlineUsers}) => {
  const [openChat,setOpenChat] = useState(false)
  return (
    <div>
      {
        openChat === false ? (
            <div className={styles.chatboxContainer} onClick={()=> setOpenChat(true)}>
              <div className={styles.leftSection}>
              <h5 className={styles.text}>Chats</h5>
              <BsChatLeft className={styles.icon}/>
              </div>
              <>
              <MdOutlineKeyboardArrowUp className={styles.icon}/>
              </>
            </div>
        ) : (
          <>
          <div className={styles.chatboxContainer} onClick={()=> setOpenChat(false)}>
              <div className={styles.leftSection}>
              <h5 className={styles.text}>Chats</h5>
              <BsChatLeft className={styles.icon}/>
              </div>
              <>
              <MdOutlineKeyboardArrowDown className={styles.icon}/>
              </>
            </div>
          <div className={styles.chatListContainer}>
            {
              onlineUsers && onlineUsers.map(data => (
                <div key={data.id} className={styles.chatList}>
                  <OnlineUsersUi name={data.name} profilePic={data.profilepicture} />
                </div>
              ))
            }
          </div>
          </>
        )
      }
    </div>
  )
}

export default ChatBox