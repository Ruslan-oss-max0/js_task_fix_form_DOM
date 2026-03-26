'use strict';

const inputsList = document.querySelectorAll('input');

inputsList.forEach((input) => {
  const inputLabel = document.createElement('label');

  inputLabel.className = 'field-label';
  inputLabel.textContent = input.name;
  inputLabel.htmlFor = input.id;

  inputLabel.textContent = input.name;

  input.parentNode.insertBefore(inputLabel, input);

  const firstletter = input.name[0].toUpperCase();

  input.placeholder = `${firstletter}${input.name.slice(1)}`;
});
