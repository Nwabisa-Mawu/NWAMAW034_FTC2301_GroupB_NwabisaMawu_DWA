/* eslint-disable */

/* STATE MANAGEMENT CODE - Added to the end of the code so that it updates the
code after the events have been registered. */

/**
 * 
 * @param {Function} reducer 
 * @returns {object<function>} getState will return the current state.
 * and publish which will return the function that will pass
 * the action through the reducer function.
 */
const store = (reducer) => {
    let state;
    //to get the current state of the app
    const fetchState = () => state;
    /**
     * This is the dispatch function that accepts
     * the event name an passes it to the reducer function
     * so that it can check for a match then update the state
     * and add it to the handlers array for memory.
     * @param {event} action 
     */
    const publish = (action) => {
        state = reducer(state, action);
    };

    //to get the state after an event is registered
    const getState = () => fetchState();

    return {
        getState,
        publish
    };
};

/**
 * @typedef {'ADD' | 'MINUS' | 'RESET'} Action
 * @typedef { 'Normal' | 'Maximum reached' | 'Minimum reached'} State
 */
/**
 * This function will take the action performed and check for the matching
 * state update then return that state update.
 * @param {State} state - The state of the app when the reducer is executed,
 * determined by the number displayed in the counter input. 
 * @param {Action} action 
 * @returns {State}
 */
const reducer = (state = 'Normal', action) => {
    switch (action.type) {
        case 'ADD':
            if (state === 'Minimum reached') {
                return 'Normal';
            } else if (state === 'Normal' && parseInt(number.value) + 1 >= MAX_NUMBER) {
                return 'Maximum reached';
            } else {
                return 'Normal';
            }
        case 'MINUS':
            if (state === 'Maximum reached') {
                return 'Normal';
            } else if (state === 'Normal' && parseInt(number.value) - 1 <= MIN_NUMBER) {
                return 'Minimum reached';
            } else {
                return 'Normal';
            }
        case 'RESET':
            return 'Normal';
        default:
            return state;
    }
};

const myStore = store(reducer);

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
    myStore.publish({ type: 'MINUS' });
    console.log(myStore.getState());

    // we want the number on the screen to change by this value
    const newValue = parseInt(number.value) - 1;
    number.value = newValue;

    subtract.disabled = newValue <= MIN_NUMBER;
    add.disabled = false;
}

const addHandler = () => {
    myStore.publish({ type: 'ADD' });
    console.log(myStore.getState());
    // we want the number on the screen to change by this value
    const newValue = parseInt(number.value) + 1;
    number.value = newValue

    subtract.disabled = false;
    add.disabled = newValue >= MAX_NUMBER;
}

const resetHandler = () => {
    myStore.publish({ type: 'RESET' });
    console.log(myStore.getState());
    const resetMsg = document.getElementById('reset-message');
    resetMsg.hidden = false;
    //make message disappear after a second.
    setTimeout(() => {
        resetMsg.hidden = true;
    }, 1250);

    add.disabled = false;
    subtract.disabled = false;
    number.value = 0;
};

subtract.addEventListener('click', subtractHandler);
add.addEventListener('click', addHandler); //tells it to run addHandler
//instructions after add has been clicked
//NOTE-create event response before declaration otherwise console
//will not read if it is called before it is declared
reset.addEventListener('click', resetHandler);
