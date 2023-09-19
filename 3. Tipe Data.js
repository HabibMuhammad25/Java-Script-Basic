let z;
console.log(typeof(z));
/* output: undefined */

let x = 10;
console.log(typeof(x))
/* output: number */

let y = 17.25;
console.log(typeof(y))
/* output: number */


console.log("_____________________________")
let a = 12;
let b = 9;

console.log(a + b)
console.log(a - b)
console.log(a * b)
console.log(a / b)
console.log(a % b)

/* output:
21
3
108
1.3333333333333333
3
*/


console.log("_____________________________")
/* Increment dan Decrement */
let postfix = 5;
console.log(postfix++);
/* output: 5 */
console.log(postfix);
/* output: 6 */

let prefix = 5;
console.log(++prefix);
/* output: 6 */


console.log("_____________________________")
const bigNumber = 1234567890123456789012345678901234567890n;
const myInt = 1234567890123456789012345678901234567890;

console.log(bigNumber);
console.log(myInt);
/* output
1234567890123456789012345678901234567890n
1.2345678901234568e+39
*/


console.log("_____________________________")
console.log(5n + 2n);
console.log(5n - 2n);
console.log(5n * 2n);
console.log(5n / 2n);
console.log(5n % 2n);

/* output
7n
3n
10n
2n; Bukan 2.5n
1n
*/


console.log("_____________________________")
let greets = "Hello";
console.log(typeof(greets))
/* output: string */


console.log("_____________________________")
const question = '"What do you think of JavaScript?" I asked';
console.log(question)
/* output: "What do you think of JavaScript?" I asked */


console.log("_____________________________")
// const answer = '"I think it's awesome!" he answered confidently';
// console.log(answer);
const answer = '"I think it\'s awesome!" he answered confidently';
console.log(answer);


console.log("_____________________________")
console.log("Windows path: C:\\Program Files\\MyProject");


console.log("_____________________________")
let greet = "Hello";
let moreGreet = greet + greet;
console.log(moreGreet);
/* output: HelloHello */


console.log("_____________________________")
const myName = "Habib";
console.log(`Hello, my name is ${myName}.`);
/* output: Hello, my name is Luke. */


console.log("_____________________________")
let h = true;
let i = false;

console.log(typeof(h))
console.log(typeof(i))

/* output: 
boolean
boolean
*/


console.log("_____________________________")
const j = 10;
const k = 12;
let isGreater = a > b;
let isLess = a < b;

console.log(isGreater);
console.log(isLess);
/* output:
false
true
*/


console.log("_____________________________")
let someLaterData = null;
console.log(someLaterData);

/* output:
null
*/

console.log("_____________________________")
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 == id2);

/* output
false
*/