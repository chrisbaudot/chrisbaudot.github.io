// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

//I: value
//O: value
//Returns <value> unchanged
_.identity = function(value){
    return value;
}
/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/

//I: value
//O: string
//C: test if value is an array or null (they return "object with typeof")
//we will use if statment first to see if value is array, returing'array' if true.
//We will return "null" if value is equal to null
// for all other values we will return typeof string value.
_.typeOf = function(value){
    if (Array.isArray(value) === true){
        return "array";
    } else if (value === null){
        return 'null';
    } else {
        return typeof value;
    }
};



/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

//I: array and number
//O: array
//C: if numner is less than 1 or if array is not an array return an empty array, and we need to see if number is greater than array.length
//we will create an array litteral and an end number
// test if array is not an array or if the number is less than 1, we return an empty newArray
// if number is not a number we return the first value of the array
//testing if the number is greater than array.length we will determen the end of our for loop
//loop thriough array pushing the values into the newArray
//return newArray.
_.first = function(array, number){
    const newArray = [];
    let end = 0;
    if (!Array.isArray(array) || number < 1){
        return newArray;
    }
    if (typeof number !== 'number'){
        return array[0];
    }
    number > array.length ? end = array.length: end = number;
    for (let i = 0; i < end; i++){
        newArray.push(array[i]);
    }
        
    return newArray;
    
};

/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

//I: array and number
//O: array
//C: if numner is less than 1 or if array is not an array return an empty array, and we need to see if number is greater than array.length
//we will create an array litteral and an end number
// test if array is not an array or if the number is less than 1, we return an empty newArray
// if number is not a number we return the first value of the array
//testing if the number is greater than array.length we will return the array
//loop backwards through the array the array length -<number> unshifting the values the values into the newArray
//return newArray.

_.last = function(array, number){
    const newArray = [];
    if (!Array.isArray(array) || number < 1){
        return newArray;
    }
    if (typeof number !== 'number'){
        return array[array.length - 1];
    }
    if (number >= array.length){
        return array;
    }
    for (let i = array.length - 1; i >= array.length - number; i--){
        newArray.unshift(array[i]);
    }
    return newArray;
};


/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/

//I: array, and value
//O: number
//E: what if there is more than one value/ what if value is not in array
//loop over the array testing if the value is equal to the arrays indexed value, if so return the index number of the array.
//if not found return -1;

_.indexOf = function(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return i;
        }
    }
    return -1;
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/

//I:an array and a value
//O: boolean
//E: use === strickly equal, and return false if no value is give.
//we will loop through the array, if the value  is equal to the value in the array's 
//value in the index we return true.  after the loop if there is no true value we return false.

_.contains = function(array, value){
    for (let i = 0; i < array.length; i++){
        if (array[i] === value){
            return true;
        }
    }
    return false;
};

/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/

//I: collection, and function
// we will deturmen if the colection is an array or object, to preform a porper 
//loop though the collection. The action can be used to effect the loop at a latter time.
// We are only looping through the collection.

_.each = function (collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
};

/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/

//I: array
//O: new array
//E: only looks at simple datatypes, does not look at referance values.
//C: we will have to use indexOf
// we will create an array literal to house our unique values. We will loop thriught
// we will loop through the array and if the array index is not in the newArray we will 
// push it into the new array. After the loop we will return the new array.

_.unique = function(array){
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        if (_.indexOf(newArray, array[i]) === -1){
            newArray.push(array[i]);
        }
    }
    return newArray;
};

/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/

//I: an array, and a function
//O: a new array of the element that returned true
//C: must use each
//E: what if the value is not true or false? it only keeps true values.
// we will create a new array. useing each we will loop through the array and if
// the action finds the value to be true, we will push the value into the new arry.
// out of the loop we will return the newArray.

_.filter = function(array, action){
    const newArray = [];
    _.each(array, function(element, i, array){
        if (action(array[i], i, array) === true){
            newArray.push(array[i]);
        }
    });
    return newArray;
};

/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

//I: array and a function
//O: an array of false values
//C: must use filter
//we will return a filtered array that has returned false values.
_.reject = function(array, action){
    return _.filter(array, function(element, i, array){
        return (!(action(element, i, array)));
    });
};

/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/

//I: an array and a function
//O: an array of two arrays
//E: one array will be truthy, the other is falsy
//useing filter to find all the truthy values and reject to find all the falsy 
//values, we return a new array with the truth array from filter and a falsy array from reject.

_.partition = function(array, action){
    let truthy = _.filter(array, function(element, i, array) {
        return action(element, i, array);
    });
    let falsy = _.reject(array, function(element, i, array) {
        return action(element, i, action);
    });
    return [truthy, falsy];
};

/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

//I: a collection and a function
//O: a new array
//we will create a new array to store the changed values.  We will them loop through 
//the collection with each. pushing each element into the new array as we prefore the 
//action function on each element. after we return the new array
_.map = function(collection, action){
    const newArray = [];
    _.each(collection, function(element, i, array){
        newArray.push(action(element, i, array));
    });
    return newArray;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

//I: an array of objects, and a key
//O: an array
// useing map we will pluck the values from the objects in the array collection.
//An array filled with the values will be returned.
_.pluck = function(array, key){
    return _.map(array, function(element, i, array){
        return element[key];
    });
};

/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/


//I: a collection and a function
//O: boolean
//E: What if the function does not return a boolean and what if a function is not given?
// we will creat a variable work to start with a true value.  If action, looping 
//through the collection, finds a value false change work to false. Else loop 
//through the collection and if a element is false change work to false. then return work.

_.every = function(collection, action){
    let work = true;
    if (action){
         _.each(collection, function(element, i, array){
            if (action(array[i], i, array) === false){
                work = false;
            }
        });
    } else {
        _.each(collection, function(element, i, array){
            if (element === false){
                work = false;
            }
        });
    }
    return work;
};

/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

//I: a collection and a function
//O: boolean
//E: if function does not return a boolean, or if function is not given 
// we will create a variable 'work' to start with a false value.  If action, looping 
//through the collection, finds a value true change work to true. Else loop 
//through the collection and if a element is true change work to truee. Then return work.


_.some = function(collection, action){
    let work = false;
    if (action){
         _.each(collection, function(element, i, array){
            if (action(array[i], i, array) == true){
                work = true;
            }
        });
    } else {
        _.each(collection, function(element, i, array){
            if (element === true){
                work = true;
            }
        });
    }
    return work;
};

/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/

//I: array, function, and seed
//O: value
//E: If seed is not included, the first value will be the accumulater.
// we will decalre previousResult.  if seed is defined previousResult is equal to seed.
// we will loop through the array with the function action folding the previous result 
//becoming the new value of previousResult.
//else (with seed undefined) previousResult will be equal to the first index of the array.
//Loop through the array, with the action having the previousResult interact with the 
//curent value becoming eqiual to previousResult. Finaly, out of the loop, return 
//previousResult.

_.reduce = function(array, action, seed){
    let previousResult
    //if there is a seed
    if (seed !== undefined){
        previousResult = seed;
        //use each to gain acses to each value in the array
        _.each(array, function(e, i, a){
            // calling funtion for every element passing previous result, element, index
            previousResult = action(previousResult, e, i, a);
        });
    //if no seeduse the first element equal the seed
    } else {
        previousResult = array[0];
        //implement a for loop to start at the array[0]
        for (let i = 1; i < array.length; i++){
            previousResult = action(previousResult, array[i], i, array)
        }
    }
//return previous result
 return previousResult


};

/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/

//I: an Object and posibly more than one other object
//O: object
//we will use the spread operator to have the objects copy and update the values 
//for object1, then object1 is returned.  
_.extend = function(object1, ...object){
    for (var i = 0; i < object.length; i++){
        Object.assign(object1, object[i]);
    } return object1;
};

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
