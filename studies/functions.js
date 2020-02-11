/**
 * Functions:
 * 
 * 0. Functions are ways for our code to preform actions 
 * and/or changes to our code.  It is posible do peform 
 * many actions that are automated with functions, making 
 * our code more reliable and useful.
 */

// 1. Create and Execute //

/**
 * Like a varable we must create functions first, and we 
 * can also execute functions.  Here we have a function 
 * that is created and executed in the order that the call 
 * stack will read. Functions like var are hoised into 
 * memory.  Wher variables names are only hoisted functions 
 * will be fully hosed will be acsesable in the proper scope.
 */

      //veriable  call create
      let create = 'It is Function time!';   
    
      //function madeFirst to begain showing call stack
      function madeFirst() { 
        //will print 'This is the start'
        console.log('This is the start, in madeFirst'); 
        //calling madeSecond before it is made
        madeSecond(); 
        // will print 'This is second and in madeFirst'
        console.log('This is second and in madeFirst'); 
      } 
      //function madeSecond is made 
      function madeSecond() {
        // will print 'This function, is cutting in from global'
          console.log('This is cutting in from madeSecond out in global'); 
      }
      //Execute madeFirst will print:
      // This is the start, in madeFirst
      // This is cutting in from madeSecond out in global
      // This is second and in madeFirst
      madeFirst(); 
      
// 2. Function parameters ans arguments //

/**
 * The values that are exspected to be used in a function 
 * are called paramethers, they are decided on when the 
 * function is made.  Argument values are entered into the 
 * function when the function is being called, typicly it be 
 * used in the function.
 */

      // Create a funtion with parameters as placeholders
      function perfectSandwich(bread, filling) {
        console.log(filling + " on " + bread);
      }
      // Enter two Arguments to print 'pastrami on rye'
      perfectSandwich("rye", "pastrami");

// 3. NAMED function//

/**
 * The name of a function is declared when the function is 
 * created. It is bound in the body and can be invoked 
 * inside of the function its self like an expression.  
 */

    // create and name function
    function whoAmI () { 
    // create a function inside of the function
    function nameSomeoneGaveMe () { return "Chris"; }
        //we will return a string with the function value
        return "You look out of it, " +  nameSomeoneGaveMe();  
    }
    // will ptint "You look out of it, Chris" 
    whoAmI ();

// 4. Assign a function to a variable //

/**
 * It is posible to assign functions to variables as 
 * functions are values also!  As we see below we make the
 *  variable and use the keyword function.
 */

    // We will make a variable with a simple function that adds to values
    const together = function(something, anotherThing) {
      return something + anotherThing;
    }
    
    //use together with strings to print "Howdy y'all"
    together("Howdy ", "y'all");
    //We can also use this function to add number, prints " 10"
    together(7, 3);

// 5. Default Parameters input and output //

/**
 * Default parameters can be made incase the user does not 
 * enter the correct number of paramiters. This makes sure 
 * that the code we have does not fail.  It is simple to 
 * add a default parameter, and is easly over writen whne 
 * the user enters the correct number of arguments.
 */

    //this function has two defaults so the user is reminded
    //to enter thier both parts of their full name. 
    function yourName(firstName = "Please enter your first name.", lastName = "Please enter your last name."){
      return firstName + " " + lastName;
    }
    //This will print by default :Please enter your 
    //first name. Please enter your last name.
    console.log(yourName());
    // the defaul will catch the second empty paramiter
    // and print "Chris Please enter your last name."
    console.log(yourName("Chris"));

// 6. Scope //

/**
 * Functions have the ability to accsses and change 
 * variables in their scope and parent scopes.  This is 
 * sometimes called the parent/chiled nesting 
 * relationship. Parent scopes cannot accsess their child 
 * scopes. The Global scope is the defalt/stating scope.
 */

    //make a varable that is in the globabl scope 
    const start = "I am the first thing writen and from Global";
    //the function can be called before it is made, thanks 
    // hoisting
    scopeTestFunction();   
    //the function is now being made and can accsess out of 
    //its scope.
    function scopeTestFunction() {  
        const next = "I am a writen second and Child Scoped." 
        //will print "I am a writen second and Child Scoped."
        console.log(next);
        //will print "I am the first thing writen and from Global"
        console.log(start);
    }

// 7. Closures //

/**
 * Function can create closures for the data they contain.
 *  It is posible to retain data in memory if a function 
 * referans to a returned object.  This is known as 
 * keeping the information alive, and will be house in 
 * closures.  When we create a local scope the variables 
 * held within are in a clouser. The globabl scope is 
 * accsessable from the local scope, this will also keep 
 * the information alive.
 */

    //create a function with clouser inside
    function waitingForTable() { 
        //this variable will be called by a child scope 
        let minutes = 5; 
        // howMuchLonger function is the child of 
        //waitingForTable
        function howMuchLonger() { 
            //minutes can be modified by howMuchLonger
            return minutes += 5; 
        }
        // howMuchLonger will make minutes = 10
        howMuchLonger() 
        // howMuchLonger a second time will make minutes = 15
        howMuchLonger() 
        //waitingForTable will return 15 if invoked
        return minutes 
    } 
    // waitingForTable has been invoked and will return 15
    waitingForTable()