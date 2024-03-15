import React, { useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from "jwt-decode";
import {Link,useLocation} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {Button} from 'antd';
const FaIcons = require('react-icons/fa');
const AiIcons = require('react-icons/ai');
const { Avatar,  Paper, Grid, Typography, Container } = require('@mui/material');
const { SidebarData } = require('../Sidebar');
require('./styles.css');
const { IconContext } = require('react-icons');


function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const [user,setUser]=useState(JSON.parse(localStorage.getItem('profile')));
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const location=useLocation();
  const showSidebar = () => setSidebar(!sidebar);
  const logout=()=>{
    dispatch({type:'LOGOUT'});
    setUser(null);
    navigate('/'); 
   }
   useEffect(()=>{
    const token=user?.token;
    if(token)
  {
    const decodetoken=jwtDecode(token);
    if(decodetoken.exp*1000<new Date().getTime())
      logout();
  }
    setUser(JSON.parse(localStorage.getItem('profile')));
  },[location]);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          {user?(
             
             <Button type="secondary" className="sign-in-button"  onClick={logout} style={{ textDecoration: 'none', color: 'white' }}>Logout</Button>
            
          ):(
          <Button type="primary" className="sign-in-button">
            <a href="/auth" style={{ textDecoration: 'none', color: 'white' }}>Sign in</a>
          </Button>
            )}
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
