import React from 'react';
import CardCreatorFromFirebase from './CardCreatorForm';
import CardCreatorUpload from './CardCreatorUpload';

const CardCreatorLayout = () => (
  <div className='homePage'>
    <CardCreatorFromFirebase />
    <CardCreatorUpload />
  </div>
);

export default CardCreatorLayout;
