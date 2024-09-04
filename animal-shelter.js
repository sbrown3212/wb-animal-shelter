const animalData = require('./animal-data.json');

class Animal {
  constructor(name, species, color, hunger=50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet(greeting='Hi') {
    console.log(`${greeting}, I'm ${this.name} the ${this.species}`);
  }

  feed(food='food') {
    this.hunger -= 20;
    console.log(`Yum, I love ${food}`);
  }
}

class Cat extends Animal {
  constructor(name, color, hunger=50) {
    super(name, 'cat', color, hunger);
    this.food = 'fish';
  }

  greet(greeting='Meow') {
    super.greet(greeting);
  }

  feed(food=this.food) {
    super.feed(food);
  }
}

class Dog extends Animal {
  constructor(name, color, hunger=50) {
    super(name, 'dog', color, hunger);
    this.food = 'kibble';
  }

  greet(greeting='Woof') {
    super.greet(greeting);
  }

  feed(food=this.food) {
    super.feed(food)
  }
}

class AnimalShelter {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal)
  }

  adopt(animal) {
    const animalIndex = this.animals.indexOf(animal);
    this.animals.splice(animalIndex, 1);
  }

  getAnimalsBySpecies(species) {
    return this.animals.filter((animal) => animal.species === species)
  }
}

const shelter = new AnimalShelter();

for (const a of animalData) {
  // QUESTION: why can't I deconstruct animal?
  // const { name, species, color, hunger } = a;

  const hunger = a.hunger ? a.hunger : 50;

  let animal;

  switch (a.species) {
    case 'dog':
      animal = new Dog(a.name, a.color, hunger);
      break;
    case 'cat':
      animal = new Cat(a.name, a.color, hunger);
      break;
    default:
      animal = new Animal(a.name, a.species, a.color, hunger);
      break;
  }
  
  // if (a.species === 'dog') {
  //   animal = new Dog(a.name, a.color, hunger);
  // } else if (a.species === 'cat') {
  //   animal = new Cat(a.name, a.color, hunger);
  // } else {
  //   animal = new Animal(a.name, a.species, a.color, hunger);
  // }

  shelter.addAnimal(animal);
}

// console.log(shelter.animals);
// console.log(shelter.getAnimalsBySpecies('dog'));

// const nickels = new Cat('nickels', 'gray', 500)
// console.log(nickels)
// console.log(nickels.greet())
// console.log(nickels.feed())
// console.log(`Nickels' hunger:`, nickels.hunger)

// const spot = new Dog('Spot', 'brown', 90)
// console.log(spot)
// console.log(spot.greet())
// console.log(spot.feed())
// console.log(`Spot's hunger:`, spot.hunger)

for (const a of shelter.animals) {
  a.greet();
  a.feed();
}