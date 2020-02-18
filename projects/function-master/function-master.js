//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an object
//O: an array 
//Should take an object and return its values in an array
function objectValues(object) {
    //creat an array to store the values from the object
    const array  = [];
    //loop through the object
    for (let key in object){
        //we will push the properties into the array
        array.push(object[key]);
    }
    // we will return the arry filled with the object values
    return array;
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object
//O: string
//Should take an object and return all its keys in a string each separated with a spac
function keysToString(object) {
    //creat an array to store the keys from the object
    const array  = [];
    //loop through the object
    for (let key in object){
        //we will push the key value into the array
        array.push(key);
    }
    // we will return the arry as a string with join, with spaces, returning a string of the object keys
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object
//O: string
//Should take an object and return all its string values in a string each separated with a space
function valuesToString(object) {
    //creat an array to store the values from the object
    const array  = [];
    //loop through the object
    for (let key in object){
        //test to see if value is a string
        if (typeof object[key] === 'string')
        //we will push the key value into the array
        array.push(object[key]);
    }
    // we will return the arry as a string with join, with spaces, returning a string of the object values
    return array.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: a collection
//O: string
// Should take one argument and return 'array' if its an array and 'object' if its an object
function arrayOrObject(collection) {
    //check if collection is an array, if true return 'array'
    if (Array.isArray(collection)){
        return 'array';
    // test is collection is an object, return 'object'
    } else if ( typeof collection === 'object'){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string
//O: string
//Should take a string of one word, and return the word with its first letter capitalized
function capitalizeWord(string) {
    //capitalise the first letter and add that letter to the string with the first letter sliced
    return string.charAt(0).toUpperCase() + string.slice(1);
    
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string
//O: string
//Should take a string of words and return a string with all the words capitalized
function capitalizeAllWords(string) {
    //we will split the string at each space into an array variable
    let split = string.split(" ");
    //make an arrany to store the Capitalised strings
    let cap = [];
    //we will loop through the array, split, to capitalise eacch first letter
    for (let i = 0; i < split.length; i++){
        cap.push(split[i].charAt(0).toUpperCase() + split[i].slice(1));
    }
    //return split joined into a string.
    return cap.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object
//O: string
//Should take an object with a name property and return 'Welcome <Name>!'
function welcomeMessage(object) {
    //return the string with the first letter of object.name capitalised
    return "Welcome " + object.name.charAt(0).toUpperCase() + object.name.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object
//O: string
// Should take an object with a name an a species and return '<Name> is a <Species>
function profileInfo(object) {
    // return the object name and species capitalised win the proper string.
    return object.name.charAt(0).toUpperCase() + object.name.slice(1) + " is a " +  object.species.charAt(0).toUpperCase() + object.species.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I:object
//O:string
//Should take an object, if this object has a noises array return them as a string separated by a space, 
//if there are no noises return 'there are no noises
function maybeNoises(object) {
    //check to see if there is a noises array
    if (object.noises !== undefined){
        //if the array has a value return a string with spaces of each noise
        if (object.noises.length !== 0){
            return object.noises.join(" ");
        //if the arry is empty return "there are no noises"
        } else {
            return "there are no noises";
        }
    //if there is no object.noises, return "there are no noises"
    } else {
        return "there are no noises";
    }
    
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string
//O: boolean
// Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false
function hasWord(string, word) {
    //split the string of words into an array so we will be able to loop through it to see if words matchs
    let split = string.split(" ");
    //search through the array to see if the word matches a word in the array.  Return true if it matches
    for (let i = 0; i< split.length; i++) {
        if (word === split[i]){
            return true;
        }
    }
    //return false out of the loop if there is no match.
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string and object
//O: object
//Should take a name and an object and add the name to the object's friends array then return the object
function addFriend (name, object) {
//we will add the name to the friends object array
    object.friends.push(name);
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string and a object
//O: boolean
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
function isFriend(name, object) {
    // if there is no friends array return false
    if(object.friends === undefined){
        return false;
    }
    //we will loop through the friend array to check if the name is in the array
    for (let i = 0; i < object.friends.length; i++){
        if (object.friends[i] === name){
            return true;
        }
    }
    //return false 
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: string and list
//O: list of strings
// Should take a name and a list of people, and return a list of all the names that <name> is not friends with
function nonFriends(name, array) {
    //We will make an array for holding the list, and one for the results.  Variable old will be equal to null.
    var list = [];
    var result = [];
    var old = null;
    //loop throughthe name array finding the object by name making old equal to the object, else we will push the object name into list.
    for(var i = 0; i < array.length; i++){
        if(name === array[i].name){
            old = array[i];
        }else{
            list.push(array[i].name);
        }
    }
    // if null is equal to old, we will return the list we just filled
    if(old === null){
        return list;
    }
    // we will surch  to check if the names in old friends is not in list, to push it into result.
    for(var x = 0; x < list.length; x++){
        if(old.friends.indexOf(list[x]) == -1){
            result.push(list[x]);
        }
    }
    // we will return result.
    return result;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object, key, and value
//O: object
//Should take an object, a key and a value. Should update the property 
//<key> on <object> with new <value>. If <key> does not exist on <object> create it.
function updateObject(object, key, value) {
    //change the property
    object[key] = value;
    //return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: object, and an array of strings
//O:
// Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
function removeProperties(object, array) {
    //we will loop through the object checking if the looped through array's values are equal to the key and dealeting the object[key].
    for(key in object){
        for (let i = 0; i < array.length; i++){
            if (key === array[i]){
                delete object[key];
            }
        }
    }
    // returning the object modified or not
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//I: an array
//O: an array
// Should take an array and return an array with all the duplicates removed
function dedup(array) {
    //we will loop through the array taking indavidual values if they are not in the new array.
    const newArray = [];
    for (let i = 0; i < array.length; i++){
        // need to check if value is not in newArray, push into newArray
        if (newArray.includes(array[i]) === false){
            newArray.push(array[i]);
        }
    }
    //out of the loop we return the newArray
    return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}