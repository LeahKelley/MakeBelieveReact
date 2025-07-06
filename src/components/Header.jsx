import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import './Header.css';
import logo from '../assets/logo.jpg';

export default function Header() {
  return (
    <header className= "header">
      <div className="header-inner"> 
        <Link to="/" className="logo-link">
          <img src={logo} alt="Restaurant Logo" className="logo" />
        </Link>
        <Navbar/>
      </div>  
    </header>   
  )
}