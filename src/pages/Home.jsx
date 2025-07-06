import React from 'react';
import './Home.css'; 
import heroImage from '../assets/Restaurant.png';

export default function Home() {
  return (
    <main className="home">
      <h1>Welcome</h1>
      <div
        className="hero-image"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${heroImage})`
        }}
      >
        <div className="hero-text">
          <button>Reservations</button>
        </div>
      </div>
    </main>
  );
}