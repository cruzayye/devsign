import React, { PureComponent } from 'React';
import UserHeader from './UserHeader';
import SearchBar from './SearchBar';
import FollowersTweets from './FollowersTweets';

export default class Home extends PureComponent {
  state = {
    img: 'https://via.placeholder.com/150.png/',
    logoImage: 'https://via.placeholder.com/50.png/',
    description: 'something something something',

    userLink: 'http',
    user: '@handle',
    tweet: 'My very first tweet',
    likes: '0',
 
  }

  render() {
    const { img, logoImage, description, userLink, user, tweet, likes } = this.state;
    return (
      <>
      <UserHeader img={img} logoImage={logoImage} description={description}/>
      <SearchBar type={'text'} name={'searchBar'} value={'searchInput'} />
      <FollowersTweets userLink={userLink} user={user} tweet={tweet} likes={likes}/>
      </>
    );
  }
}
