/* eslint linebreak-style: ["error", "windows"] */

const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');
const wholePage = document.querySelector('body');

/**
 * This will check whether numbers have been entered into both inputs, and return a message if not.
 * It will also check whether the values entered are positive, if not, it will throw an error and
 * display a message on the html page.
 *
 * @param {number} dividend
 * @param {number} divider
 */
const isInputValid = (dividend, divider) => {
  if (dividend === '' || divider === '') {
    result.innerText = 'Division not performed. Both values are required in inputs. Try again';
    return false; // to indicate an invalid input
  } if (dividend < 0 || divider < 0) {
    result.innerText = 'Division not performed. Invalid number provided. Try again';
    throw new Error('Entered a negative number');
  } else {
    return { dividend, divider };
  }
};

/**
 * This checks whether the result of the division is a positive number, if it is NaN, it will throw
 * an error. NaN can only exist if non-number characters are entered in the input.
 *
 * @param {number} resultInteger
 */
const isNumber = (resultInteger) => {
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(resultInteger) || resultInteger < 0) {
    wholePage.innerText = 'Something critical went wrong. Please reload the page';
    throw new Error('Characters entered are not numbers');
  } else {
    return resultInteger;
  }
};

/**
 * This prints the answer or error message to the html page
 * after you click the submit button
 *
 * @param {*} event
 */
const printAnswer = (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (isInputValid(dividend, divider)) {
    const resultInteger = Math.floor(dividend / divider);
    isNumber(resultInteger);
    result.innerText = resultInteger;
  }
};

form.addEventListener('submit', printAnswer);
