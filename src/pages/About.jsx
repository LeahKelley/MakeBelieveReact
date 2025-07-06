import React from 'react';
import './About.css';

import BogusBurger     from '../assets/BogusBurger.png'
import MythicalMozz    from '../assets/MythicalMozzarella.png'
import PretendDuck     from '../assets/PretendPekingDuck.png'
import LegendaryLasagna from '../assets/LegendaryLasagna.png'
import FauxFudge       from '../assets/FauxFudgeSundae.png'
import ConceptualCup   from '../assets/ConceptualCupcake.png'

export default function About() {
  return (
    <main className="about-page">
      <h1>About Us</h1>
      <p>
        The Make Believe Restaurant sits proudly on the corner of
        Nowhere and Never Was, where the menus are pixelated,
        the food is fictional, and the ambiance adjusts to your
        mood, because your mood is made up too. You can order a
        Mythical Mozzarella or a Bogus Burger, and the waiter,
        who isn't real, will nod solemnly as if your choice mattered.
        The meals aren't nourishing, but the metaphors are filling,
        and sometimes that's enough. On lucky nights, the jazz-playing
        ghosts glitch into something heartbreakingly familiar. Tip
        generously, they may not exist, but they're doing their best.
      </p>

      <h2>Our Imaginary Customer Favorites!</h2>
      <p>Use the horizontal scrollbar to see the other fake images.</p>

      <div className="scroll-container">
        <img src={BogusBurger}       alt="Bogus Burger"       width="400" height="600" />
        <img src={MythicalMozz}      alt="Mythical Mozzarella" width="400" height="600" />
        <img src={PretendDuck}       alt="Pretend Peking Duck" width="400" height="600" />
        <img src={LegendaryLasagna}  alt="Legendary Lasagna"  width="400" height="600" />
        <img src={FauxFudge}         alt="Faux Fudge Sundae"  width="400" height="600" />
        <img src={ConceptualCup}     alt="Conceptual Cupcake" width="400" height="600" />
      </div>
    </main>
  );
}