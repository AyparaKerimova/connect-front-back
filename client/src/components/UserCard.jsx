import React from 'react'
import styles from '../assets/css/card.module.css'

const UserCard = ({userName,url,heart}) => {
  return (
    <div className={styles.card}>
        <div className={styles.heartIcon}>
            {heart}
        </div>
        <img src={url} alt="img" />
        <div className={styles.cardFooter}>
            <h1>{userName}</h1>
            <div className={styles.icons}>
                <i className="fa-solid fa-trash" style={{color:"#bd2830"}}></i>
                <i class="fa-solid fa-circle-info" style={{color:"skyblue"}}></i>
            </div>
        </div>
    </div>
  )
}

export default UserCard;