/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useState } from 'react';
import { Header, Meme } from './components';


function App() {

  /************************THEME TOGGLE ********************/
  //add darkmode state to allow for changing
  const [darkMode, setDarkMode] = useState(false);
  //toggle the darkmode state
  function toggleTheme() {
    setDarkMode(darkMode => !darkMode)
  }
  //boolean to change darkmode value
  const styles = {
    backgroundColor: darkMode ? "#222222" : "#ffffff"
  }
  //boolean to change button text
  const themeButtonText = darkMode ? "Night" : "Day";

  /************************JSX TO BE RENDERED ****************/
  return (
    <div style={styles} className='root'>
      {/* Pass toggleTheme as a prop */}
      <Header style={styles} theme={toggleTheme} text={themeButtonText} />
      <Meme style={styles} />
    </div>
  )
}

export default App
