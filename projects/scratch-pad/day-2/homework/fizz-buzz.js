// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    
    //we will start with a number counter that will print numbers counting 1 to 100. 
    
        for (var i = 1; i <= 100; i++){
        if (i % 15 === 0){
            console.log('FizzBuzz'); //When the values are multipules of 15 print “FizzBuzz”
        } else if (i % 5 === 0){
            console.log('Buzz'); //When the values are multipules of 5 print “Buzz”
        } else if (i % 3 === 0){
            console.log('Fizz'); //when the values are multipules of 3 print "Fizz"
        } else {
            console.log(i); // this will print the curent number
        }
    }
    


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}