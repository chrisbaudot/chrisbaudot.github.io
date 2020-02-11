// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
    //I: three values
    //O: an object
    //create an object called contact useing the paramiters and return.
    const contact = {id, nameFirst, nameLast};
    return contact;
} 

//I: 
//O: an Object
// Create a factory Function called makeContactList that returns an Object that manages contacts

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
     //make contacts into an array to houuse the values
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        // the length function is already done for us, it returs the length of contacts 
        length: function() {
            return contacts.length;
        },
        // takes a contact object to be added to the contact-list
        addContact: function(contact) {
            contacts.push(contact)
        },
        //I: string
        //O: return Object
        // we need to find if the fullName is equal to the nameFirst + nameLast in the contacts array, if so return the contact object or undefined if it is not there
        findContact: function(fullName){
            // we will take the full name and split it into an array so we can ues it to search
            let splitName = fullName.split(" ");
            //loop through the array to see if the first names and last names match so we can return the object or return undefined
            for (let i = 0; i < contacts.length; i++){
                if (splitName[0] === contacts[i].nameFirst && splitName[1] === contacts[i].nameLast) {
                    return contacts[i];
                } else {
                    return undefined;
                }
            }
        },
        //I: an object
        //O: the object will be removed
        // we will have to match the argument to a contacts value and remove it.
        removeContact: function(contact){
        //create a loop to iterate over contacts and see if there is a match to remove
            for (let i = 0; i < contacts.length; i++){
                if (contacts[i] === contact){
                    return contacts.splice(i, 1);
                }
            }
        },
        //I:
        //O: strings
        //E: String formated with all the full-names of the separated with a line-break
        //We will have to iterate over contacts pushing the values into an arrayand then print them all as a string with each value on a new line
        printAllContactNames: function(){
            //create an array to house the values
            const names = [];
            // now we will loop through the array pusing the first name ans last name together (with a space between)
            for (let i = 0; i < contacts.length; i++){
                names.push(contacts[i].nameFirst + " " + contacts[i].nameLast);
            }
            // now we will return the array joined together with /n to make each name apear on a seperat line.
            return names.join("\n");
            
        },
    }
}




// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
