class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log("Some generic animal sound");
  }
}

class Dog extends Animal {
  constructor(species) {
    super(species);
  }

  bark() {
    console.log("Woof");
  }

  // Overriding the makeSound method for Dog
  makeSound() {
    console.log("Woof woof");
  }
}

class Cat extends Animal {
  constructor(species) {
    super(species);
  }

  purr() {
    console.log("Purr");
  }

  // Overriding the makeSound method for Cat
  makeSound() {
    console.log("Meow");
  }
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
