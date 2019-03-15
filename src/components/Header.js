/* eslint-disable no-unused-vars */
import React from 'react';

import {
  Link,
} from 'react-router-dom';
import styles from './Header.css';

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




