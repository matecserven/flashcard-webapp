import React from 'react';
import { Link } from 'react-router-dom';

const FooterNav = (props) => (
  <div>
    <button className='button is-primary' onClick={props.onClick}>
      Next question
    </button>
    <Link className='button is-primary' to='/'>
      Go back
    </Link>
  </div>
);

export default FooterNav;
