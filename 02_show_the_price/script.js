// Task
// When you click on any of the items,

// should show on the price box

// Tricky huh? Where do you get the data from?
// Tip 1: Check out the data-price html attribute
// Tip 2: Visit this website
// https://davidwalsh.name/element-dataset
// Good luck!

// Step 1 - Select what you need in the HTML
// I need all the items - use querySelectorAll
// I need the price display - use querySelector

const items = document.querySelectorAll('.item');
const priceDisplay = document.querySelector('.price-display');


// Step 2 - Each of the items on the list should listen for a click
// That click will call a function that changes the price on Display

items.forEach((item) => {
  item.addEventListener(('click'), () => {
    changePrice(item);
  })
})

// Step 3 - Write a function that changes the inner text of priceDisplay
// using the list item that was clicked.

function changePrice(item) {
  console.log(item.dataset);
  priceDisplay.innerText = `${item.dataset.price} $`;
}
