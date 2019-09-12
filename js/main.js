import Person from './modules/DataObject.js';
// this is an IIFE -> Immediatly Invoked Function Expression
// this is the Javascrip Module Pattern
(()  => {
//this is a self-invoking function

console.log('fired!!!');

console.log(Person);
})();