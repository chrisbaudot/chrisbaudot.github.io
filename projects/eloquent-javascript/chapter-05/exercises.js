// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: an array of arrays
//O: an array
//C: must use reduce and concat
// Use the reduce method in combination with the concat method to “flatten” an array of arrays into a single array that has all the elements of the original arrays.
function flatten(array) {
  //we will reduce the array into a singel array.
  return array.reduce(function(newArray, current){return newArray.concat(current)}, []);
}


// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: a value and function
//O: -
/**
 * Write a higher-order function loop that provides something like a for loop statement. 
 * It takes a value, a test function, an update function, and a body function. Each iteration, 
 * it first runs the test function on the current loop value and stops if that returns false. 
 * Then it calls the body function, giving it the current value. Finally, it calls the update 
 * function to create a new value and starts from the beginning.
 * 
 * When defining the function, you can use a regular loop to do the actual looping.
 */
 //we make the paramiters start value, test function, update function, and body function.
function loop(value, test, update, body){
  //make a loop that starts at the inital value; then i will be effected by the test function; then i will be iterate by the update function
  for(let i = value; test(i); i = update(i)){
  //i will be affected by the body function each loop.
    body(i);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: an array, 
//O: boolean
/**
 * Analogous to the some method, arrays also have an every method. This one returns 
 * true when the given function returns true for every element in the array. In a way, 
 * some is a version of the || operator that acts on arrays, and every is like the && 
 * operator.Implement every as a function that takes an *array* and a *predicate* 
 * function as parameters.
 */
 //it looks like a normal loop will not work, but a for of loop works
function every(array, predicate) {
  // go through each element of the array, and if the element noes not matches the predicate funtion return false
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  //retrun true if we make it through the who loop.
  return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

//I: string
//O: string
/**
 * Write a function that computes the dominant writing direction in a string of text. 
 * Remember that each script object has a direction property that can be "ltr" (left 
 * to right), "rtl" (right to left), or "ttb" (top to bottom). The dominant direction 
 * is the direction of a majority of the characters that have a script associated with 
 * them. The characterScript and countBy functions defined earlier in the chapter are 
 * probably useful here.
 */ 
// for the first test 100% Latin; for the second test 25% Latin, 75% Arabic useing textScripts
//useing the helper functions may help us solve this code
function dominantDirection(text) {
  //useing the first part of countBy 
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");
  // at this point the 100% latin will be 
  // 0: {name: "ltr", count: 5} 
  // length: 1
  
  // at this point the 25% Latin, 75% Arabic will be 
  // 0: {name: "ltr", count: 3} 
  // 1: {name: "rtl", count: 9} 
  // length: 2
  
  //we will have to use two sets of if statments.  first if there is no value, then we 
  //test if there is onle one value, and finalit if there are more that one we will 
  //test if they are equal or witch one is dominant
  
  //if there is no length there is no direction
  if (scripts.length === 0){
    return 'no dominant direction found';
  //if the length is one there will be only one direction
  } else if (scripts.length === 1) {
    return scripts[0].name;
  //more than one we will have to test if they are equal or witch one will have the dominatDirection
  } else {
    // useing reduce if both values are equal there is no dominant value
    if (scripts.reduce((accum, current) => accum.count === current.count)) {
        return 'no dominant direction found';
        //in all other cases the greater of the 
      } else {
        return scripts.reduce((accum, current) => accum.count >= current.count ? accum.name : current.name);
      }
  }
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
