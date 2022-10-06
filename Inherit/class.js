"use strict";

class Animal {
  /**
   *
   * @param {string} name name
   * @param {string} type water | land | both
   */
  constructor(name, type) {
    this.name = name;
    this.type = type;
    this.sound = null;
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setType(type) {
    this.type = type;
  }

  getType() {
    return this.type;
  }
}

class Dog extends Animal {
  /**
   *
   * @param {string} color color of the dog
   */
  constructor(name, color) {
    super(name, "land");
    this.color = color;
    this.sound = "Go go";
  }
}

class Husky extends Dog {
  // constructor(color, name) {
  //   super(name, color);
  //   this.color = "constructor color";
  // }
  color = "White";
  setColor(c) {
    this.color = c;
  }
}

class Cat extends Animal {
  sound = "Meo meo";
}

const generalDog = new Dog("generalDog");

const myHusky = new Husky("hussskyyyyyy");

console.log(generalDog, myHusky);
