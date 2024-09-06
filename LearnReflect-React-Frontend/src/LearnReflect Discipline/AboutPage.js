import React from 'react';
import DropdownMenu from '../../Components/Design/DropDownController';
import Bcomponent from '../../Components/Design/BComponent';
import LComponent from '../../Components/Design/LogoComponent';
function AboutPage(){
  
return(
    <div>
      <h1 className='hh1'>About LearnReflect</h1>
         <LComponent/>
         <Bcomponent/>
         <DropdownMenu /> {}
         <div>
          <p className='about-text'> 
LearnReflect is a beacon of inspiration and empowerment, dedicated to uplifting individuals through the power of speech, reflection, and motivation. Founded on the belief that challenges are not barriers but catalysts for growth, LearnReflect strives to instill resilience, drive, and a positive mindset in its audience.
Driven by a passion for personal development and a commitment to making a meaningful impact, LearnReflect seeks to be a guiding light for those navigating life's journey. Our mission is to empower individuals to overcome obstacles, unlock their full potential, and embrace a life of purpose and fulfillment.
Join us on our journey of self-discovery, growth, and transformation. Together, let us learn, reflect, and inspire greatness in ourselves and others.
          </p>
         </div>
</div>
);
}

export default AboutPage;

