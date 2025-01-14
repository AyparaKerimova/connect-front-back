import React from 'react'
import styles from '../assets/css/navbar.module.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
     <div className={`${styles.navbar}`}>
        <Link to="/" className={`${styles.navbarItem}`}>Home</Link>
        <Link to="add-user" className={`${styles.navbarItem}`}>Add Page</Link>
        <Link to="wishlist" className={`${styles.navbarItem}`}>Wishlist</Link>
     </div>
    </>
  )
}

export default Navbar