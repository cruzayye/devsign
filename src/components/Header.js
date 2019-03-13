/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';
import styles from './Header.css';

function Header() {
  return (
    <Router>
      <div>
        <div className={styles.links}>
          <Link to='/'> Home </ Link>
          <Link to='/profile'> Profile </ Link>
          <Link to='/following'> Following </ Link>
        </div>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/following" component={Following} />
      </div>
    </Router>
  );
}



function Profile() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Following() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}




export default Header;




