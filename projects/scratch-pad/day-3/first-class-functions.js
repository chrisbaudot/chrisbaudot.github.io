// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //I: base is ether a string or a number 
    //O:a function 
    // we have to return a function that test whether a given value is greater than the base
    return function(input){ //create the function to return
        if (base < input) { //if input is greater than base return true
            return true;
        } else { //if not return false
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    
    //I: base is ether a string or a number 
    //O:a function 
    // we have to return a function that test whether a given value is less than the base
    return function(input){ //create the function to return
        if (base > input) { //if input is less than base return true
            return true;
        } else { //if not return false
            return false;
        }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    
    //I: a string
    //O: function
    //C: Has to work for both uppercase and lowercase letters
    // we will take the first letter/value of a string and compare it to the letter we have selected.
    
    return function(startStr){ // create a fuction to return with a peramiter startStr
      if (startsWith.toLowerCase() === startStr.toLowerCase().charAt(0)) { //if startStr first letter is equal to the startsWith (both lowercased) return true
          return true;
      } else { //if not return false
          return false;
      }
    };
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
    
    //I: a string
    //O: function
    //C: Has to work for both uppercase and lowercase letters
    // we will take the last letter/value of a string and compare it to the letter we have selected.
    
    return function(endStr){ // create a fuction to return with a peramiter endStr
      if (endsWith.toLowerCase() === endStr.charAt(endStr.length - 1).toLowerCase()) { //if endStr last letter is equal to the endsWith (both lowercased) return true
          return true;
      } else { //if not return false
          return false;
      }
    };    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
    
    //I: array
    //O: array
    //we will have to loop through the array with modify affecting each value of the array.
    let modifiedArray = []; //create an array to hold the modified values
    for (let i = 0; i < strings.length; i++){ // a loop through strings
        modifiedArray.push(modify(strings[i])); //pushing the modified strings elements into the modifiedArray
    }
    return modifiedArray; // modifiedArray is then returned with the modified values
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
//----------------------------------------------class work
    // //implimint a lopp to gain access to each element in the array
    // for (let i = 0; i < strings.length; i++){
    //     //test each value if false
    //     //if any are false return false 
    //     if(test(strings[i]) === false){
    //         return false
    //     }
    // }
    // // if all are true return true
    // return true; 
//----------------------------------------------Class work 
    //I: a string and a function
    //O: a boolean
    //C: all values must be true to return true.
    //We will start by creating a variable the will house all of the booleans.
    let booleanValues = []; // create array
    for (let i = 0; i < strings.length; i++){ // loop through strings
        booleanValues.push(test(strings[i])); //push the modified by test results to booleanValues
    }
    if (booleanValues.includes(false)){ // if false is in booleanValues return false
        return false;
    } else { //if all values are true return true
        return true; 
    }
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}