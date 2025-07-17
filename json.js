// json stands for javascrits Object Notation
//its lightweigth data fromat used to store and exchange the data like sending data betwwn a browser and server


//Note
//Keys ans string values are wrapped in double quates.
//its a string not an object


//stingify=>Object to JSON string
//parse=>JSON string to Object


let stringJson=`{
    "name":"Rahul",
    "age":25,
    "city":"Delhi"
}`
console.log(typeof stringJson);
let json =JSON.parse(stringJson);
console.log(json);

let newString = JSON.stringify(json)
console.log(newString);