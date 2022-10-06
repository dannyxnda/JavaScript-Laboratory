"use strict";
/**
 * The properties are private and can not be reassigned.
 * I'm using a closure to store the state as React does. :D
 */
function useState(init) {
  let state = init;
  function setState(newState) {
    state = newState;
  }

  return [state, setState];
}

function Person(name, age) {
  const [state, setState] = useState({ name, age });

  this.getName = function () {
    return state.name;
  };
  this.getAge = function () {
    return state.age;
  };
  this.setName = function (_name) {
    setState({ ...state, name: _name });
  };
  this.setAge = function (_age) {
    setState({ ...state, age: _age });
  };
}

// const p = new Person("John", 20);

let freezingPerson = Object.freeze(new Person("John", 20));
let p2 = new Person("Josh2", 10);

// freezingPerson.name = "Dannyhihi";
p2.name = "Danny";

frozenPerson.setName("Unfreesed");

// console.log(freezingPerson, p2);
console.log(frozenPerson.getName());
