/**
 * The properties is not private and can be reassigned.
 */

function Person(name, age) {
  this.name = name;
  this.age = age;

  this.getName = function () {
    return this.name;
  };
  this.getAge = function () {
    return this.age;
  };
  this.setName = function (_name) {
    this.name = _name;
  };
  this.setAge = function (_age) {
    this.age = _age;
  };
}

const p = new Person("John", 20);
// p.name = "John";

p.name = "Danny";
console.log(p.getName()); // Danny
