import React from 'react';

const HomePage = (props) => {
  const handleRedirect = (e) => {
    props.history.push(e.target.value);
  }

  return (
    <div className="homePage">
      <h1>Welcome to the Flash Card App</h1>
      <p>Please choose question type</p>
      <button onClick={handleRedirect} value="regular">Regular</button>
      <button onClick={handleRedirect} value="multi">Multi answer</button>
    </div>
  )
};

export default HomePage;
