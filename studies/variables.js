/**
 * VARIABLES:
 * 
 * 0. To hold things in memory during the life-cycle of a program, we can use variables.  Variables
 * are named identifiers that can point to values of a particular type, like a Number, String,
 * Boolean, Array, Object or another data-type.  Variables are called so because once created, we
 * can CHANGE the value (and type of value) to which they point.
 * 
 * 1. To create a variable we use the keyword, var, followed by a name (id or alias) for our
 * variable.
 * 
 * 2. There are 2 phases of using variables: declaration and initialization (or assignment).
 */

// 1. declaration and assignment//
    var myName;

/*
 * At the declaration phase, the variable myName is undefined because we have NOT initialized
 * it to anything
 */
    console.log(myName); // prints => undefinedos test

// 2. initialization or assignment //
myName = 'Seuss';
    console.log(myName); // prints => Seuss

// 3. re-assignment //
    myName = 'Dr. Seuss';
    console.log(myName); // prints => Dr. Seuss

// NOTE: We can assign and re-assign anything to a variable - we cannot do this with constants //
    var myVariable = 1;
    var myVariable = true;
    myVariable = "someString";

// 2. var, let, and const //

/** 
 * 0. There are three ways to create varaibles to use in 
our code,  var, let, and const. each has advantages
and disadvantages,  we will find out shortly that var,
although very veritile will not be the best chouse for 
most of our code.
  
1. var is used to make a veriable, and is also tipicaly
given a value when created.  When the code is exicuted 
the var name is hosted globaly, but not the value. Var 
can be executed in an enclosed function or globably. When 
var is modified, re-declared, var's value will not be 
lost. If an undeclared var is given a value, var will 
join as a globabl variable when called.

1. The stated var will be exicuted in the order in which var is declared.  Undeclared variables will be global. There will also be a few diferances when useing or not     *useing strict mode, as we will see below.
 */

    function oneFish() {
      twoFish = 2; // A reference error is thrown in strict mode 
      var redFish = "red";
    }

    oneFish();
    
    console.log(twoFish);// will print 2
    //console.log(redFish); will throw a reference erroe as 
    //redFish the varable is seen globably, but it is only 
    //defined in the oneFish function.

/**
 * 2. A declared var will be hoseted before the code is 
  ran. We will find that a var that is not defined will
 *throw reference error, as there is no value to see.
 */

//console.log(blueFish); //this is "undefined"
    console.log("by: Dr. Seuss"); // will print "by: Dr. Seuss"

/**
 * it can also be like the fallowing
 */

    var cat = "in the hat";
    console.log(cat); // will print "in the hat"
    console.log("The Cat in the Hat Comes Back");//will print "The Cat in the Hat Comes Back"

/**
 * 3. A declared var is unable to change, while an
 * undeclared var can change.
 */

    var lorax = "Speaks for the trees";
    onceLer = "money";

// if we try to delete the lorax in strict mode we will have a TypeError, it will just fail quietly if in unstrict mode.
// we are free to delete the onceLer as there is no defined value.
// after deleteting both lorax and onceLer if we try to console.log(lorax, onceLer); we will have a reference error as the onceLer is gone.

/**
 * Let:

0. Var is sometimes difficalt to keep track of when we 
are coding.  When we want to keep our identifier 
within a scope let is ideal. 

1. Let is writen simular to the way var is writen.  
 *Unlike var, let will not move to the parent scope.
 */

    var knox = "in box";
    var fox = "in socks";
    
    if (knox === "in box") {
      var knox = "on fox";
      let fox = "in a box"; 
    
      console.log(knox); // on a fox
      console.log(fox); // in a box
    }
    
    console.log(knox); // on a fox
    console.log(fox); // in socks

/**
 * 2. Temporal dead zone
Let is not activated until we reach it in our code. 
If we call the let before it is defined we will get a 
reference error.  Var is known before the code is ran, 
and is not subject to this Temporal dead zone that let 
 *and const are subject to in writing code.
 */

/**
 * const:

0. When containers are needed that will not change 
values, use const.  const is also block scoped, so it 
will not leave the scope const is within. It is considered good practace to lable with upper case letters for const.

1. Unlike var, we must identify and name when we 
declare const. Const complex data types are mutable,
*while simple data types are not.
*/

    const GREEN = ["eggs", "ham"];
    const SAM = "I am";

    console.log(GREEN.splice( 1, 0, "&")); //add &
    console.log(GREEN);  // will print "eggs", "&", "ham"
    //console.log(SAM += " not"); // If we try to change SAM we will get an error as it is a const and cannot change a simple data type.

/**
 * 2. Const is simular to let when it comes to 
 hosting, and can not be acssed outside the scope 
 const finds its self.  Const also will not become 
 avalible until it is seen in the code. This also 
 *means it is subject to the temporal dead zone. 
 */
    
    console.log(thing); // undefined
    var thing = 1;
    console.log(thing);// will print 1
    {
      const thing = 2;
      console.log(thing);// will print 2
    }
    console.log(thing); // will print 1

/**
 * Hoisting:
 
 0. Hoisting is how Javascript raises declerations 
 above the code. We find that all of the var and 
 function declarations raise above the code into 
 memory when we compile our code.

 1. A declared variable can be accsesed before it has been declared.  This is 
 * due to hosting.
 */

    //Normal code order
     function hears(voice) {
      console.log("Horton hears a " + voice);  
    }
    
    hears("Who!"); //the function, prints "Horton hears a Who!"
    
    //Hoisting code order
    console.log(whos); // undefined
    var whos;
    console.log(whos); // undefined
    whos = "WE ARE HERE";
    console.log(whos); // "WE ARE HERE"

/**
 * 2. As stated earlier, let and const are not hosisted into memory.  Due to the 
temporial dead zone we must remain vigulant when we use let and const.  At 
the same time we need to be careful when we use var unwisely as it can 
 *create trouble for our code when it is modified globably.
 */

    var two = 2;
    two = 2 + 2;
    console.log(two);// this will print that two is change to have the number 4 and no longer be equal to 2. Be careful with var!