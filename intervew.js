/*
In JavaScript, both .slice() and .splice() are used to work with arrays — but they behave very differently:

🔹 slice(start, end)
✅ Returns a new array.

❌ Does NOT modify the original array.

Copies elements from start (inclusive) to end (exclusive).

const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 4);  // [2, 3, 4]

console.log(arr);     // [1, 2, 3, 4, 5] — unchanged
console.log(sliced);  // [2, 3, 4]




 splice(start, deleteCount, ...items)
✅ Modifies the original array.

✅ Can remove and/or insert elements.

Returns an array of deleted elements.

✅ Example:
js
Copy
Edit
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(1, 2);  // remove 2 elements starting from index 1

console.log(arr);     // [1, 4, 5] — original is changed
console.log(removed); // [2, 3]

*/

/*
how can we empty the array?
let arr = [1, 2, 3];
arr.length = 0;
console.log(arr); // []


let arr = [1, 2, 3];
let ref = arr;
arr = [];
console.log(ref); // [1, 2, 3] — still holds the old array


arr.splice(0, arr.length);


To remove duplicate elements from an array in JavaScript,
const arr = [1, 2, 2, 3, 4, 4, 5];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5]





function getDuplicates(arr) {
  const count = {};
  const duplicates = [];

  for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
  }

  for (let num in count) {
    if (count[num] > 1) {
      duplicates.push(Number(num)); // or just push `num` if using strings
    }
  }

  return duplicates;
}

// Example:
const arr = [1, 2, 2, 3, 4, 4, 5, 1];
console.log(getDuplicates(arr)); // [1, 2, 4]



functon abc(a,b,c){
}
functon pqr(a=0,b,c){
}
log(abc.lenght,prq.length);

🧠 .length of a Function:
The .length property of a function returns the number of parameters before the first one with a default value.

✅ Example:
abc(a, b, c)
No default values
➡️ abc.length === 3

pqr(a = 0, b, c)
a has a default → so counting stops before a
➡️ pqr.length === 0

Even though pqr has 3 parameters, .length ignores any parameters after or including the first one with a default value.




1. Primitive Data Types
These are basic, immutable (cannot be changed), and stored by value.

✅ List of Primitive Types:
Type	Example
Number	42, 3.14
String	'hello', "JS"
Boolean	true, false
Undefined	let x; → x is undefined
Null	let y = null;
BigInt	1234567890123456789012345678901234567890n
Symbol	Symbol('id')

🔸 2. Non-Primitive (Reference) Data Types
These are mutable, and stored by reference (pointer to memory).

✅ List of Non-Primitive Types:
Type	Example
Object	{ name: 'Alice' }
Array	[1, 2, 3]
Function	function() {} or ()=>{}
Date, Map, Set, RegExp, etc.	



 Example Comparison:

// Primitive
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (a is unaffected)

// Non-Primitive
let obj1 = { name: 'John' };
let obj2 = obj1;
obj2.name = 'Jane';
console.log(obj1.name); // 'Jane' (same referenc\





console.log([]===[]); // false;
console.log([]==[]); //false

Each [] creates a new array in memory, so:
[] === [] compares two different memory addresses ➝ false
[] == [] also checks reference equality ➝ still false

const arr = [];
console.log(arr === arr); // true
console.log(arr == arr);  // true


console.log([1, 2] === [1, 2]); // false
console.log({ a: 1 } === { a: 1 }); // false
Why? Because they’re different objects in memory, even if the contents are the same.



Solution: Use JSON.stringify() for simple deep comparison
const a = [1, 2];
const b = [1, 2];

console.log(JSON.stringify(a) === JSON.stringify(b)); // true


let:
❌ Cannot be re-declared in the same scope

✅ Can be re-assigned
let x = 10;
x = 20;         // ✅ allowed
let x = 30;     // ❌ SyntaxError (cannot re-declare in the same block)


✅ const:
❌ Cannot be re-declared
❌ Cannot be re-assigned
✅ Can mutate contents if it's an object or array
const y = 100;
y = 200;        // ❌ TypeError (can't re-assign)

// Objects and arrays:
const obj = { a: 1 };
obj.a = 99;     // ✅ allowed (mutating the object is fine)
obj = {};       // ❌ TypeError (reassignment not allowed)

const arr = [1, 2];
arr.push(3);    // ✅ allowed
arr = [4, 5];   // ❌ TypeError

Feature	let	const
Re-declaration	❌ No	❌ No
Re-assignment	✅ Yes	❌ No
Mutability	✅ Yes	✅ Yes (if non-primitive)

*/


let str="this is sharhrukh khan"

let newStr=str.split(' ').map((item)=>item[0].toUpperCase()+item.slice(1,item.length)+"\n").join(' '); //this will ot wors proparrty
let str2 = "this is sharhrukh khan";

let newStr2 = str
  .split(' ')
  .map(item => item[0].toUpperCase() + item.slice(1))
  .join('\n'); // Join with newline instead of space

console.log(newStr);


console.log(newStr);


console.log(typeof NaN);
console.log(NaN==NaN); //NaN is not equal to anything, even itself. //false
console.log(NaN===NaN); //same for thus //false


// var a=10;
// console.log(++a); //11
// console.log(a++); //11
// console.log(a);   //12

let a=10;
console.log(++a);   //11
console.log(a++);   //11
console.log(a);     //12


// for const not possible