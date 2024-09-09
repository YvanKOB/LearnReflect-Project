
import DropdownMenu from '../Components/DropDownController';
import Bcomponent from '../Components/BComponent';
import LComponent from '../Components/LogoComponent';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function RegisterPage() {
  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    setValues({...values, [event.target.name]: event.target.value});
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage('');

    try {
      const res = await axios.post('http://localhost:8081/signup', values);
      console.log('response:', res.data);
      navigate('/login');
    } catch (err) {
      console.error('error:', err);
      if (err.response && err.response.status === 400) {
        setErrorMessage('E-posten er allerede registrert.');
      } else if (err.response && err.response.status === 422) {
        setErrorMessage('Passordet oppfyller ikke kravene.');
      } else {
        setErrorMessage('Registrering mislyktes. Prøv igjen senere.');
      }
    }
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
              <input type="text" placeholder="name" name='name' onChange={handleChange}/>
              <input type="email" placeholder="Email" name='email' onChange={handleChange} />
              <input type="password" placeholder="Password" name='password' onChange={handleChange} />
              <button type="submit">Register</button>
            </form>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;