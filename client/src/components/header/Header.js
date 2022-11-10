import React from 'react'
import {Link} from 'react-router-dom'
import styles from './Header.module.css'
import Button from '../button/button.js'
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
        <li><Link to="/">Home</Link></li>
        <li><Link to="/browser">Browse Shops</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
      <Button/>
      
  </div>
  )
}

export default Header