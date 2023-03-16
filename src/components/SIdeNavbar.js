import React from 'react'
import styles from '../css/sidenav.module.css'
import { Link } from 'react-router-dom'

const SIdeNavbar = ({ id }) => {
  return (
    <div className={styles.container}>
      <ul className={styles.listContainer}>
        <Link to={`/profile/${id}`} style={{ textDecoration: 'none' }}><li className={styles.list}>Profile</li></Link>
        <Link to={`/post/${id}`} style={{ textDecoration: 'none' }}><li className={styles.list}>Post</li></Link>
        <Link to={`/gallery/${id}`} style={{ textDecoration: 'none' }}><li className={styles.list}>Gallery</li></Link>
        <Link to={`/todo/${id}`} style={{ textDecoration: 'none' }}><li className={styles.list}>Todo</li></Link>
      </ul>
    </div>
  )
}

export default SIdeNavbar