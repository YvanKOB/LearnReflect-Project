// LandingPage.js
import { Link } from 'react-router-dom';
import React from 'react';
import '../../css/Landing.css'
import background from './img/black2.png';
import Pageimg from './img/lion.jpg';
import trainer from './img/4.jpg';
import black from './img/Black.png';
import girl from './img/girl.jpg';
function LandingPage() {
  return (
    <div className='banner'>
    <img className='TrainerImg' src={trainer}/>
    <img className='girlimg' src={girl}/>
    <img className='Background' src={background}/>
    <div className='navbar'>
    <ul>
    <li><Link to='/Homepage'>LearnReflect</Link></li>
      <li><Link to='/ShopPage' >Shop</Link></li>
      <li><Link to='/Inspire'>Inspire</Link></li>
      <li><Link to='/Contact'>Contact</Link></li>
    </ul>
    </div>
    <div className='content'>
    <h1>LearnReflect Official</h1>
    <p>Learning Resources</p>
    <p>Improvement</p>
    <p>Inspiration</p>  
    <p>Guide</p>
    </div>
    <div className='banner2'>
    <img className='LearnReflectImg' src={black}/>
    </div>
    </div>
  );
}
export default LandingPage;
