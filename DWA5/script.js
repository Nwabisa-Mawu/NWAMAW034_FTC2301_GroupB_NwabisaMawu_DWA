/* eslint-disable no-console */
/* eslint linebreak-style: ["error", "windows"] */

const form = document.querySelector('[data-form]');
const result = document.querySelector('[data-result]');
const wholePage = document.querySelector('body');

/**
 * This will check whether numbers have been entered into both inputs, and return a message if not.
 * It will also check whether the values entered are positive, if not, it will throw an error and
 * display a message on the html page.
 *
 * @param {string} dividend
 * @param {string} divider
 */
const isInputValid = (dividend, divider) => {
  try {
    if (dividend === '' || divider === '') {
      throw new Error('Division not performed. Both values are required in inputs. Try again');
    } else if (dividend < 0 || divider < 0) {
      throw new Error('Division not performed. Invalid number provided. Try again');
    }
  } catch (err) {
    result.innerText = err.message;
    console.error(err.message);
    console.trace();
    return false;
  }
  return true;
};

/**
 * This checks whether the result of the division is a positive number, if it is NaN, it will throw
 * an error. NaN can only exist if non-number characters are entered in the input.
 *
 * @param {string} resultInteger
 */
const isNumber = (resultInteger) => {
  try {
    // eslint-disable-next-line no-restricted-globals
    if (isNaN(resultInteger) || resultInteger < 0) {
      throw new Error('Something critical went wrong. Please reload the page');
    }
  } catch (err) {
    wholePage.innerText = err.message;
    console.error('Input is NaN, reload the page');
    console.trace();
    return false;
  }
  return true;
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

    if (isNumber(resultInteger)) {
      result.innerText = resultInteger;
    }
  }
};

form.addEventListener('submit', printAnswer);
