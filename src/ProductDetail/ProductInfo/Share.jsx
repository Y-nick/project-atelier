import React from 'react';
import facebook from '../images/facebook.svg';
import twitter from '../images/twitter.svg';
import pinterest from '../images/pinterest.svg';

const Share = () => (
  <div>
    <a href="http://www.facebook.com">
      <img src={facebook} alt="Facebook" />
    </a>
    <a href="http://www.twitter.com">
      <img src={twitter} alt="Twitter" />
    </a>
    <a href="http://www.pinterest.com">
      <img src={pinterest} alt="Pinterest" />
    </a>
  </div>
);

export default Share;
