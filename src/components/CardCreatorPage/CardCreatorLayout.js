import React from 'react';
import { Link } from 'react-router-dom';
import CardCreatorFromFirebase from './CardCreatorForm';
import CardCreatorUpload from './CardCreatorUpload';

const CardCreatorLayout = () => (
  <div className='section layout'>
    <div className='container'>
      <div className='columns'>
        <CardCreatorFromFirebase />
        <CardCreatorUpload />
      </div>
      <Link className='button is-primary' to='/'>
        Go back
      </Link>
    </div>
  </div>
);

export default CardCreatorLayout;
