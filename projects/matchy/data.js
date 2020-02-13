/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {};
animal.species = "cat";
animal['name'] = "Tom";
animal.noises = [];
console.log(animal);

//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = [];
noises[0] = "hiss";
noises[noises.length] = "Meow";
noises.unshift("Skee");
noises[noises.length] = "Purr";
console.log(noises.length);
console.log(noises[noises.length - 1]);
console.log(noises);
//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal["noises"] = noises;
animal.noises.push("YAWOL");
console.log(animal);
/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * We can use dot or bracket notation to find and modify our key/vaule pairs.
 * 2. What are the different ways of accessing elements on arrays?
 * Bracket notationis useful, as we can use the index of each value of an array.
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
console.log(animals);
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
animals.push(duck);
console.log(animals);
var dog = { species: 'dog', name: 'Fido', noises: ['Bark', 'wine', 'Lick', 'Happy noises'] };
var owl = { species: 'owl', name: 'Piggy', noises: ['Who', 'What', 'When', 'Where', 'Why', 'How'] };
animals.push(dog, owl);
console.log(animals);
console.log(animals.length);
//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// frends should be an array as array is best for list
var friends = [];
//I: array
//O: index 
// create a function that takes in the array animals and used Math.random to 
//select a random index to receve the friends array.
function getRandom(animals){
    // we will use Math.random and multiply it by the array length so we will 
    //select an existing animal value.
   var index = Math.floor(Math.random() * Math.floor(animals.length));
   //return the index number we will use next.
   return index;
}
//we will push a random animals name into friends.
friends.push(animals[getRandom(animals)].name);
console.log(friends);
// now we will randomly push a friends array in to an animals object
animals[getRandom(animals)].friends = [];
console.log(animals);


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
