function Animal(name) {
  this.name = name;
}

Animal.prototype.setName = function (name) {
  this.name = name;
};

Animal.prototype.getName = function () {
  return this.name;
};

a = new Animal("a");
a.setName("a new name");
console.log(a.getName());
