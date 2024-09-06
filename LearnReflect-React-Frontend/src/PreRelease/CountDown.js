import React from 'react';
import Timer from '../../Components/PreRelease/TimerComponent';
import LComponent from '../../Components/Design/LogoComponent';
function CountDown(){
return(
    <div>
  
  
    <div className='scroll-container'>
    <LComponent/>
      <div className="scroll-page - QuoteText" id="page-1">

      <Timer/>
  
      </div>
     <div className='scroll-page   - QuoteText' id="page-2">
     </div>
     <div className='scroll-page   - QuoteText' id="page-3">
      </div>
  </div>
    </div>
  
);
}
export default CountDown