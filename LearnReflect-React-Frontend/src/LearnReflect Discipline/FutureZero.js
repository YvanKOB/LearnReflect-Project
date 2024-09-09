import React from 'react';
import DropdownMenu from '../Components/DropDownController';
import Bcomponent from '../Components/BComponent';
import LComponent from '../Components/LogoComponent';
function FutureZero(){
return(
    <div>
      <h1 className='hh1'>Futures Membership</h1>
      <LComponent /> 
      <DropdownMenu /> 
      <Bcomponent /> 
      <div class="bio-container">
      <p class="bio-text">Register for Futures Membership and gain access to exclusive benefits:</p>
      <ul>
        <ul class='LiFuture'>Goal Setting</ul>
        <ul class='LiFuture'>Progress Tracking</ul>
        <ul class='LiFuture'>Task Management</ul>
        <ul class='LiFuture'>Habit Tracking</ul>
        <ul class='LiFuture'>Community Support</ul>
        <ul class='LiFuture'>Resources and Tips</ul>
        <ul class='LiFuture'>Reflection and Journaling</ul>
        <ul class='LiFuture'>Gamification</ul>
        <ul class='LiFuture'>Accountability Partners</ul>
      </ul>
      
    </div>
  </div>
);
}
export default FutureZero;

