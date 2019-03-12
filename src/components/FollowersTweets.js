import React from 'react';
import PropTypes from 'prop-types';

export default function FollowersTweets({ user, tweet, likes, userLink }) {
  return (
    <>
    <a href={userLink}><h4>{user}</h4></a>
    <p>{tweet}</p>
    <button>{likes}</button>
    </>
  );

}

FollowersTweets.propTypes = {
  user: PropTypes.string.isRequired,
  userLink: PropTypes.string.isRequired,
  tweet: PropTypes.string.isRequired,
  likes: PropTypes.string.isRequired,
};
