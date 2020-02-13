
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: number
//O: strings
//we will have to print "#"s in ascending value up to end number.
function triangles(number) {
  // sense we cannot multiply # we will make a string to house all of the #s
  var hash = ''
  // loop until we reach the end number, with each loop adding a # to hash before print the new value
  for (let i = 1; i <= number; i++){
    console.log(hash += "#");
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: number
//O: number or string
//C: will print a number, unless a mutipule of 3 prints "fizz", multipule of 5 prints 'buzz', and multipule of 15 prints 'fizzbuzz'
function fizzBuzz(start, end) {
  //we will make a loop that uses the start and end paramiters.
  for (let i = start; i <= end; i++){
    //when i is a multipl of 15 print 'fizzbuzz'
    if (i % 15 === 0){
      console.log("fizzbuzz");
    //when i is a multipl of 5 print 'buzz'
    } else if(i % 5 === 0){
      console.log("buzz");
    // when i is a multipl of 3 print 'fizz'
    } else if (i % 3 === 0){
      console.log("fizz");
    // print i for all other numbers until the end
    }else{
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//I: number
//O: an array
// we will print an alternating space and hash chess board into an array that will 
// be the highth and width of number.  Useing a two loop syestem will make it easier 
// to print rows on top of rows.
function drawChessboard(number) {
//we will have to store the spaces and hashes into an array, board
  var board = [];
//It will be easier to use two loops  with the first, being used souly to make a new line
  for (var y = 0; y < number; y++) {   
    //the second loop will be used to print the spaces if number is even and hashes if odd.
    for (var x = 0; x < number; x++) {
      if ((x + y) % 2 == 0)
        board += " ";
      else
        board += "#";
    }
    //part of outer loop, to make a new line
    board += "\n";
  }
  // after the loops are compleat we will print the array.
  console.log(board);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
