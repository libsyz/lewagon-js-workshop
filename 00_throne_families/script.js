
let currentFamily = "Starks"

const theStarks = ["Jon", "Arya", "Sansa", "Bronn"];
const theLannisters = ["Tyrion", "Cersei", "Jamie"];
const header = document.querySelector('.header');

const body = document.querySelector('body');
const listBucket = document.querySelector('.list-bucket');
const surnameButton = document.querySelector('.surname-button');

if (currentFamily == "Starks") {
  body.classList.add("stark");
  header.innerText = 'Enter the Starks!'
  theStarks.forEach((stark) => {
    listBucket.innerHTML += `<li> ${stark} </li>`
    })
  }
  else if (currentFamily == "Lannisters") {
    body.classList.add("lannister");
    header.innerText = 'Enter the Lannisters!'
    theLannisters.forEach((lannister) => {
      listBucket.innerHTML += `<li> ${lannister} </li>`
    })
  }




surnameButton.addEventListener('click', () => {
  let surname = undefined;
  if (currentFamily == "Starks") {
     surname = "Stark";
  }
  else if (currentFamily == "Lannisters") {
     surname = "Lannister";
  }
  document.querySelectorAll('li').forEach( (familyMember) => {
    familyMember.innerText += ` ${surname}`
  })
})
