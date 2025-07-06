import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen(prev =>!prev)}
      >☰</button>

      <nav className={open ? 'nav open' : 'nav'}>
        <ul>
          <li><Link to="/" onClick={() => setOpen(false)}>Home</Link></li>
          <li><Link to="/menu" onClick={() => setOpen(false)}>Menu</Link></li>
          <li><Link to="/about" onClick={() => setOpen(false)}>About/Gallery</Link></li>
          <li><Link to="/contact" onClick={() => setOpen(false)}>Contact</Link></li>
        </ul>
      </nav>
    </>  
  )
}