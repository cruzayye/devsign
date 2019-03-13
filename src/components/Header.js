/* eslint-disable no-unused-vars */
import React from 'react';
import Home from './Home';
import FollowersPage from './FollowersPage';
import PersonalTweetsPage from './PersonalTweets/PersonalTweetsPage';
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
          <Link to='/followers'> Followers </ Link>
        </div>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={PersonalTweetsPage} />
        <Route path="/followers" component={FollowersPage} />
      </div>
    </Router>
  );
}






export default Header;




