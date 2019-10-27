let resultContainer, textField;
var data = require('./propertycsv.json');

document.addEventListener('DOMContentLoaded', () => {
  resultContainer = document.getElementById('search-result');
  textField = document.getElementById('textfield');
  addItems(data.D);
  
  textField.addEventListener('change', () => {
    setTimeout(update(), 100);
  });
});

// Runs when uppdating search
const update = () => {
  let value = textField.value.toLowerCase;
  let exp = new RegExp(textField.value.toLowerCase());
  let dataSet;
  if (value === "") {
    // Add all objects to dataSet
    dataSet = data.D;
  } else {
    // Filter out objects that matches search query
    dataSet = data.D.filter(b => {
      return (
        exp.test(b.A.toLowerCase()) || 
        exp.test(b.B.toLowerCase()) || 
        exp.test(b.C)
      );
    });
  }
  // Remove previous results and add the new ones
  resultContainer.innerHTML = "";
  addItems(dataSet);
}

const addItems = data => {
  let container = document.createElement('div');
  container.classList.add('list-item');
  // Creates column headers
  createTextElement('div', 'A', container);
  createTextElement('div', 'B', container);
  createTextElement('div', 'C', container);
  resultContainer.appendChild(container);
  // Loops through the provided objects
  for (let i = 0; i < data.length; i++) {
    let container = document.createElement('div');
    container.classList.add('list-item');
    // Adds values for every row
    createTextElement('div', data[i].A, container);
    createTextElement('div', data[i].B, container);
    createTextElement('div', data[i].C + ' kr', container);
    resultContainer.appendChild(container);
  }
}

// Function to create, and append, elements containing text
const createTextElement = (elem, text, appendTo) => {
  let container = document.createElement(elem);
  let textNode = document.createTextNode(text);
  container.appendChild(textNode);
  appendTo.appendChild(container);
}

const data = require('./propertycsv.json');
// List of books
// const data = {
//   books: [
//     {
//       id: 0,
//       name: 'Some name',
//       category: 'Horror',
//       price: 120
//     },
//     {
//       id: 1,
//       name: 'Name some',
//       category: 'Comedy',
//       price: 100
//     },
//     {
//       id: 2,
//       name: 'What\'s up?',
//       category: 'Biography',
//       price: 110
//     },
//     {
//       id: 3,
//       name: 'Need help?',
//       category: 'Comedy',
//       price: 90
//     },
//     {
//       id: 4,
//       name: 'Don\'t ask me!',
//       category: 'Drama',
//       price: 100
//     },
//     {
//       id: 5,
//       name: 'Come on!',
//       category: 'Thriller',
//       price: 70
//     },
//     {
//       id: 6,
//       name: 'An idiot like me',
//       category: 'Biography',
//       price: 100
//     },
//     {
//       id: 7,
//       name: 'All about that base',
//       category: 'Thriller',
//       price: 120
//     },
//     {
//       id: 8,
//       name: 'Cash me outside',
//       category: 'Comedy',
//       price: 100
//     },
//     {
//       id: 9,
//       name: 'So fluffy I\'m gonna die!',
//       category: 'Biography',
//       price: 100
//     },
//     {
//       id: 10,
//       name: 'Quarl - A yellow story',
//       category: 'Biography',
//       price: 313
//     },
//     {
//       id: 11,
//       name: 'Let it go!',
//       category: 'Horror',
//       price: 170
//     },
//     {
//       id: 12,
//       name: 'Y u gotta b so rude?',
//       category: 'Drama',
//       price: 10
//     },
//     {
//       id: 13,
//       name: 'Nourly there',
//       category: 'Comedy',
//       price: 9001
//     },
//     {
//       id: 14,
//       name: 'SARA - Frame that work',
//       category: 'Technology',
//       price: 230
//     }
//   ]
// };