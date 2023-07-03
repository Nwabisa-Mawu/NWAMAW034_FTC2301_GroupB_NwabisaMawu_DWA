/* eslint-disable react/prop-types */

/* eslint-disable no-unused-vars */
import React from 'react';
import { ReactPropTypes } from 'react';
/* Images */
import logo from './assets/airbnb.svg';
import hero from './assets/photo-grid.png';
import star from './assets/Star1.png'


/**
 * Returns the html for the NavBar section.
 * @returns {React<component>}
 */
export function NavBar() {
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
export function Hero() {
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

/**
 * Creates the experience cards with image, price and
 * title.
 * @param {object} props
 * @prop {ReactPropTypes} 
 * @returns {React component}
 */
export function Card(props) {
  const { item: { img, rating, reviewCount,
    title, price, openSpots, location } } = props
  /* create a condition statement to control the text inside the badge */
  let badgeText;
  if (!openSpots) {
    badgeText = "Sold out";
  } else if (location !== "Online") {
    badgeText = `${openSpots} spots left!`;
  } else {
    badgeText = "Online";
  }

  return (
    <div className='card'>
      <div className='card--badge'>{badgeText}</div>
      <img src={img} alt='image' />
      <div className='rating'>
        <img src={star} alt='rating-star' />
        <p>{rating}</p>
        <div className='rating-text'>
          <p>({reviewCount}) • {location}</p>
        </div>
      </div>
      <p>{title}</p>
      <p><strong>From ${price}</strong>/person</p>
    </div>
  )
}
