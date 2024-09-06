import React, { useState } from 'react';
import MenuIcon from './img/menu.png'
import { Link } from 'react-router-dom'; 
import { useAuth } from '../Authanciation/AuthProvider';
import PrivateRouteMenu from '../Authanciation/PrivateRouteMenu';
function DropdownMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

const { isAuthenticated   , logout } = useAuth();
 
  return (
    <div className='dropdown'>
      <img src={MenuIcon} alt="MenuIcon Logo" className='menu-icon' onClick={toggleMenu} />
      {isMenuOpen && (
        <div className='dropdown-content'>
          <PrivateRouteMenu>
            {(isAuthenticated) => (
              <>
                {isAuthenticated ? (
                  <>
                    <Link to="/profile">Profile</Link>
                    <Link onClick={logout}>Logout</Link>
                  </>
                ) : (
                  <>
                    <Link to="/login">Login</Link>
                    <Link to="/register">Register</Link>
                  </>
                )}
              </>
            )}
          </PrivateRouteMenu>
          <Link to="/Futures">Futures</Link>
          <Link to="/AboutPage">About</Link>  
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;




