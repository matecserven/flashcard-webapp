import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className='homePage'>
    <h1 className='title is-1'>Welcome to the Flash Card App</h1>
    <h3>Please choose question type</h3>
    <div>
      <Link className='button is-primary' to='/regular'>
        Regular
      </Link>
      <Link className='button is-primary' to='/multi'>
        Multi answer
      </Link>
    </div>
  </div>
);

export default HomePage;
