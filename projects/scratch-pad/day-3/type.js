// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    
    //I: a value
    //O: a boolean
    //Need to find out if value is an array
    if (Array.isArray(value)){ //used Array.isArray to find out if the value is an array.
        return true //return true if value is an array
    } else {
        return false; //return false if value is not an array
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    
    //I: a value
    //O: a boolean
    //E: arrays, dates, and null will be seen as an object
    // need to find out if the value is an object
    if(Array.isArray(value)){ //used Array.isArray to find out if the value is an array.
        return false; //return true if value is an array
    } else if (value === null){ //if value is null we will return false
        return false;
    } else if (value instanceof Date) { // if date return false
        return false;
    } else if (typeof value === "object"){ // nowif type of is an object return true
        return true;
    } else {
        return false; // now return false for everything else
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    
    //I: a value
    //O: a boolean
    //E: arrays, dates, and null will be seen as an object
    // need to find out if the value is an object or an array
    if(Array.isArray(value)){ //used Array.isArray to find out if the value is an array.
        return true; //return true if value is an array
    } else if (value === null){ //if value is null we will return false
        return false;
    } else if (value instanceof Date) { // if date return false
        return false;
    } else if (typeof value === "object"){ // now if type of is an object return true
        return true;
    } else {
        return false; // now return false for everything else
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    
    //I: a value
    //O: a string
    //E: arrays, dates, and null will be seen as an object
    // need to tell what kind of value this is as a string
    if(Array.isArray(value)){ //used Array.isArray to find out if the value is an array.
        return "array"; //return "array"
    } else if (value === null){ //if value is null return null
        return "null";
    } else if (value instanceof Date) { // if date return "date"
        return "date";
    } else {
        return typeof value; // will return value's datatype in a string form
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
