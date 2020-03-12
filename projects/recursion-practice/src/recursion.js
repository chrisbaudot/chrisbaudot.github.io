// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  //base case - n is equal to zero, and null if the n is less than 0
  if (n === 0 ){
    return 1;
  } else if (n < 0){
    return null;
  }
  // recursive case - we will multiply n by factorial with n minus one.
  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
//I: array
//O: number
var sum = function(array) {
  //base case - when length of the array is zero we will end
  if (!array.length){
    return 0;
  }
  //Recursive case - 
  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
 
};

// 4. Check if a number is even.
//I: number
//O: boolean
var isEven = function(n) {
  //base case when n becomes 0 we return true, if not return false
  if (n === 0){
    return true;
  } else if (n === 1){
    return false;
  }
  //recursive call- if n is spositive return isEven minus two, if not return isEven plus two
  if (n > 0){
    return isEven(n - 2);
  } else if (n < 0) {
    return isEven(n + 2);
  }
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
//I: array
//O: number
var sumBelow = function(n) {
  //base case when n is zero return zero
  if (n === 0){
    return 0;
  }
  //recursive call if n is positive return n minus one plus the sumBelow with n 
  //minus one, and if n is a negative number add on to n and the sumBelow function
  if (n > 0){
    return n - 1 + sumBelow(n - 1);
  } else if (n < 0){
    return n + 1 + sumBelow(n + 1);
  }
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
//I: two numbers
//O: an array
//we will have two number, and output an array will all of the numbers between.
var range = function(x, y) {
  // we need to see if x minus y is 2, if so we will return x plus one as an array.
  if (x - y === 2) {
      return [x + 1];
  //base case if there is no distance between the numbers we return an empty array
  } else if (x === y + 1 || x === y - 1 || x === y) {
      return [];
  } else {
    //we also check to see if x is greater than y, we will create a variable val to equal x
    //we make x equal to y and y equal to val;
      if (x > y) {
          var val = x;
          x = y;
          y = val;
      }
      //num will equal range with x and y minus one with the subtracted y into nums
      var nums = range(x, y - 1);
      nums.push(y - 1);
      //if val is not undefined we sort nums with b minus a
      if (val !== undefined) {
          nums.sort(function (a, b) {
              return b - a;
          });
      }
      // we then return the sorted array
      return nums;
  }
};
// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
//I: two numbers
//O: number
var exponent = function(base, exp) {
  //base case, when exp is 0 we return 1
    if (exp === 0) {
        return 1;
        //recursive call if exp is positive we multiplu the bace by the exponet with exp minus one
    } else if (exp > 0) {
        var result = exponent(base, exp - 1) * base;
        //if exp is negative we multiplu the base by the exponet with exp minus one
    } else if (exp < -1) {
        var result = exponent(base, exp + 1) / base;
        //else we return -exp devided by base
    } else {
        return -exp / base;
    }
    //then we return the result
    return result;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
//I: number
//O: boolean
var powerOfTwo = function(n) {
  // base case, when n is equal to one we return true, if n is less than one we return false
    if (n === 1) {
        return true;
    } else if (n < 1) {
        return false;
    }
    // recursive call is the powerOfTwo with n devided by 2
    return powerOfTwo(n / 2);
};

// 9. Write a function that accepts a string a reverses it.
//I: string
//O: string
var reverse = function(string) {
  //when the string is one or less we return the string
  if (string.length <= 1){
    return string;
  }
  //recursive call we return reverse with the string's first letter removed, and keped for the call stack
  return reverse(string.substring(1)) + string[0];
};

// 10. Write a function that determines if a string is a palindrome.
//I: string
//O: boolean
var palindrome = function(string) {
    // we create a variable start that is string at the first letter lowercased
    var start = string[0].toLowerCase();
    // we make a variable end that is the last letter lowercased
    var end = string[string.length - 1].toLowerCase();
    //base case is when the length is 2 or less we return true, but if the first and last letters are not equal we retun false
    if (string.length <= 2) {
        return true;
    } else if (start !== end) {
        return false;
    }
    //recursive call is the palindrome with the first and last values removed
    return palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
//I: two numbers
//O: number
//C: can not use higher math function than addition and subtraction
//base case is when x and y equal zero return zero
//recursive call if y is less than zero we return -x plus the multiply function with y plus one
//else return x plus the multiply function with y minus one 
var multiply = function(x, y) {
  if (x === 0 || y === 0) {
  return 0;
 } else if (y < 0) {
  return -x + multiply(x, y + 1);
 } else {
  return x + multiply(x, y - 1);
 }
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
//I: two strings
//O: boolean
var compareStr = function(str1, str2) {
  //base case is when both strings equal zero
   if(str1.length === 0 && str2.length === 0){
        return true;
    //recursive call is when both first letters are equal, we return the copareStr with oth strings' first letters sliced.
    } else if(str1[0] === str2[0]){
        return compareStr(str1.slice(1), str2.slice(1));
    }
    //return false when the strings are not equal
    return false;
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
//I: string
//O: array
var createArray = function(str){
  //creat an array arr
  var arr = [];
  //Base case is when the length of the string is zero return arr
    if(str.length === 0) {
        return arr;
    }
    // push the first letter of str into arr
    arr.push(str[0]);
    //recursive call will be arr concated with the function createArray with the first letter sliced from the array
    arr = arr.concat(createArray(str.slice(1)));
    //we then return the arr
    return arr;
};

// 17. Reverse the order of an array
//I: array
//O: array
var reverseArr = function (array) {
  //create an array
  var rev = [];
  //base case if the array's length is zero we return rev
  if(array.length === 0) { 
    return rev; 
  }
  //recursive call is when we push the pop values of the array into rev
  rev.push(array.pop());
  //rev will equal the function reversArr with the first index sliced
  rev = rev.concat(reverseArr(array.slice(0)));
  //return the revered array
  return rev;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
//I: a value and a number
//O: an array
var buildList = function(value, length) {
  //creat an array
  let array = [];
  //base case is when the length is zero we return the array
  if(length === 0) {
  	return array;
  }
  //recursive call is when we push the value into the array, returning the array concated with buildList with length minus 1
  array.push(value);
  return array.concat(buildList(value, length -1));
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
//I: array and a value
//O: number
var countOccurrence = function(array, value) {
  //base case when the array's length is zero return zero
  if(array.length === 0) { 
    	return 0;
   }
   //recursive call if the value is the same as the first index of the 
   //array, or zero if not added to countOccurenece with the array's first value sliced.
    return (array[0] === value) + countOccurrence(array.slice(1), value);
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
//I: array and function
//O: array
var rMap = function(array, callback) {
  //when the array's length is one return the callback functioned array
  if(array.length === 1) { 
  	return callback(array); 
  }
    // return callbacked array's first index concated with the rMap array's first value sliced
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};
// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
//I: number
//O: number
var nthFibo = function(n) {
  //base case if n is less than zero return zero, else if n is equal to one return 1
  if(n < 0) {
    	return null;
    } else if(n === 1) {
		return 1;
	}
	//recursive call return the nthFibo with n - 2, and nithFibo with n -2
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
//I: array
//O: array
var capitalizeWords = function(input) {
  //creat an array
  let array = [];
  //base case if the length of the input is zero return the array
  if(input.length === 0) {
      return array;
  }
  //recursive call after pusing the inputs first value to upercase we have the 
  //array be declared as the array concated to the capitalizeWords with input's first value being sliced
  array.push(input[0].toUpperCase());
  array = array.concat(capitalizeWords(input.slice(1)));
  //return the array when done.
  return array;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
//I: array
//O: array
var capitalizeFirst = function(array) {
  //create an array that will house the capitalized first letter words
  let uper = [];
  //base case if array length equals zero return upper
  if(array.length === 0) { 
    return uper; 
  }
  //recursive call we have uper take the word in the curent index and capitalize the first letter
  uper.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
  //we make upper concat with capitalizeFirst with array's first index sliced
  uper = uper.concat(capitalizeFirst(array.slice(1)));
  //return the uper array with all of the words's first letters capitalized
  return uper;
};


// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
//I: string and object
//O: object
var letterTally = function(str, obj) {
  //base case, create result that is ethere the first value in array form or an object litteral
  let result = Array.from(arguments)[1] || {};
  //if the string length is 0 return object litteral result
  if(str.length === 0) {
      return result;
  }
  // recursive call if there is no result count one, eles add one
  if(!result[str[0]]) {
      result[str[0]] = 1;
  } else {
      result[str[0]]++;
  }
  //return letterTally with str's first value sliced.
  return letterTally(str.slice(1), result);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
//I: array
//O: array
var compress = function(list) {
  //create an array litteral
  let array = [];
  //if list length is zero return array
  if (list.length === 0){
    return array;
  }
  //if the first value does not equal the next value push the curent value into array
  if (list[0] !== list[1]){
    array.push(list[0]);
  } 
  //return thr array concated to the copress with the list's first value sliced
  return array.concat(compress(list.slice(1)));
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
//I: arrar
//O: array
var minimizeZeroes = function(array) {
  //base case, when the array is zero length return an empty array.
  if (array.length === 0){
    return [];
  }
  //recursive call if the value of the first and second index are both zero returv the sliced
  //first index off the array affected by the minimizeZeroes function
  if (array[0] === 0 && array[1] === 0 ){
    return minimizeZeroes(array.slice(1));
  // else we return the first index of the array, in an array, concated to the 
  //minimizeZeroes function with the array's first index sliced
  } else {
    return [array[0]].concat(minimizeZeroes(array.slice(1)));
  }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
//I: array
//O: array
//C: the first indexed number must be positive
var alternateSign = function(array) {
  // if the arrays length is zero return an array litteral
  if (array.length === 0) { 
    return []; 
  }
  //recursive call if the the first elemnt is negative, make positive
  if(array[0] < 0) {array[0] = -array[0];}
  //if the second element is positive make negative
  if(array[1] > 0) {array[1] = -array[1];}
  // now we return the first and second indexes as an array, concated with the 
  //function alternateSign, with the first two indexes sliced
  return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
//I: string
//O: string
var numToText = function(str) {
  //make a string literal, text
  var text = ""
  //// we make an object that has key value pairs where the keys match the numbers 
  //and the values are the strings of the numbers
  var numObj = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  };
  //base case if the string's length is zero return text
  if (str.length === 0 ){
    return text;
    }
  // recursive call if the first value of the string is a number and not a space, 
  //add to text the numObj string value useing the string's index's string number
  if(!isNaN(Number(str[0])) && str[0] !== " "){
    text += numObj[str[0]]
  //else we just add the curent string index value to text
  } else {
    text += str[0]
  }
  //we return text concated to the numToText function with the first index value sliced
  return text.concat(numToText(str.slice(1)));
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
