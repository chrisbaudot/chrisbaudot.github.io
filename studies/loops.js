/**
 *  Loops:
 * 
 * 0. Loops are a way to preform a repeated action over a value.  
 * Depending on the datatype, or personal preferance, there diferent way 
 * to create an iterate/loop statment.
 */

// 1. while, for, and for-in loops //

/**
 * When we have to repeatedly do the samething to an array, object, or 
 * other large code it is usualy a food idea to use a loop. While, for, 
 * and for-in loops are what we will go over.  
 * 
 * While loops are fairly simple to write, but can easly become an infant 
 * loop that will crash our browser if we are not careful. As long as the 
 * condition is true they will keep iterating
 */

  //lets make a vaiable to count down
  let cookies = 5;
  //as long as cookies is higher than 0 it will loop
  while (cookies > 0) {
    //each time we will print the number of cookes to eat
    let text = console.log(cookies + " cookies left, I will have one more.");
    // we subtract a cookie every loop
    cookies--;
  }
      // Will print:
      // 5 cookies left, I will have one more.
      // 4 cookies left, I will have one more.
      // 3 cookies left, I will have one more.
      // 2 cookies left, I will have one more.
      // 1 cookies left, I will have one more.
      //the code will return 1 as that is the stoping point.

/**
 * A for loop need to have a starting point, an end 
 * point, and a way to increment.  We can also exicute code as we iterate.
 */

  //we will make a loop with a start, finish, and incremintor
  for (let i = 1; i <= 3; i++)
  //we can then have code to be exicuted this will print
  // No! Make that 1 slice of cake!
  // No! Make that 2 slice of cake!
  // No! Make that 3 slice of cake!
  { console.log("No! Make that " + i + " slice of cake!")}

/**
 * A for in loop is how we can iterate over an object.  As objects 
 * do not have an index we do not have to set an end point, the for in 
 * loop ends when there is nothing left in the object to iterate over.
 * 
 */

  //make a object and a counter
  const food = {japan: "sushi", italy: "pizza", usa: "hamburger"};
  var counter = 0;
  // write a for in loop that looks at food
  for(let key in food){
    //adds one to counter each loop
    counter ++;
    //will print:
    // 1 favorite things to eat.
    // 2 favorite things to eat.
    // 3 favorite things to eat.
    console.log(counter + " favorite things to eat.");
  }

// 2. Loop any number of times counting up from and down to 0. //

/**
 * We will use a while loop to count up to ten and then count back 
 * to zero. (we will use the other loop types in 3 and 4).
 */

// lets make a while loop count to ten
//Make a variable that starts at zero (we have a party soon)
  let cupcakes = 0;
  //as long as cupcakes is less than 10 it will loop
  while (cupcakes <= 10) {
    // we add a cupcakes every loop
    cupcakes++;
    // this loop would return 10 cupcakes (So we are ready for the party)
  }
  // we now make a while loop to that ends when there cupcakes is 0
  while(cupcakes >= 0){
    // we subtract a cupcake each loop
    cupcakes--;
    // this loop would return 0 cupcakes (everyone got a cupcake!)
  }

// 3. Loop throrugh an Array and back //

// count up an array, so we need to make an Array!
  var partyPeople = ["Jan", "Bill", "Sue"]; 
  //we will make a for loop that ends at array length
    for (var i = 0; i < partyPeople.length; i++) { 
      //will print each partyPeople
      // Jan
      // Bill
      // Sue
      console.log(partyPeople[i]); 
    }    
    // now we will count from the back of the array (they are leaving)
    for (var i = partyPeople.length; i >= 0; i--) { 
      // will print each partyPeople from the back
      // Sue
      // Bill
      // Jan
        console.log(partyPeople[i]); 
    }

// 4. Loop over an Object. //

//We will use the same food object above
  //we make a for in loop 
  for (let key in food) {
    // will print the key/value pairs as strings
    // japan: sushi
    // italy: pizza
    // usa: hamburger
    console.log(`${key}: ${food[key]}`);
  }