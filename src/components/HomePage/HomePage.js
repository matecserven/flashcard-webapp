import React from 'react';

const HomePage = (props) => {
  const handleRedirect = (e) => {
    props.history.push(e.target.value);
  }

  return (
    <div className='homePage'>
      <h1 className='title is-1'>Welcome to the Flash Card App</h1>
      <p>Please choose question type</p>
      <div>
        <button className='button is-primary' onClick={handleRedirect} value='regular'>Regular</button>
        <button className='button is-primary' onClick={handleRedirect} value='multi'>Multi answer</button>
      </div>
    </div>
  )
};

export default HomePage;
