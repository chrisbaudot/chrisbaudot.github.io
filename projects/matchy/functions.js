/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an array and a string
//O: an object or null
//we are creating a search funtion that will check the string name to see if it matches an animal name. 
function search(animals, name) {
    // make a loop to look at each value to see if it equals name. if so return object
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            return animals[i];
        }
    }
    //return null outside of the loop
    return null;
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an array, a string and an object
//E: what if there is more that one animal with the sane name? deal with that later
// surch through the array for an animal with the same name.  if there is an animal with the same name replace it.
function replace(animals, name, replacement) {
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals[i] = replacement;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an array and a string
// we will search for an animal with the same name, and remove that animal object.  We will use splice to take out the object
function remove(animals, name){
    for (let i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals.splice(i);
        }
    }
}

//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an array and an object
//we will have to check if the animal object is sutable for our animal array
function add(animals, animal) {
    //we will need to see if the animal object all ready exist, has a name, and has a species.
    for (let i = 0; i < animals.length; i++){
        if (animal.name.length > 0 && animal.species.length > 0 && animals[i].name !== animal.name){
        // if the animal obj name does exist, has a name, and species in the animals array  we will just return out of the code.
        } else{
            return;
        }
    }
    //after all of the test are done we will push the animal object in to the animals array.
    animals.push(animal);
}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
