import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Navbar = props => {
  const guestLinks = (
    <ul>
      <li>
        <Link to='/badachim'>Badachim</Link>
      </li>
      <li>
        <Link to='/howto'>How-To</Link>
      </li>
      <li>
        <Link to='/utils'>Utils</Link>
      </li>
    </ul>
  );

  return (
    <div>
      <nav className='navbar bg-dark'>
        <h1>
          <Link to='/'>
            <i className='fas fa-code'></i> Bdolach
          </Link>
        </h1>
        {<Fragment>{guestLinks}</Fragment>}
      </nav>
    </div>
  );
};

export default Navbar;
