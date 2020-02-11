// #!/usr/bin/env node

'use strict';

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as 
 *  parameters and returns an Array containing all integers 
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  BONUS: If the first argument is greater than the second, 
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
    // YOUR CODE GOES BELOW HERE //
    
    //I: two number
    //O: an array
    //E: Will work if if the first number  is greater or less than the second number
    
    //We will make an array to house the values that will be created
    let values = [];
    
    // we will have to take into acount the values of both start and end, as that will modify our loop
    if (start < end){ //if start is greater than end we will loop through the array taking the values in assending order
        for (let i = start; i <= end; i++){
            values.push(i); //push the curent value into values
        }
    } else if (end < start){ //if end is greater than start we will lopp through the array taking the values in decending order
        for (let i = start; i >= end; i--){
            values.push(i); //push the curent value into values
        }
    }
    return values; // returing the array
    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.range = range;
}