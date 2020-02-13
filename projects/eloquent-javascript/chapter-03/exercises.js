////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: two numbers
//O: a number
//Keeping the code short we will test the two paramiters seeing wich is less than or equal.
function min(num1, num2) {
  if (num1 <= num2){
    //return num1 id less than or equal to num2
    return num1;
    //if num one is greater than num to return num2.
  } else {
    return num2;
  }
}
////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a number
//O: boolean
//C: must use recurtion.
//E: take into account if the number is negative.
function isEven(number) {
  //base case when the value equal 0 return true, false if number equals 1
  if (number === 0){
    return true;
  } else if (number === 1){
    return false;
  }
  //Recursive call wii see if the number is positve or negative subtracting two from number or adding two respectivly.
  if (number < 0){
    return isEven(number + 2);
  } else {
    return isEven(number - 2);
  }
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: two string 
//O: a number
//E: the string does not need to be a letter
//the function will take in two string values and count the number of times the second string is in the first string
function countChars(longString, string) {
  // create a variable with the value of zero to return as a number changed or not.
  let count = 0;
  //look at each char in longString checking if it matches with string.  If it does match add 1 to the count
  for (let i = 0; i < longString.length; i++){
    if (longString.charAt(i) === string){
      count+=1;
    }
  }
  // return the count total
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: a string
//O: a number
//C: count the number of Uppercase "B"s
// the paramiter will be a string.  The funtion will count the number of "B"s in the string
function countBs(string) {
//we will have to return a number and must create a counter
  let count = 0;
  // loop through string, testing each char if equal to "B" add 1 to count
  for (let i = 0; i < string.length; i++){
    if (string.charAt(i) === "B"){
      count+=1;
    }
  }
  // return the count total
  return count;
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
