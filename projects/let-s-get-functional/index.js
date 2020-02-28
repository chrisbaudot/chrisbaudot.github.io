// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodow-chrisbaudot");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./chrisbaudot.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {

    //I: array
    //O: number
    //C: use filter
    // get access to each customer obj and filter out the males
    return _.filter(array, function(customerObj, index, array){
        //checking to see if my customerObj is a male useing the gender key
        return customerObj.gender = "male";
    }).length; //cain on  .length to get number of male customers
};


var femaleCount = function(array){
    //I: array
    //O: number
    //C: use reduce
    // get access to each customer obj and filter out the females
    // return _.filter(array,array, function(customerObj, index, array){
    //     //checking to see if my customerObj is a female useing the gender key
    //     return customerObj.gender = "female";
    // }).length; //cain on  .length to get number of female customers
 
   return _.reduce(array, function(customerObj, index, array){
        return customerObj.gender = "female";
    }, 0).length;
    
};
var oldestCustomer = function(array){
    
};

var youngestCustomer;

var averageBalance;

var firstLetterCount;

var friendFirstLetterCount;

var friendsCount;

var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
