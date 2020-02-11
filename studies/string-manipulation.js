/**
 * String-Manipulation
 * 
 * 0. Strings are a wondeful datatype that can be molded to the needs of the 
 * programer to accomplish many feats.  Some String-manipulation methouds 
 * can even turn a string of words into an array!
 */

// 1. String Operators //

/**
 * There are two very useul operators thaty we can use with strings! Normaly 
 * operators are work well with number and booleans, but the addition 
 * operator (+) and add and assignment operator (+=) are wonderful tools 
 * to use on strings also. We can even concatinate numbers into our strings 
 * with these two operators!
 */

    let peanut = "Peanut-Butter";
    const grape = "Jelly";
    const order = "I will have " + 1 + " " + peanut + " & " + grape + " sandwich.";
    
    //will print: "I will have 1 Peanut-Butter & Jelly sandwich."
    console.log(order);
    
    //will print: "Peanut-Butter & Jelly" useing addition and assignment operator
    console.log(peanut += " & " + grape);

// 2. String Methods //

/**
 * There are many string methods that we can use to manipulate our strings, and we 
 * will go over a few of them now.
 * 
 * concat()	will join two or more strings, and return all strings into a new string
 */
    //we will create three lines of a haiku
    let lineOne = "An old silent pond... ";
    let lineTwo = "A frog jumps into the pond, ";
    let lineThree = "splash! Silence again.";
    //we will concat the three lines to make a haiku
    let haiku = lineOne.concat(lineTwo, lineThree);
    // will print: "An old silent pond... A frog jumps into the pond, splash! Silence again."
    console.log(haiku);

/**
 * includes() is used to see if a string includes the string/characters listed.
 */
    //we will make a string that we will search through with includes()
    var dorothyGale = "Toto, I've a feeling we're not in Kansas anymore.";
    //we make a variable with includes() to see if Kansas is in dorothyGale
    var homeState = dorothyGale.includes("Kansas");
    // will print => true
    console.log(homeState); 

/**
 * replace() will look through a string to find a specified string value and 
 * replaces it with a new string value.
 */
    // uses a misquoted movie line
    var darthVader = "Luke, I am your father.";
    // use replace() to fix this famous quote
    var correctDarthVader = darthVader.replace("Luke", "No");
    // will print No, I am your father.
    console.log(correctDarthVader);

/**
 * slice() will cut out a section of a string and returns a new string, 
 * so it works with const.
 */

    //famous line needs to be short, and it is is too positvive!
    const richard = 'Now is the winter of our discontent made glorious summer by this son of York,';
    //will cut and print "Now is the winter of our discontent" much sader
    console.log(richard.slice(0, 35));

/**
 * split() is one of my favoriate methods. Split() takes a string datatype 
 * using a seperator value to seperate the string into an array of strings.
 */
    //Make a string variable
    var casablanca = "Here's looking at you, kid.";
    //make a variable that be the string split() at each space (" ")
    var casablancaSplit = casablanca.split(" ");
    // will print an array:[ 'Here\'s', 'looking', 'at', 'you,', 'kid.' ]
    console.log(casablancaSplit);

/**
 * toUpperCase() will make a string change into all uppercase letters!
 */
    //We will make a variable string that need to be uppercased
    const beastieBoys = "You gotta fight for your right to party";
    //we will make a new variable to referance beastieBoys thats upercased
    const beastieBoysMorePower = beastieBoys.toUpperCase();
    //will print:YOU GOTTA FIGHT FOR YOUR RIGHT TO PARTY
    console.log(beastieBoysMorePower);