import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import Cat from '../header/BodegaCat.jpg'





function Header() {
  return (
  <div className={styles.navdiv}>

      
      <img 
      src= {Cat}
      alt="BodegaCat"
      width="100" />
      {/* <h1>This is Bodega</h1> */}
      
      <ul className={styles.navul}>
        <li className={styles.navli}><Link to="/">Home</Link></li>
        <li className={styles.navli} ><Link to="/browser">Browse Shops</Link></li>
        <li className={styles.navli}><Link to="/about">About</Link></li>
      </ul>
      
      
  </div>
  )
}

export default Header