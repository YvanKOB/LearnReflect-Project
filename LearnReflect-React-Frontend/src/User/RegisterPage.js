import DropdownMenu from '../../Components/Design/DropDownController';
import Bcomponent from '../../Components/Design/BComponent';
import LComponent from '../../Components/Design/LogoComponent';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
function RegisterPage() {
  const navigate = useNavigate();



  

  const [values, setValues] = useState({
    name: '',
    password: '',
    email: '',
  });


  const handleChange = (event) => {
    setValues({...values, [event.target.name]:[event.target.value]});
  }


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8081/signup', values)
      .then(res => {navigate('/login')})
      .catch(err => console.log(err));
  }







  return (
    <div>
      <div>
        <h1 className='hh1'>Register</h1>
        <LComponent />             
        <DropdownMenu />             
        <Bcomponent />             
        <div>
          <div className='logincontainer'>
            <form onSubmit={handleSubmit} className='loginform'>
              <input type="text" placeholder="Username" name='name' onChange={handleChange}/>
              <input type="email"  placeholder="Email" name='email' onChange={handleChange} />
              <input type="password" placeholder="Password" name='password' onChange={handleChange} />
              <button  type="submit">Register</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
