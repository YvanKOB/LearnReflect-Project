import React from 'react';
import DropdownMenu from '../DropDownController';
import Bcomponent from '../BComponent';
import LComponent from '../LogoComponent';
import '../css/Homepage.css'
function HomePage () {   
  return (
    <div>
      <h1 className='hh1'>LearnReflect</h1>
        <LComponent/>
        <Bcomponent/>
        <DropdownMenu /> 

        
      <div className='scroll-container'>
      <div className="scroll-page - QuoteText" id="page-1">
      <p>
      When you face difficult Times.
      Know that challanges are not sent to destroy you.
      they're sent to promote, increase and strengthen you.
  
 
 
      </p>
      </div>

     <div className='scroll-page   - QuoteText' id="page-2">



     </div>




     <div className='scroll-page   - QuoteText' id="page-3">
      </div>
  </div>
    </div>
  )
}
export default HomePage;

