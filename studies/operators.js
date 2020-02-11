/**
 * Operators
 * 
 * 0. Operators are how we can manipulate our code useing matimatical
 *  and logical compucation.  We can use operators to check values, 
 * create new values and assign value.  As we will see there are quite 
 * a few option with operators.
 */

// 1. Assignment operators //

/**
 * We use assignment operators to give value and meaning to our code. 
 * When reading assignment operators think of it left to right with the 
 * "action" haping on the right side, and the result house on the left. 
 * Add and Assignment Operator can also work on strings.
 * 
 *    Operator	                            Example	        Same As
 *   =  (Assignment Operator)                x = y	        x = y	
 *   += (Add and Assignment Operator)        x += y	        x = x + y
 *   -= (Subtract and Assignment Operator)   x -= y	        x = x - y
 *   *= (Multiply and Assignment)	         x *= y	        x = x * y
 *   /= (Divide and Assignment)	             x /= y	        x = x / y
 *   %= (Modules and Assignment)	         x %= y	        x = x % y
 *   **=(Exponentiation assignment)          x **= y	    x = x ** y
 */

// 2. Arithmetic operators //

/**
 * We can preform matimatical feats with Arithmetic opperations. Here 
 * are the Arithmetic operators we can use. They all work with numbers. 
 * Addition also works to concatinate strings.
 * 
 *    Arithmetic Operator	                  Example	       Same As
 *   +  (Addition: cincatinates two values)  x + y	      2 + 1 // 3
 *   -  (Subtract: reduces from a value)     x - y	      3 - 2 // 1
 *   *  (Multiply: Mutiplication of values)	 x * y	      3 * 2 // 6
 *   /  (Divide: Division of values)	     x / y	      6 / 3 // 2
 *   %  (Binary Modulus: Finds div remainder)x % y	      6 % 4 // 2 
 *   ** (Exponentiation: value to the power) x ** y	     4 ** 4 // 256
 *   ++ (Increment: Unary operator adds 1)   x++	        4++ // 5
 *   -- (Decrement: Unary operator subs 1)   x--	        4-- // 3
 *   (-)(Unary negation: makes negative)     -x	   y = 6; y = -x// y = -6
 *   (+)(Unary plus: makes positive)         +x	  y = -9; y = +x// y = 9
 */

// 3. Comparison operators //

/**
 * When we have to compare two values we have several differant operators 
 * to choose from.  The operands could be mutipule datatypes: strings, 
 * number, logical, or even objects. They will all return true if 
 * conditions are met. 
 * 
 *    Comparison Operator	                        Example	     Return True
 *   == (Equal: test operands are equal)           x == y	     2 + 1 == 3
 *   ===(Strict equal: test if same type & equal)  x === y       3 - 2 === 1
 *   != (Not equal: if operands not equal)	       x != y	     1 != 6
 *   !==(Strict not equal: Any type not equal)	   x !== y	     "Dog" !== {}
 *   >  (Greater than: left greater than right)	   x > y	     6 > 4
 *   <  (Less than: left less than right)          x < y	     1 < 3
 *   >= (Left is 'Greater than or equal' to right) x >= y        50 >= 50
 *   <= (Left is 'Less than or equal' to right)	   x <= y	     1 <= 6
 */


// 4. Logical operators //

/**
 * Booleans are a perfect pair for logical operators to return true or false. 
 * If we do not use a boolean value logical operators may return a non-boolean.
 * 
 *    Logical Operator	                            Example	     Return True
 *   && (Logical AND: test both operands are true)  x && y	     2 + 1 && 3
 *   || (Logical OR: test if one operands true)     x || y       3 - 2 || 50
 *   !  (Logical NOT: makes operands not true)	    x != y	     !1 = 6
 */

// 5. Unary operators //

/**
 * It is easy to remember that unary operators need only one operand. I like 
 * to think of them a simple functions that do not requier much code to yeld 
 * big results.
 * 
 *    Unary Operator	                              Example	    Return
 *   delete (deletes the property of an object)     delete obj	obj //undefined
 *   typeof (returnd string of operand's type)      typeof true "boolean"
 *   void (looks at expression and does not return)	void this   (nothing)
 *   + (Unary plus: makes positive)         +x	    y = -9;     y = +x// y = 9
 *   - (Unary negation: makes negative)     -x	    y = 6;      y = -x// y = -6
 *   ~  (NOT: Inverts the bits of its operand)      ~a = 0	    a = 1
 *   !  (Unary Logical NOT: makes operands not true) x != y	    !1 = 6 // true
 */

// 6. Ternary operator (a ? b : c) //

/**
 * The Ternary/Conditional operator can have one of two diferant values based 
 * on a condition stated. If the condition is true the value will be the first 
 * of the two, if false it will be the second value.
 */

    let whatItsLike = ("run" > "dmc") ? "This" : "That";
    console.log(whatItsLike); // will return "This"