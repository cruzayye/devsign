import React from 'react';
import PropTypes from 'prop-types';
import FollowersTweets from './FollowersTweets';
// eslint-disable-next-line no-unused-vars
import styles from './TweetList.css';

export default function TweetList({ tweets }) {
  const ListOfTweets = tweets.map(tweet => {
    return <li key={tweet._id}><FollowersTweets tweet={tweet}/></li>;
  });
  return (
    <ul>
      {ListOfTweets}
    </ul>
  );
}

TweetList.propTypes = {
  tweets: PropTypes.array.isRequired
};
