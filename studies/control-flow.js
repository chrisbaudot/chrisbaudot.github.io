/**
 * Control Flow:
 * 
 * 0. The ordered sytem that our code is read is 
 * known as the control flow.  For the most part the 
 * code is read from the beginging to the end. There 
 * are times when the code is told to change this 
 * flow. Conditional statments that exicute if 
 * statments are examples of how this controle flow 
 * can be altered.
 */

// 1. If //

/**
 * An If statment hapens when a specified condition 
 * is found to be true, alowing a code to be 
 * executed. Now if the condition turnds out to be 
 * false it is posible to check another condition.  
 * Boolean values are used to conferm ot deniy if 
 * statments. There can only be one if stament per 
 * control flow.
 */

// make a varable hight 
  var hight = 4;
  //the if will be true if highte is less than 5
  if (hight < 5){
    //becuse it the if statment is ture we print: 
    //"4!?! You are too short for the ride.""
    console.log(hight + '!?! You are too short for the ride.')
  };

// 2. ELSE IF //

/**
 * The else-if statment can be used only after an if
 *  statment and is used when there is another 
 * condition to test that the if or previous statment
 * is false. It is posible to use as many else-if 
 * statments as needed. 
 */

  //we will make the vaiable hightTwo for this example
  const hightTwo = 5;
  //We start with an if statment that will be false
  if (hightTwo < 4) {
      console.log(hightTwo + '!?! You are too short for the ride.'); 
  // we make an else statment that will return true and print
  // '5, have a seat right there and enjoy the ride!'
  } else if (hightTwo > 4) { 
      console.log(hightTwo + ", have a seat right there and enjoy the ride!"); 
  // we never get to the else statment as else-if ran
  } else { 
      console.log('Are you a ghost or something? You need a body to get on this ride.  It is a leagle thing, as you have to be buckled in to ride.'); 
  }

// 3. ELSE //

/**
 * Else is the defalt of an if statment. When no conditions 
 * are met (all conditions show false) the else statment will 
 * be invoked . Unlike if or else-if, else does not need a 
 * condition, wich is very helpful for a catch all defalt.
 */

  //make a variable hightThree
  const hightThree = 4;
  // wee write the if statment and it fails
  if (hightThree > 4) {
    console.log(hightThree + ', lets get you all buckeled up for the ride')
  // we do not have to have an else if statment
  //the defalt else statmen happens and we print:
  // 4, sorry kid... Maybe you willbe taller next year.
    } else {
      console.log(hightThree + ", sorry kid... Maybe you will be taller next year.")
    }

// 4. Switch //

/**
 * The switch statment is a way for a value to be tested to 
 * see if true compared to multiple cases with code blocks. 
 * When one case is true that block of code will execute.  
 * Each case will end with a break and can be fallowed with 
 * anothe case, or end with a defult. It is a good idea to 
 * end with a defult to catch any unforseen issues.  On a 
 * positive note switch statmens can be fast, easy to read, 
 * and have branhing paths. We will not be useing them 
 * often in class.
 */

  // we will create a veriable to use in our switch statment
  const fastRollerCoaster = "Kingda Ka"
  // we creat the switch statme an put in the variable
  switch (fastRollerCoaster) {
      // we write the case
      case "Thrill Dragster":
        // if case was true print this 
        console.log( 'Number three: 120 miles per hour' );
        // end the case with a break
        break;
      // second case will be true
      case "Kingda Ka":
        // this will print "Number two: 128 miles per hour"
        console.log( 'Number two: 128 miles per hour' );
        // this is the second break
        break;
      // we do not get to the thrid case
      case "Formula Rossa":
        // we will not print this
        console.log( 'Number One: 150 miles per hour' );
        //third break
        break; 
      //the defaul would run if all cases were not met
      default:
        // the defalut code would run then.
        console.log( "Too slow for the top three" );
  }