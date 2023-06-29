/* eslint-disable no-unused-vars */
import React from 'react';
/* Images */
import logo from './assets/airbnb.svg';
import hero from './assets/photo-grid.png';
import athlete from './assets/image12.png';
import star from './assets/Star1.png'
import ellipse from './assets/Ellipse6.svg'
import wedPic from './assets/wedding-photography.png'
import bike from './assets/mountain-bike.png'

/**
 * Returns the html for the NavBar section.
 * @returns {React<component>}
 */
function NavBar() {
  return (
    <header className='nav'>
      <img src={logo} className='logo' alt='airbnb-logo' />
    </header>
  )
}

/**
 * Returns the html for the hero section.
 * @returns {React<component>}
 */
function Hero() {
  return (
    <section className='hero'>
      <img src={hero} className='hero-image' alt='hero-image' />
      <div className='hero-text'>
        <h1>Online experiences</h1>
        <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </section>
  )
}

function Cards() {
  return (
    <section className='rating-cards'>
      <div className='card'>
        <img src={athlete} alt='image' />
        <div className='rating'>
          <img src={star} alt='rating-star' />
          <p>5.0</p>
          <div className='rating-text'>
          <p>(6)<img src={ellipse} alt='ellipse' />USA</p>
          </div>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $136</strong>/person</p>
      </div>
      <div className='card'>
        <img src={wedPic} alt='image' />
        <div className='rating'>
          <img src={star} alt='rating-star' />
          <p>5.0</p>
          <div className='rating-text'>
          <p>(30)<img src={ellipse} alt='ellipse' />USA</p>
          </div>
        </div>
        <p>Learn wedding photography</p>
        <p><strong>From $125</strong>/person</p>
      </div>
      <div className='card'>
        <img src={bike} alt='image' />
        <div className='rating'>
          <img src={star} alt='rating-star' />
          <p>4.8</p>
          <div className='rating-text'>
            <p>(2)<img src={ellipse} alt='ellipse' />USA</p>
          </div>
        </div>
        <p>Group Mountain Biking</p>
        <p><strong>From $50</strong>/person</p>
      </div>
    </section>
  )
}

/**
 * This function returns all the components in the way
 * they will be placed on the page.
 * @returns {React<component>}
 */
export default function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cards />
    </div>
  )
}
