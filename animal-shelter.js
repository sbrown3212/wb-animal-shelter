const animalData = require('./animal-data.json');

class Animal {
  constructor(name, species, color, hunger=50) {
    this.name = name;
    this.species = species;
    this.color = color;
    this.hunger = hunger;
  }

  greet() {
    console.log(`Hi, I'm ${this.name} the ${this.species}`);
  }

  feed() {
    this.hunger -= 20;
    console.log(`Yum, I love food`);
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
  // const { name, species, color, hunger } = animal;

  const hunger = a.hunger ? a.hunger : 50;
  const animal = new Animal(a.name, a.species, a.color, hunger);

  shelter.addAnimal(animal);
}

// console.log(shelter.animals);
console.log(shelter.getAnimalsBySpecies('dog'));