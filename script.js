// Select the display input element where expressions and results will be shown
const display = document.querySelector('.display');

// Select all buttons on the calculator
const buttons = document.querySelectorAll('button');

// Loop through each button and add a click event listener
buttons.forEach(button => {
  button.addEventListener('click', () => {

    // Get the value assigned to the button via the data-value attribute
    const value = button.getAttribute('data-value');

    // Handle 'AC' (All Clear) - clears the entire display
    if (value === 'AC') {
      display.value = '';
    }

    // Handle 'DEL' (Delete) - removes the last character from the display
    else if (value === 'DEL') {
      display.value = display.value.slice(0, -1);
    }

    // Handle '=' (Equals) - evaluates the mathematical expression
    else if (value === '=') {
      try {
        // Use eval() to compute the result of the expression
        display.value = eval(display.value);
      } catch (e) {
        // If there's an error in the expression, display 'Error'
        display.value = 'Error';
      }
    }

    // For all other values (numbers, operators), append the value to the display
    else {
      display.value += value;
    }

  });
});

/**
 * Calculator Script
 * -----------------
 * This script controls a simple calculator interface.
 * It handles button clicks for numbers, operators, clearing the screen,
 * deleting characters, and evaluating expressions.
 * 
 * Author: John Jubli
 */