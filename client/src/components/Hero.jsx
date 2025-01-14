import React from 'react'
import styles from '../assets/css/hero.module.css'

const Hero = () => {
  return (
    <>
        <div className={styles.heroPage}>
            <div className={styles.heroDesc}>
                <h1>Welcom Users!</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam repellat totam numquam, mollitia saepe alias! Porro ex ipsum eligendi asperiores.</p>
            </div>
        </div>
    </>
  )
}

export default Hero