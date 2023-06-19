/* eslint-disable */
// GLOBAL CONSTANTS
const MAX_NUMBER = 10;
const MIN_NUMBER = -10;

// store three things in our js storage
// to select the three html elements we want to use and store

// use const because variable will always refer to element
//Do not use css classes
//because if it is changed then the response will stop
//use element id's and (data-key)data attributes=allow you to add custom attributes
//to HTML
const number = document.querySelector('[data-key="number"]');
const subtract = document.querySelector('[data-key="subtract"]');
const add = document.querySelector('[data-key="add"]');
const reset = document.querySelector('[data-key = "reset"]');

// add an event listener - tell it to listen for something and when
//the thing happens, it must do something
// after comma, say what must happen.

// we can also add event handlers
// to assign an action use ()=>

const subtractHandler = () => {
        
        // we want the number on the screen to change by this value
        const newValue = parseInt(number.value)- 1;
        number.value = newValue;
//  to create a min value
    //if (newValue === MIN_NUMBER){
      //  subtract.disabled = true;
    //} 
     //Will give the same behaviour as below

     if (number.disabled === true){
        add.disabled = false;
     }
     if (newValue <= MIN_NUMBER) {
        subtract.disabled = true 
        add.disabled = false;
     }
}

const addHandler = () => {
        // we want the number on the screen to change by this value
        const newValue = parseInt(number.value) + 1;
        number.value = newValue
// to create a new max value
    //    if (newValue === MAX_NUMBER){
      //          add.disabled = true;
        //}
        //Did not work because both end up disabled if you reach max/min 
  
        if (number.value <= MIN_NUMBER){
                add.disabled = false;
        }
        if (newValue >= MAX_NUMBER) {
                add.disabled = true;
                subtract.disabled = false;
        }
}

const resetHandler = () => {
    add.disabled = false;
    subtract.disabled = false;
    number.value = 0;
}

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler); //tells it to run addHandler
//instructions after add has been clicked
//NOTE-create event response before declaration otherwise console
//will not read if it is called before it is declared
reset.addEventListener('click', resetHandler);
