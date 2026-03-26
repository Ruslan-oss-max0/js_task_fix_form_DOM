'use strict';

const inputsList = document.querySelectorAll('form input');

inputsList.forEach((input) => {
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';
  inputLabel.textContent = input.name;
  inputLabel.htmlFor = input.id;

  input.parentNode.insertBefore(inputLabel, input);

  const firstletter = input.name[0].toUpperCase();

  input.placeholder = `${firstletter}${input.name.slice(1)}`;
});
