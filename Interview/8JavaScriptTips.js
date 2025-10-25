// 1.Remove false values from any array

Array.filter(Boolean);

//2.conver any value to boolean

console.log("Messi"); //Messi
console.log(!!"Messi"); //true  !! will give the boolen value
console.log(!!0); //false
console.log(!!undefined); //false

//Boolean
console.log(Boolean("Messi")); //True


//3. Resize any array
let animals = [1,2,3,4,5];
animals.length=3;
console.log(animals); // [1,2,3]


//4.flattening a multi dimensional array 

let array = [1,2,[1,2,],1,2];
array.flat(); //it will flate only one level 
//for Multi Level Array
array.flat(Infinity);



//5. short conditionals / short circuting

//regular 
let captain ="Messi";
if(captain === "Messi"){
    console.log("Love");
}

//short hand

captain === "Messi" && console.log("Love");
captain === "Messi" || console.log("Hate");


//6. Replace all the occuresnces of the stirng 
const quote= "Nect.js is a Js Library & this library is  the most popular front-end Library right now"

quote.replace(/library/g, "framework")  //  g this replace lib not Lib /g=globle
quote.replace(/library/gi, "framework")  // gi  this replace lib and Lib //i=insensative



//7. log values wiht variablenames smartly

const lib1 = "jQuary";
const lib2 = "React";

//Printing their values
console.log(`lib1 - ${lib1}`);

//smarter Way
console.log({lib1}); // log => {lib1 : jQuary}
console.log({lib2}); // log => {lib2 : jQuary}


//8. measuring perfomace

const start = performance.now()

for(let i=0; i<=50; i++){
    console.log(i);
}

const end= performance.now();

console.log(end-start);



