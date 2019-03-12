import React from 'react';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from 'react-router-dom';

function Header() {
  return (
    <Router>
      <div>
      <Link to='/'> Home </ Link>
      <Link to='/profile'> Profile </ Link>
      <Link to='/following'> Following </ Link>
      <Link to='/followers'> Followers </ Link>

        <hr />

        <Route exact path="/" component={Home} />
        <Route path="/profile" component={Profile} />
        <Route path="/following" component={Following} />
        <Route path="/followers" component={Followers} />
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
function Followers() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}




export default Header;




