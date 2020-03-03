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
        return customerObj.gender === "male";
    }).length; //cain on  .length to get number of male customers
};


var femaleCount = function(array){
    //
    //I: array
    //O: number
    //C: use reduce
    // get access to each customer obj and filter out the females
    // return  the reduced array that checkes if the ladyCount.gender is female 
    // we will add one to the customerObj. after the searching through the array
    // we will return the number of females.
 
   return _.reduce(array, function(customerObj, ladyCount){
        if (ladyCount.gender === "female"){
            return customerObj +1;
        }
        return customerObj;
    }, 0);
    
};
var oldestCustomer = function(array){
    // we must find the oldest customer
    //I: array
    //O: string
    // we will make a variable "name" that is an array reduced to search through 
    //the array to compare the curent customer with the privous customer. if the 
    //curent cust is greater than the previous cust we will return current customer 
    //if not we will return the previous customer.  Then we return the name of the name object.
    let name = _.reduce(array, function(previousCustomer, currentCustomer){
        if(currentCustomer.age > previousCustomer.age){
           return currentCustomer;
        }
        return previousCustomer;
    });
    return name.name;
};

var youngestCustomer = function(array){
    // we must find the youngest customer
    //I: array
    //O: string
    // we will make a variable "name" that is an array reduced to search through 
    //the array to compare the curent customer with the privous customer. if the 
    //curent customer is less than the previous customer we will return current customer 
    //if not we will return the previous customer.  Then we return the name of the name object.
    let youngName = _.reduce(array, function(previousCustomer, currentCustomer){
        if(currentCustomer.age < previousCustomer.age){
           return currentCustomer;
        }
        return previousCustomer;
    });
    return youngName.name;
};

var averageBalance = function(array){
    //Find the average balance of all customers
    //I: Array
    //O: Number
    //we will create a variable totalBalance that is the reduced total of all the blances in the array.
    //the blances will have to be changed into numbers from strings by removing the "$" and ","
    //We will find the average balance by deviding the total of the balanced by the array length. multiplied by 100.
    //Then we return the final average.
    let totalBalance = _.reduce(array, function(prev, element, index){
        let balance = parseInt(element.balance.replace(/[^\w\s]/gi, ""),10);
        prev += balance;
        return prev;
    }, 0);
    let average = (totalBalance/(array.length * 100));
    return average;
};

var firstLetterCount = function(array, letter){
    //Find how many customer's names begin with a given letter
    //I: an array and a letter(string)
    //O: number
    //we will return the reduced array. as we iterate, If the current name's first 
    //letter (undercased) equals the letter (also lowercased) we will add one to previous.
    //returning previous.
    return _.reduce(array, function(previous, current, index){
        if(current.name[0].toLowerCase() === letter.toLowerCase()){
            previous ++;
        }
            return previous;
    }, 0);
};

var friendFirstLetterCount = function(array, customer, letter){
    // Find how many friends of a given customer have names that start with a given letter
    //I: Array, Customer, Letter
    //O: Number
    //we will return the reduced array to iterate if the customer name is equal to 
    //the current customer (both lowercased) then we will check to see if the first 
    //letter is also equal to the letter in the freinds key array. So if the curent name 
    //in friends has the same first letter as letter we will add one to previous.
    //then we will retrn previous.
        return _.reduce(array, function(previous, current, index){
        if(current.name.toLowerCase() === customer.toLowerCase()){
            return _.reduce(current.friends, function(previous, current, index){
                if(current.name[0].toLowerCase() === letter.toLowerCase()){
                    ++ previous;
                } else {
                    return previous;
                }
                    return previous; 
            }, 0);
        } else{
            return previous;
        }
    }, 0);
};

var friendsCount = function(array, name){
    //Find the customers' names that have a given customer's name in their friends list
    //I: array and string(name)
    //O: array
    // we will retrn the array reduced, where we take the variable list (that is 
    //equal to the plucked curent friends name). Now useing contains, if the list's 
    //name matches the name, we will push thatr name into the array. then we return the array.
    return _.reduce(array, function(previous, current){
        let list =  _.pluck(current.friends, "name");
        if (_.contains(list, name) === true){
             previous.push(current.name);
        }
             return previous;
        }, []);
};

var topThreeTags = function(array){
    //Find the three most common tags among all customers' associated tags
    //I: array
    //O: array
    //create a variable all tags as an array literal
    let allTags = [];
    //newTags is an array of all tags from customers
    let newTags =  _.reduce(array,function(prev,curr,i){
      if(curr.tags !== undefined){
          allTags.push(curr.tags);
      }
      return  [].concat(...allTags);
    });
    // Here we gather a count of all of the tags and make a object with the tags as the key and the number as the value.  
    let tags = _.reduce(newTags,function(prev,curr){
          if(prev[curr] === undefined){
              prev[curr] = 1;
          } else {
              prev[curr]++;
          } return prev;
    },{});
    // we create a countArray as a litteral array.
    let countArray = [];
    //adds key/value pair to the count array as we iterate
    _.each(tags,function(count, word, object){
        countArray.push([word, count]);
    });
        countArray.sort(function(a,b){
        return b[1] - a[1];
    });
    //We then create the array of the top three values, before return the topThree 
    let topThree = [];
    for(var i = 0; i < 3; i++){
        topThree.push(countArray[i][0]);
    } 
    return topThree;
};

var genderCount = function(array){
    //Create a summary of genders
    //I: array
    //O: an object
    //C: use reduce
    //E: there are three gender values: Male, Femail, and Non-bianry
    //lets first create a literal object, genderObj.  We will fill the genderObj with
    // a gender and count key/value pairs.
    let genderObj = {};
    //we will use reduce to get a count of all the males
    genderObj.male =  _.reduce(array, function(prev, current, i){
        if(current.gender === "male"){
            prev++;
        }
        return prev;
    }, 0),
    //we will use reduce to get a count of all the females
    genderObj.female = _.reduce(array, function(prev, current, i){
        if(current.gender === "female"){
            prev++;
        }
        return prev;
    }, 0),
    // then we will use reduce to get a count of all the non-bianary.
    genderObj["non-binary"] = _.reduce(array, function(prev, current, i){
        if(current.gender === "non-binary"){
            prev++;
        }
        return prev;
    }, 0);
    // onece the three key/value pairs are compleate we will have genderObj be returned.
    return genderObj;
};

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
