import React, { PureComponent } from 'React';
import UserHeader from './UserHeader';
import SearchBar from './SearchBar';

export default class Home extends PureComponent {
  state = {
    img: 'https://via.placeholder.com/150.png/',
    logoImage: 'https://via.placeholder.com/50.png/',
    description: 'something something something'

    
  }

  render() {
    const {img, logoImage, description } = this.state;
    return (
      <>
      <UserHeader img={img} logoImage={logoImage} description={description}/>
      <SearchBar type={"text"} name={'searchBar'} value={'searchInput'} />
      </>
    );
  }
}
