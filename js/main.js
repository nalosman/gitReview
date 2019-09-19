import Team from './modules/DataObject.js';
// this is an IIFE -> Immediatly Invoked Function Expression
// this is the Javascrip Module Pattern
(()  => {

  console.log('fired!!!');

  let bioData = document.querySelector('.bio-wrapper').children;

  // populate the children with the data object values
  
  // bioData[0].textContent = Person.name;
  // bioData[1].textContent = Person.role;
  // bioData[2].textContent = Person.bio;

  // bioData[0].textContent = Person["name"];
  // bioData[1].textContent = Person["role"];
  // bioData[2].textContent = Person["bio"];

  function parsePersonData() {
    // this = refers t oelement that called that function(the button ur clicking) trigger that called function; 
    let person = this.textContent;

    bioData[0].src = `images/${Team[person].avatar}`;
    bioData[1].textContent = Team[person].name;
    bioData[2].textContent = Team[person].role;
    bioData[3].textContent = Team[person].bio;
  }

  // 1. Loop through the object and build some UI
  //  add 'let ' to make person a local variable
  for (let person in Team) {
    console.log(person);

    // 2. create a button for each team member
    let currentButton = document.createElement("button");

    // 3. add person;s name to the button
    currentButton.textContent = person;
    // 4. add an event handler to button
    currentButton.addEventListener("click", parsePersonData);
    // 5. put the thbutton in the team section in index.html
    document.querySelector('.team').appendChild(currentButton);
  } 

})();