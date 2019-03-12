import React from 'react';
import PropTypes from 'prop-types';

export default function UserHeader({ img, description, logoImage }){
  return (
    <>
    <section>
      <img src={img} />
      <p>{description}</p>
      <img src={logoImage} />
    </section>
    </>
  );

}


UserHeader.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logoImage: PropTypes.string.isRequired,

}
;
