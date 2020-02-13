////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: two numbers and an optional thrid number-step
//O: an array
//C: add a step value to the range
//E: will work with negative numbers also, and return an empty array id start and end are equal.
// we will enter two numbers and a step number.
//if step is left blank we will us a ternary operator to equal 1 if start is less than end, or -1 if not.
function range(start, end, step = start < end ? 1 : -1) {
  // we wiil make an array to house the range
  let array = [];
  // if start ans end are equal we will return an empty array
  if (start === end ){
    return array;
  }
  
  // loop iterates up for positive values if step is positive, down if negative by the step value number.
  //useing the ternary operator to determan if we should count up or down based on the earlier ternary operator for step.
  for (let i = start; step >= 0 ? i <= end : i >= end; i+=step) {
    //we will push the value into the array
    array.push(i);
  }
  //we will return the array with all of the added values.
  return array;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: an array
//O: number
// ww will count all of the number in an array and return the total sum
function sum(numArray) {
  //we will make the counter start at 0
  let counter = 0;
  //looping throug the array we will add the curent value to the counter
  for (value of numArray) {
    counter += value;
  }
  return counter;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an array
//O: an array
//C: Cannot use revers metod
// We will loop bacwards throug the array pushing the values into a new array and return the new array when done.
function reverseArray(array) {
  //making a new array
  const newArray = [];
  for (let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an array
//O: an array
//C: I must swap places with the first an last value and so on, returning the same array modified. Can't use reverse
// We will have to creat a loop that will end at the floor length, even or odd this will return the same value
function reverseArrayInPlace(array) {
 //make the loop with half of the array length Math.floored as the end. this will acount for odd and even array lengths.
 for(let i = 0; i < Math.floor(array.length / 2); i++){
   //we now have to move the values and replace them with their corisponding index
   //it is easier to create a variable that will house the values
   let switched = array[i];
   array[i] = array[array.length - 1 - i];
   array[array.length - 1 - i] = switched;
 }
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an array
//O: object
// we will use the number values in the array to determen the amount of nested objects to create.
function arrayToList(array) {
  //we will creat a list with the value of null, as it is the deepesd nesed objec rest value, and alows to modify
  let list = null;
  // loop backwards through the array
  for (let i = array.length - 1; i >= 0; i--) {
    //the previous list value will be plcaed in the new value
    list = {value: array[i], rest: list};
  }
  //return the fully nested object
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: object
//O: array
// we will go through a list object and take the values to make an array.
function listToArray(list) {
  //create the array to house the deconstructed list
  const array = [];
  //now we will loop through the object pushing the values into the array
  for (let node = list; node; node = node.rest){
    array.push(node.value)
  }
  return array
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an element and an object
//O: object
//we will make the helper function that takes a value and a list and creates a new 
//list that adds the element to the front of the input list.  We will return an object.
function prepend(value, list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//I: an object and a number
//O: undefined or element
//E: we will have to take into acount if there is a list, 
function nth(list, num) {
if (num === 0){
    return list.value;
  } else {
    return nth(list.rest, num -1);
  }
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {

}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
