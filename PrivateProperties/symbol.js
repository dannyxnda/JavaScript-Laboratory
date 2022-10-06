"use strict";
/**
 * The properties are private and can not be reassigned.
 * Symbol is a primitive data type in JavaScript and it's unique, there is noway to get the nameKey and ageKey.
 */
function Person(name, age) {
  const nameKey = Symbol("name");
  const ageKey = Symbol("age");

  this[nameKey] = name;
  this[ageKey] = age;

  this.getName = function () {
    return this[nameKey];
  };

  this.getAge = function () {
    return this[ageKey];
  };

  this.setName = function (_name) {
    this[nameKey] = _name;
  };

  this.setAge = function (_age) {
    this[ageKey] = _age;
  };
}

const p2 = new Person("Josh2", 10);
p2.name = "Danny";

const frozenPerson = Object.freeze(new Person("John", 20));

// freezingPerson.name = "Dannyhihi";

// frozenPerson.setName("Unfreesed");
// console.log(frozenPerson, p2);

const sealedPerson = Object.seal(new Person("Seal1", 10));
// sealedPerson.name = "Seal2";
sealedPerson.setName("seal 2");

console.log("seal after set", sealedPerson);
