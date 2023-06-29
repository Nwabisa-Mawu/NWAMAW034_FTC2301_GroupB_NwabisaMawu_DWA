/* eslint-disable no-unused-vars */

import React from 'react';
import logo from './assets/react-logo.png';

/**
 * This function returns the html for the header logo and
 * navigation bar.
 * @returns {React<component>}
 */
function Header() {
  return (
    <header className='header'>
      <nav className='nav'>
        <img src={logo} className='logo' alt="logo" />
        <h2 className='logo-text'>ReactFacts</h2>
      </nav>
    </header>
  );
}

/**
 * This function returns the html for the 
 * footer content.
 * @returns {React<component>}
 */
function Footer() {
  return (
    <footer className='footer'><small>© 2023 Sims development. All rights reserved.</small></footer>
  );
}

/* React component - a function that return html elements*/
/**
 * This function has the html for the main section of the webpage
 * with the interesting facts about React.
 * @returns {React<component>}
 */
function MainContent() {
  return (
    <div className='main'>
      <h1>Fun facts about React!</h1>
      <div className='facts'>
        <ul>
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 100k stars on Github</li>
          <li>Is maintained by Facebook</li>
          <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
      </div>
    </div>
  );
}

/**
 * This function combines the components to return
 * the home page
 * @returns {React<component>}
 */
function Page() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Page;
