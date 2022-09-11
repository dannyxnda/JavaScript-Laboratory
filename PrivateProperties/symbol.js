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

var p = new Person("John", 20);

p.name = "DAniel";

console.log(p.getName());
