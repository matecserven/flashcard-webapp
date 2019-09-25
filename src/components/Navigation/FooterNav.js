import React from 'react';
import { withRouter } from 'react-router-dom';

const FooterNav = (props) => (
  <div>
    <button className='button is-primary' onClick={props.onClick}>Next question</button>
    <button className='button is-primary' onClick={() => props.history.push('/')}>Go back</button>
  </div>
);

export default withRouter(FooterNav);
