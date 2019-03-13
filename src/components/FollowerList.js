import React from 'react';
import PropTypes from 'prop-types';
import Follower from './Follower';

export default function FollowerList({ followers }) {
  const listOfFollowers = followers.map(follower => {
    return <li key={follower._id}><Follower details={follower} /></li>;
  }); 
  return (
    <ul>
      {listOfFollowers}
    </ul>
  );
}

FollowerList.propTypes = {
  followers: PropTypes.array.isRequired
};
