import React from 'react';
import tiktok from './img/tiktok.png';
import Instagram from './img/insta.png';
import X from './img/xx.png';

function LComponent() {
  return (
    <div className='img-container'>
      <div className="social-icon-container">
        <a href='https://www.tiktok.com/@learnreflectsession?is_from_webapp=1&sender_device=pc'>
          <img src={tiktok} alt="TikTok Logo" className="social-icon" />
        </a>
      </div>
      <div className="social-icon-container">
        <a href='https://www.instagram.com/learnreflects'>
          <img src={Instagram} alt="Instagram Logo" className="social-icon" />
        </a>
      </div>
      <div className="social-icon-container">
        <a href='https://x.com/learnreflects?s=21'>
          <img src={X} alt="X Logo" className="social-icon" />
        </a>
      </div>
    </div>
  );
};


export default LComponent;