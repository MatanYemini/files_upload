import React, { useEffect } from 'react'; // Add check if path exits using hooks
import { Link } from 'react-router-dom';

const Landing = props => {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'>Bdolach Website</h1>
          <p className='lead'>
            Omer, Oren and sometimes matan (haha take me sometimes please)
          </p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Yemini ?
            </Link>
            <Link to='/login' className='btn btn-light'>
              Yemini
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Landing;
