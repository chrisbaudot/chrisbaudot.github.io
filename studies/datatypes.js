/**
 * Datatypes:
 * 
 * 0. Each programing lagnguage has its own data 
 * structure, Javascript is no different.  We 
 * use datatypes to uses and controle the data 
 * structures.
 * 
 * 1. Numbers are arithmetical value that we can 
 * use in out code to referance amounts, preform 
 * mathamatical equations ect. Ex. (3.14...).
 * 
 * 2. Strings are used when we need to use words 
 * in our code.  ex ("Howdy Y'all!")
 * 
 * 3. Booleans are used to exspress true or false.
 * 
 * 4. Array is a complex datatype that is a list 
 * of values. ex. [3.14, "Howdy Y'all!", true]
 * 
 * 5. Object is a complex datatype that are 
 * aranged in key/value pairs.  ex. {Studies: 
 * "Work in progress", complete: "Done!"}
 * 
 * 6. Function is used to preform and exicute a 
 * code. ex. function together(this, that){ return 
 * this + that;} // will concat this and that.
 * 
 * 7.Undefined happens when there is no value set 
 * to a veriable.  ex. var xFiles;  // it has only 
 * been declared and has no defined value.
 * 
 * 8. Null when you want an answer that is void of 
 * any object value.  ex let abyss = null;
 * 
 * 9. NaN is when the value is 'Not a Number'
 * 
 * 10. Infinity and -Infinity are used when we 
 * want to use very large numbers.
 * 
 * 11. We will descuss the diferances between 
 * complex and primitive/simple datatypes.
 * 
 * 12. We will go over primative datatypes being 
 * passed to a fuction by being copied, while 
 * complex data types are passed by reference.
 */

// 1. Numbers //

/**
 * The numbers datatype can be integers (1, 5.3, 
100) and floating point numbers (stores the 
numbers in 64 bits).

There are a veriaty of operations that numbers 
have accsess to which can be found in the   
 *operators part of the study guide (+, -, *, /)
 */

    var addItUp = 1 + 2; // 3

/**
 * There are a few other datatypes that are 
 * simular to number Infinity, -Infinity, NaN,
and BigInt. We will be going over Infinity, 
-Infinity, and NaN later in our guide, but we 
 will go over BigInt to familierize it with our
 selves. Whole number datatypes can only be 
 accurate up to 15 digits and will round the 
 number. We can use BigInt to use larger numbers 
 *by adding "n" to the end of our number.
 */

    console.log(9999999999999999); // will print 10000000000000000 
    
    
   // console.log(9999999999999999n); //will print 9999999999999999

// 2. String //

/**
 * Strings are how we can use words in our code. 
To create a string datatype we will house the 
 *values between quotation marks.
 */

    var stringOne = "one"; // will print one
    var stringTwo = '2'; // will print 2

/**
 * You can see that " " (double quotes) or ' ' (singel quotes) will work to make a string.  We can not use both tyes to make a string (" ' //does not work). We can also use ` ` (backticks)*to make a string with specal properties.
 */

    let fishy = `1 fish ${stringTwo} fish`;
    console.log(fishy); // 1 fish 2 fish

// 3. Boolean //

/**
 * Boolean datatypes are used to see if a value is 
true or false. This means that we can see if a 
value is correct (true), or incorrect (false). 
 * Booleans are also used to compare values. 
 */

    let truth = true;
    let nonTrue = false;
    
    let greaterThan = 5 > 1 //true

// 4. Array //

/**
 * Arrays are like a list, with each value 
being indexed. Being the first complex 
datatype we are going over it is 
important that we know that Arrays are 
copyied by referance (we will go over 
this in section 11). 

To create and accsess an array we use [] 
(square brackets).  Integers are used to 
acccess spesific indexes. There is not a 
fixed length limit for arrays.  As you can 
see in the example there are a variaty of 
ways to add to an array. We can even use the 
 *.length to look/add to an array.
 */

    var shopList = [];
    shopList[0] = "red beans";
    shopList[shopList.length] = "rice";
    shopList.push("corn bread");
    shopList.unshift("sausage");
    console.log(shopList); // [ 'sausage', 'red beans', 'rice','corn bread' ]

// 5. Object //

/**
 * Objects are what everything in Javascrip 
 is, as it is an object orentated language. 
 We will be mostly going over objects as a 
 datatype in this studies guide.  This also 
 means that Objects are a complex datatype 
 and are copied by referance.  

 We can use dot notation or bracket notation 
 to accsess an object.

To create an object we use {} (curly braces)
Objects properties use a name:value pair 
 *that are seperated by a comma.  
 */

    var obj = {} // an object literal
    var chess = {
      age: "~1400",
      luck: false,
      pieces: 32
    }
    
    console.log(chess.luck); // false
    console.log(chess); //{ age: '~1400', luck:false, pieces: 32 }
    console.log(chess['pieces']); // 32

// 6 Function //

/**
 * Functions are like little subprograms in our program. 
To create a funtion we must use the "function" keyword 
fallowed by the name, a list of parameters in 
parentheses and separated by commas, and a statmentthat 
 *define what the function will do inside curly brackets.
 */

    function nameOfFunction(parameterOne, parameterTwo){
      console.log(parameterOne + parameterTwo, "This is the statment that adds two values together... um Hi I am still a little new as I was just made.")
    } // the function will not exicute until it is used.
    
    nameOfFunction(1, 2); // 3 'This is the statment... um Hi I am still a little new as I was just made.'
     //now that the function has been called it will print

 /**
  * We will go over more examples of Functions in a 
  later part of the study guid, Functions. There we will 
  *see diferent ways to create and use functions.
  */

// 7. Undefined //

/**
 * When a variable is created, it is possible to also 
not define that variable (unless it is const, const 
does not put up with that kind of foolishness).  When 
 * this happens we have an undefined varaiable.
 */

    var allAlone; // created with out being defined
    console.log(allAlone); //undefined
    
    let alonePartToo; // created with out being defined
    console.log(alonePartToo); //undefined
    
    const neverAlone = true; //const has to be defined
    console.log(neverAlone); //will print true

/**
 * As undefined is a datatype, we can reassign useing 
 undefined, but we typicly do not do this. We can use 
 undefined to check if a variable has been defined.  It 
 is more common to use null, but we will get to that 
 shortly.
 */

    var one = "is the loneliest number" // so alone, but defined
    console.log(one); //prints "is the loneliest number"
    
    one = undefined //use the undefined datatype to reassign
    
    console.log(one); // undefined (one must not want to talk about it... poor one)

// 8. Null //

/**
 * Have you ever wanted to disapear, but not go away? 
 Null just might be your datatype.  Null represents 
 *nothing, empty, or value unknown.  
 */

    let meaningOfLife = null; // value is unknow
    
    console.log(meaningOfLife, "But that is ok, as we can choose the meaning ourselves!");

// 9. NaN //

/**
 * NaN is simply Not A Number.  It is not common to use 
 * in a program. Typically NaN is returned in a failed 
 * Math *function.  
 */

    console.log("Am I a Number???" / "I do not think so."); //NaN
    
    console.log("How about now?" * false); //NaN

// 10. Infinity and -Infinity //

/**
 * Javascript has size limits to how large simple 
datatypes can become.  When we need a datatype to 
become an unlimited value, we have the option of 
useing infinity (in positive or negative variaty).  
To invoke infinity simply devide a number by zero, or 
 * invoked reference.
 */

    console.log(1 / 0); // Infinity
    
    console.log(-1 / 0); // -Infinity
    
    console.log( "1" / 0); // Infinity (can use string numbers like other numbers)
    
    console.log(Infinity); // can be invoked

// 11. What is the difference between primitive/simple and complex data types? //

/**
 * Simple/primative datatypes are immutable and copied 
by value, while complex datatypes are mutable and copied 
by referance.  

Simple datatypes are copied by value and are immutible. 
This seems odd becuse they can reassigned primative 
datatypes, but the existing value will no be changed.  
when we use const we can see that the simple datatypes 
are imutable and unable to be reasigned wen const is 
 *use.  
 */

var fight = "For your right!";
fight[fight.length - 1] = " to Party!";
console.log(fight); // "For your right!"

/**
 * Complex datatypes are copied by referance and 
therefore mutable even with const.  That being said, we 
will find that complex datatypes are only equal to 
eachother when they are referanceing the same object. 
Complext datatypes will not be equal to to difrent 
 *values even if both values are the same.
 */

    const fellowShipOfTheRing = ["Frodo", "Sam", "Pipin", "Merry", "Gimly", "Legolas", "Aregon", "Borimere"]; // some guys going for a long walk
    
    console.log(fellowShipOfTheRing.pop()); //Borimere (poor guy)
    console.log(fellowShipOfTheRing); //["Frodo", "Sam", "Pipin", "Merry", "Gimly", "Legolas", "Aregon"]  (changed, but still walking)
    
    const baggins = ["Bilbo", "Frodo"]; // family
    const bagginsHome = ["Bilbo", "Frodo"]; // Looks the same
    
    console.log(baggins === bagginsHome); // false, as they are two diferant referances
    
    const hobbits = baggins;
    
    console.log(hobbits === baggins); // true, as they are looking at the same referance.

// 12. Pass By Value And Pass By Reference: Primitive BY COPY, complex values BY REFERENCE. //

/**
 * Primitive datatypes passing by a value will be a Copy. 
Complex datatypes will be by referance (hobbits === 
baggins being true shows how they are referanceing the 
same array).  So passing a primative datatype will make
 *  a copy of that data.  
 */

    function passByCopy(var1, var2) {  // create a function
      console.log("I want to stay inside! "); 
      var1 = 1; 
      var2 = 2; 
      console.log("How many rings? " + var1 +" How many Hobbits? " +var2); 
    } 
    let var1 = " one "; 
    let var2 = " two "; 
    
    console.log("Out on an Adventure! "); 
    console.log("How many rings? " + var1 + " How many Hobbits? " +var2); 
    passByCopy() // the values are in the function and needs no arguments
    console.log("What happens now? "); 
    console.log("How many rings? " + var1 + " How many Hobbits? " +var2); 

//The above will print the fallowing
// Out on an Adventure! 
// How many rings?  one  How many Hobbits?  two
// I want to stay inside! How many rings? 1 How many Hobbits? 2
// What happens now? How many rings?  one  How many Hobbits?  two

/**
 * When a function goes through a Pass by Reference it is called directly. So passing a referance of a veriable as the argument alows for mutating the argument inside of the *function and outsided of the function scope.
 */

     function raceByReference(raceObj) { 
      console.log("Moving to VICTORY!"); 
      raceObj.a = "FIRST PLACE!!!"; 
      console.log(raceObj); 
    } 
    let raceObj = {a:"Last Place!?!"};
    console.log("Read, Set! GO!!!"); 
    console.log(raceObj);
    raceByReference(raceObj); 
    console.log("WINNER!!!"); 
    console.log(raceObj);

  // this is what will print :
// Read, Set! GO!!!
// { a: 'Last Place!?!' }
// Moving to VICTORY!
// { a: 'FIRST PLACE!!!' }
// WINNER!!!
// { a: 'FIRST PLACE!!!' }