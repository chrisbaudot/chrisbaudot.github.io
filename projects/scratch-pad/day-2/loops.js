// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  
  //We will make a loop that will just print each value in an array
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  
  //We will make a loop that goes from the last index of an array printing each index.
  for (var i = array.length-1; i >= 0; i--){
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // using a for in loop go through an abject returning an array containing the object keys
  var array = []; //create an array that will house all of the keys
  for (var key in object){
    array.push(key); // this will push the key into the array
  }
  return array; // returns an array of the keys
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  
  // useing a for in loop over the object print its keys
  for (var key in object){
    console.log(key); // this will print each object key
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  //use a for in loop to return an objects values in an array
  var array = []; //create an array that will house all of the values
  for (var key in object){
    array.push(object[key]); // this will push the values into the array
  }
  return array; // returns an array of the values
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  
  // useing a for in loop over the object print its values
  for (var key in object){
    console.log(object[key]); // this will print each object value
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
  
  //create a counter, length, to count each key/value pair in an object useing a for in loop.
  var length = 0; //we will start the length at zero.
  for (var key in object){
    length ++; // we will add one each time a key/value pair is seen in the object
  }
  return length; // we will return the number that represents the total key/object pairs
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
  
  //sense object are not in order, we can use an array to place the values before reversing the vaules with a for loop of the array
  var array = []; // create an arry to house the values
  for (var key in object){
    array.unshift(object[key]); //this will revers the array by pushing the curent value behind the next value.
  }
  for (var i = 0; i < array.length; i++){
    console.log(array[i]); // will print each value of the array, which will be the values of the object in reverse.
  }
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
