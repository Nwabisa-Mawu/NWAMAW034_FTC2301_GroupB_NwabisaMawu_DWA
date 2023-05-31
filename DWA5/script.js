/* eslint-disable */
const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");
const wholePage = document.querySelector('body');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);
  if (dividend === ""|| divider === "") {
       result.innerText = 'Division not performed. Both values are required in inputs. Try again';
    } else {
        if (dividend < 0 || divider < 0) {
            result.innerText = 'Division not performed. Invalid number provided. Try again';
            throw new Error('Entered a negative number');
        } else {
            const resultInteger = Math.floor(dividend / divider);
            if (!resultInteger > 0) {
                wholePage.innerText = 'Something critical went wrong. Please reload the page';
                throw new Error('Characters entered are not numbers')
            } else {
                result.innerText = resultInteger;
            }
            
        }  
    }
});
