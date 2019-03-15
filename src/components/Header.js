/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Header.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';




function Header() {

  return (
    
    <div className={styles.links}>
      <Link to='/'> Home </ Link>
      <Link to='/profile'> Profile </ Link>
      <Link to='/followers'> Followers </ Link>
    </div>  
    
  );
}


export default Header;




