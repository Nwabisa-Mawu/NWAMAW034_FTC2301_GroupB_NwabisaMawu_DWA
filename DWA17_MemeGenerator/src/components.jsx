/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from "react";
import { useState, useEffect } from "react";
import logo from './assets/Troll-Face.png'
import icon from './assets/pic-icon.png'

/**
 * 
 * @returns {ReactComponentElement}
 */
export function Header(props) {
    const { theme, text } = props
    return (
        <header className="header">
            <div className="logo">
                <img src={logo} alt="laughing-face" />
                <h3>Meme Generator</h3>
            </div>
            <button className="theme-button" onClick={theme}>{text}</button>
        </header>
    )
}


/**
 * Returns the form element with two inputs and 
 * a submit button. Put button in the same component as inputs
 * for state management.
 * @returns {ReactComponentElement}
 */
export function Meme() {
    /* API call to get the memes */
    const [memeAPIdata, setMemeAPIdata] = useState([]);
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => {
                setMemeAPIdata(data.data.memes);
                if (data.data.memes.length > 0) {
                    const randomNumGen = Math.floor(Math.random() * data.data.memes.length);
                    const url = data.data.memes[randomNumGen].url;
                    setMeme(prevMeme => ({
                        ...prevMeme,
                        randomImage: url
                    }));
                }
            })
    }, [])


    /* set the values of state to be used - the meme is an object with the
values of the top and bottom text that a user can input.  */
    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "" //set a default image url
        //that is not from the API array, so it can load before the API is called.
    });

    /*********************************IMAGE GENERATOR*********** */
    /**
  * This handler will pick an image object randomly
  * from the memes array and return an object with a
  * different url.
  * @returns {object} 
  */
    const createNewMeme = () => {
        const randomNumGen = Math.floor(Math.random() * memeAPIdata.length);
        const url = memeAPIdata[randomNumGen].url;
        setMeme({
            topText: "",
            bottomText: "",
            randomImage: url
        })
    }

    /*********************************TEXT GENERATOR*********** */
    /**
     * This handler will add the text to the image as it is being typed
     * in the output.
     * @param {onChange} event
     * @returns {object}  
     */
    const handleChangeText = (event) => {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    //this uses the value updated in the handler to generate a new url for the image
    return (
        <main>
            <div className="inputs">
                <input className="input-top" onChange={handleChangeText} type="text" placeholder="Top text" name="topText" />
                <input type="text" onChange={handleChangeText} placeholder="Bottom text" name="bottomText" />
                <button onClick={createNewMeme}>Get a new image <img className="button-icon" src={icon} alt="picture" /></button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="meme" className="meme-image" />
                <h2 className="meme--text top" name="topText">{meme.topText}</h2>
                <h2 className="meme--text bottom" name="bottomText">{meme.bottomText}</h2>
            </div>
        </main>
    )
}

