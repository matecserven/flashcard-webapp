import React from 'react';
import 'stylesheets/loader.scss';

const LoadingAnimation = () => (
  <div>
    Loading...
    <div className='lds-ring'>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
);

export default LoadingAnimation;
