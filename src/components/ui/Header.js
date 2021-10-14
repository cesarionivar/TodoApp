import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='header__left'>
        {/* Avatar */}
        <p>Cesario Nivar</p>
      </div>

      <div className='header__right'>
        <Link to='/login'>Logout</Link>
      </div>
    </div>
  );
};

export default Header;
