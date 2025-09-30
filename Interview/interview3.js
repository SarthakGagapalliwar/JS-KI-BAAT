for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1000
    );
}

/* 
var => 3 3 3 
let => 0 1 2

Step 1: var vs let
var is function-scoped, meaning there is only one i shared across all iterations.
let is block-scoped, meaning a new i is created for each iteration of the loop.

Step 2: What happens with var?
The loop runs, incrementing i from 0 → 1 → 2 → 3.
Each setTimeout callback references the same i variable.
After 1000ms, the loop is already finished, so i = 3.
All three console.log(i) calls print 3.
✅ Output: 3 3 3

Solution 1: Use an IIFE   closer
for (var i = 0; i < 3; i++) {  
    (function(j) {          // create a new scope
        setTimeout(() => console.log(j), 1000);
    })(i);                  // pass the current value of i
} Output: 0 1 2

Solution 2: Use setTimeout’s additional arguments (less known)
for (var i = 0; i < 3; i++) {
    setTimeout((j) => console.log(j), 1000, i);
}

Step 3: What happens with let?
The loop runs, but each iteration has its own block-scoped i: 0, 1, 2.
Each setTimeout callback closes over its own i.
After 1000ms, the callbacks print their respective values.
✅ Output: 0 1 2

*/

/*
1 + "2" + "2" => "122" 
1 + +"2" + "2" => "32"
1 + -"1" + "2" => "02"
+"1" + "1" + "2" => "112"
"A" - "B" + "2" => "NaN2"
"A" - "B" + 2 => NaN
*/

// console.log([1,2,3]+[4,5,6]); =>1,2,34,5,6
// console.log([..."hello"]); =>[ 'h', 'e', 'l', 'l', 'o' ]

const arr = [1, 2, 2, 3, 4, 1, 1];

// Deduplicate using Set (correct syntax: capital S)
const uniqueWithSet = [...new Set(arr)];
console.log('Unique (Set):', uniqueWithSet); // => [ 1, 2, 3, 4 ]

// Alternative 1: filter + indexOf (O(n^2) worst case)
const uniqueWithFilter = arr.filter((v, i) => arr.indexOf(v) === i);
console.log('Unique (filter/indexOf):', uniqueWithFilter);

// Alternative 2: using an object/map to track seen values (O(n))
const uniqueWithMap = (() => {
    const seen = new Set();
    const out = [];
    for (const n of arr) {
        if (!seen.has(n)) { seen.add(n); out.push(n); }
    }
    return out;
})();
console.log('Unique (manual Set loop):', uniqueWithMap);

// Alternative 3: reduce
const uniqueWithReduce = arr.reduce((acc, cur) => acc.includes(cur) ? acc : [...acc, cur], []);
console.log('Unique (reduce):', uniqueWithReduce);

// Interview notes:
// - Set preserves insertion order of unique values.
// - Spreading [...new Set(array)] is the most concise and performant (near O(n)).
// - Be careful: writing 'new set()' (lowercase) throws ReferenceError because constructors are case-sensitive.


// new best easy apprich

let unq =[];
for(let i=0; i<arr.length; i++){
    if(!unq.includes(arr[i])){
        unq.push(arr[i]);
    }
}
console.log(unq);


const arr1 = [1,2 ,[1,2,[3]],[6,5],7];
const flattened = arr1.flat(2); 
console.log(flattened);


// Solution 2: Using recursion (works in older JS versions)
function flattenArray(arr) {
    let result = [];
    arr.forEach(el => {
        if (Array.isArray(el)) {
            result = result.concat(flattenArray(el));
        } else {
            result.push(el);
        }
    });
    return result;
}

console.log(flattenArray(arr1));



//how to accesss objet key dynamically

let user={
    name:'anil',
    age:30,
    email:'anil@test.com'
}
let info="name";
console.log(user.info); // this will give undefinr it will chek the cheak data of info not name
// to acces the it we will use []
console.log(user[info]);
