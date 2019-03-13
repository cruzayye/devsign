import React, { PureComponent } from 'react';
import UserHeader from './UserHeader';
import SearchBar from './SearchBar';
import TweetList from './TweetList';

const recentTweets = [
  { _id: '123', text: 'something something something', user: 'weezy', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
  { _id: '432', text: 'dang fake news on my end lol dude lets grab a brew sometime and talk code', user: 'yeezy', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
  { _id: '564', text: 'all talk', user: 'Tekashi', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
  { _id: '122', text: 'all talk', user: 'Drizzy', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
  { _id: '987', text: 'all talk', user: 'Habibi', likes: '20', userLink:'http://i.pravatar.cc/1000', img: 'http://i.pravatar.cc/1000' },
];
export default class Home extends PureComponent {
  state = {
    img: 'https://via.placeholder.com/150.png/',
    logoImage: 'https://via.placeholder.com/50.png/',
    description: 'something something something',
 
  }

  

  render() {
    const { img, logoImage, description } = this.state;
    return (
      <>
      <UserHeader img={img} logoImage={logoImage} description={description}/>
      <SearchBar type={'text'} name={'searchBar'} value={'searchInput'} />
      <TweetList tweets={recentTweets} />
      </>
    );
  }
}
