// const dog = {
//   name: 'Freida',
//   color: `Blue`,
//   hunger: 50,
//   mood: `happy`,
//   age: 2
// }
// console.log(`${dog.name} is feeling ${dog.mood}.`);

// // CREATE A VARIABLE WITH THE VALUE OF THE OBJECT WITHIN "dog"
// let {age} = dog;
// // let {age, color, name} = dog can also be done to destructure multiple items into variables
// console.log(age);

// // const dog2 = {
// //   name: `Buddy`,
// //   color: `grey`,
// //   age: 1
// // }

// // const {age:freidaAge} = dog;
// // const {age:buddyAge} = dog2;

// // console.log(freidaAge, buddyAge);

// // For loop in objects
// for (let attribute in dog) {
//   console.log(`The dog's ${attribute} is ${dog[attribute]}.`);
// }

// // A FUNCTION THAT IS STORED INSIDE OF AN OBJECT IS CALLED A "METHOD"

// class Dog {
//   constructor(name, color){ // THIS IS BASICALLY A FUNCTION INSIDE YOUR CLASS
//     this.name = name;
//     this.color = color;
//   }
//   bark(){
//     console.log(`Arf! I am ${this.name} the dog!`);
//   }
// }

// let dog1 = new Dog(`Freida`, `brown`)
// let dog2 = new Dog(`Sally`, `pink`)
// let dog3 = new Dog(`Balto`, `white`)

// console.log(dog3.bark())

// // MAKING A NEW CLASS FROM AN EXISTING CLASS
// // YOU CAN ADD EXTRA DETAILS OR FUNCTIONS TO THE EXTENDED CLASS THAT WILL NOT BE IN THE ORIGINAL EXISTING CLASS
// class Puppy extends Dog { // USE THE "extends" KEYWORD TO CALL UPON THE EXISTING CLASS FOR THE NEW CLASS
//   constructor(name, color, trainingLevel) {
//     super(name, color) // USE THE "super" KEYWORD TO BRING THE DETAILS FROM THE EXISTING CONSTRUCTOR INTO THE NEW CLASS CONSTRUCTOR

//     this.trainingLevel = trainingLevel
//   }

//   levelUp(num) {
//     this.trainingLevel += num
//   }
// }

let person = {
  firstName: `Luis`,
  lastName: `Velazquez`,
  age: 27
}


console.log(person.firstName)
console.log(person['lastName'])

const meal = {
  appeteizer: 'dumplings',
  entree: 'orange chicken',
  dessert: 'ice cream',
  drink: 'lemonade'
}

let {dessert: mydessert} = meal
let bestSodaEver = meal.drink // can be written as let bestSodaEver = meal['drink']

for (let key in meal){
  console.log(meal[key])
}

meal.chef = 'Gordon Ramsey'

delete meal.dessert

class Dog {
  constructor(nameParam, breedParam, ageParam){
    this.name = nameParam;
    this.breed = breedParam;
    this.age = ageParam;
  }
  greeting(otherDogName){
    console.log(`woof! Hello, ${otherDogName}! I am a dog as well, and my name is ${this.name}!`)
  }
}

let buster = new Dog('Buster', 'Border Collie', 12)
let lassie = new Dog('Lassie', 'Collie', 18)

lassie.greeting('Rex')

class Puppy extends Dog {
  constructor(name, breed, age, trainingLevelParam){
  super(name, breed, age)
  this.trainingLevel = trainingLevelParam
  }

}

let lilbleu = new Puppy('Bleu', 'golden', 1, 0)

console.log(lilbleu.trainingLevel)