// Task 1:
// On click, the square should change color
// if red, it should become blue
// if blue, it should become red


// Step 1 - Select the square. We can do that with document.querySelector

const square = document.querySelector('.square');


// Once I click on square, I want it lose the class 'red' and gain the class
// 'blue'
// the code below works well because the initial state of the square
//  is red already :-)

square.addEventListener('click', () => {
  square.classList.toggle('red');
  square.classList.toggle('blue');
})
