// Task:
// When You click on any of the letters
// 1 ) The letter should stay green
// 2 ) All other letters should stay black!
// 3 ) Display only the names of the list starting with this letter!


// Alright - Let's break this down. The code could be reorganized, but I
// it think it's clearer for beginners to explain things step by step.

// Two main things are going to be affected by the clicks:
// - the list of letters
// - the list of names
// - let's select them

const listOfLetters = document.querySelectorAll('.item');
const allNames = document.querySelectorAll('.name');


// The first functionality - I want a letter to remain green
// when clicked and keep the rest black.
// 1 - remove the "green class" from all letters - see function removeGreenFromLetters
// 2 - apply the green class on the letter that I clicked.

listOfLetters.forEach((letter) => {
  letter.addEventListener('click', () => {
    removeGreenFromLetters();
    letter.classList.add('green');
  })
})

function removeGreenFromLetters() {
  listOfLetters.forEach((letter) => {
    letter.classList.remove('green');
  })
}


// Ok That's cool - But now we need to do some logic work.
// The list of names needs to be filtered
// The problem is that modifying the element directly will lead to loss of data,
// as the HTML object will no longer be the same after the first time you filter.
// Users will be forced to refresh the page if they want to filter twice

// that means

// 1) we gotta save the list of names in a variable. Let's crawl through
// the listOfNames HTML element and push just the names (the innerText)
// into an array.

let namesArray = [];
allNames.forEach((name) => {
  namesArray.push(name.innerText);
})

// The lines above when the page is loaded. Now our names are safe.

// 2) the filter letters need to listen to another event that
// filters the names stored in namesArray
// and injects brand new HTML on the document. I might not need listOfNames
// for this and actually need the element that holds the list.

const listOfNamesHolder = document.querySelector('.name-list');

// 3) The filter letters we worked with at the beginning need to
// listen to a new event that triggers the filtering.

listOfLetters.forEach((letter) => {
  letter.addEventListener('click', () => {
    filterNameList(letter);
  })
})

// 4) Now I need to write function that does the heavy lifting.

// To filter effectively, I know that the first letter
// of a given name needs to match the letter in the filter.

// once I get the filtered names, I will
// empty the html in listOfNamesHolder
// iterate through the filtered names I just got and
// add new HTML elements to the list containing the name.

function filterNameList(letter) {
  let filteredNames = namesArray.filter((name) => {
    return name[0] == letter.innerText;
  })

  listOfNamesHolder.innerHTML = '';
  filteredNames.forEach((name) => {
    listOfNamesHolder.innerHTML += `<li> ${name} </li>`
  })
}


