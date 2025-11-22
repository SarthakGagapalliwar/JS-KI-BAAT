// const now = new Date();

// const date = now.getDate();
// const month = now.getMonth() + 1;
// const year = now.getFullYear();

// const hours = now.getHours().toString().padStart(2, '0');
// const minutes = now.getMinutes().toString().padStart(2, '0');
// const seconds=now.getSeconds().toString().padStart(2,'0');

// console.log("Date  :", date);
// console.log("Month :", month);
// console.log("Year  :", year);
// console.log(`Time  : ${hours}:${minutes}:${seconds}`);





//to cheak data type //use typeof

// let a=true;
// console.log(typeof a);



//type of null is object
// It’s a bug (or design flaw) in JavaScript’s original implementation — and it can’t be fixed now because too much code depends on it.



// let a;
//if it diclear a varible ane cheack its type it will show undefine and unddefine is its achual value

// in const like array[] we cant reasing the valie like a++ to pertucalrelemnt but we can update the value




//to traverse char fro string  by for of loop 

// let str ="stringnaem";

// for(let cahrr of str){
//     console.log(cahrr);
    
// }



// for printing the obkect we will use for in loop

// var obj = {
//     name: 'a',
//     email: 'b',
// };

// for (let key in obj) {
//     console.log(key + ":", obj[key]); 
// }



// to adding elemt in satring in the are use  -> arr.unshift(0)if we have not delcler the size the will inscree the size also
// to chek the index of e;lemt use indexof()



//  Summary:
// JavaScript this refers to the calling object, not a memory address.
// JavaScript doesn't expose memory addresses directly like C/C++.
// It's not a pointer — JavaScript doesn't have pointers like C/C++.

// const obj = {
//   name: "Sarthak",
//   showName: function () {
//     console.log(this.name); // 'this' refers to 'obj'
//   }
// };

// obj.showName(); // Output: Sarthak



//to janrate random value for 1 18
// Math.floor(Math.random()*19);

//to 10 to 19
// const random = Math.floor(Math.random() * 9) + 10;
// console.log(random);





// let arr = [
//     {
//         name: 'manas',
//         gender: 'male'

//     },
//     {
//         name: 'ritik',
//         gender: 'female',

//     },
//     {
//         name: 'hardik',
//         gender: 'female',
//     }

// ]


// let result=arr.filter(obj=>{
//     return (obj.gender==='male');
// })

// console.log(result);



// let arr=['sgg', 'asss', 'asf', 'this'];

// let result=arr.map(ele =>{
//     return (ele.toUpperCase());
// })
// console.log(result);



//if key==0
// let obj={};
 
// let isEmpty=Object.keys(obj).length<1;
// if(isEmpty){
//     console.log("object 0"); 
// }


// const arr = [1, [2, [3, [4]]]];

// let ans= arr.flat(Infinity);
// console.log(ans);


// let arr=[1,2,[2,1,0], 5, 6];

// arr.splice(2,1,...arr[2]);
// console.log(arr);
// //
// let arr2=[1,3,4,2,[2,[4,5],1,0], 5, 6];
// console.log(arr2.flat(2));




// let arr=[1,2,'a']
// function cheackArry(localArry){
//    let isNum= localArry.every(elem => typeof elem==='number');
//    console.log(isNum);
// }
// cheackArry(arr)




// in js 0.1+0.2 !=== 0.3   
//beause 0.1+0.2 ===>>>0.30000000000004
//floating-point precios issues 


// let sum=(0.1+0.2).toFixed(2);
// console.log(sum);  // it will grt string type  for num next 

// let sum=Number((0.1+0.2).toFixed(2));
// console.log(sum===0.3);



/*
1st diifenrce= slice sirf string and array done ke sath work akrtha hia 
lekin splice apka sirf array ke sath kam karth hai

2nd slice apke og array,string me koi change nahi karta
lekin splice apke og array me change karta hai

| Feature                 | **slice()**                            | **splice()**                               |
| ----------------------- | -------------------------------------- | ------------------------------------------ |
| Purpose                 | Extracts a portion                     | Adds/removes/replaces elements             |
| Returns                 | New array (copied)                     | Removed elements                           |
| Modifies Original Array | ❌ No                                   | ✅ Yes                                      |
| Syntax                  | `arr.slice(start, end)`                | `arr.splice(start, deleteCount, ...items)` |
| Use Case                | When you want to **copy/extract** data | When you want to **edit the array**        |


*/ 




// reverse the string 

let string="my name is boss";
let finaldes=string.split(' ').map(word =>{
    let reveresWord=word.split('').reverse().join('');

    return(reveresWord);
    
}).join(' ');
console.log(finaldes);




//sting frist letere captital

// let sentence = "how are you boss i am fine";

// const capitalize = (s) => {
//     let words=s.split(' ').map(word=>{
//         return word.charAt(0).toUpperCase() +word.slice(1).toLowerCase();
//     });
//     return words.join(' ');
// };

// let name = capitalize(sentence);
// console.log(name);


// A closure is a function that "remembers" the variables from its lexical scope even when executed outside of that scope.

//funtion with the lexical scope=>closer