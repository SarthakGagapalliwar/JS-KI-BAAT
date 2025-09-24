const arr=[5,6,8,4,4];
// map is use for the transform the array liek double it or traverser it;

function double(x){
    return x*2;
}

const output=arr.map(double)
console.log(output);


//in higher order function we will do;

const output2=arr.map(function double(x){
    return x*2;
});
const output3=arr.map((x)=> x*2);
console.log(output2);


//filter fucntio use to filter the value like example filter the valuer for the add odd number
const arr2=[5,1,3,6]
const output4=arr2.filter((x)=> x%2==0);
console.log(output4);



const arr3=[5,1,3,6]

//reduser is uest ho itrate for every aaray elemrnt from it like xample to find max element it or sum;

function findSum(arr3){
    let sum=0;
    for(let i=0; i<arr3.length; i++){
        sum=sum+arr[i];
    }
    return sum;
}
console.log(findSum(arr));

//to reduce this we will sue use reducer

const output5=arr.reduce(function(acc,curr){ // curr repents the arry values.acc will use acclumate the value like sum 
    acc=acc+curr;   
    return acc;

},0);// this is intital value for the accumuater
console.log(output5);


const output6=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
    return max;
},0)
console.log(output6);


const users = [
  { firstName: "akshay", lastName: "saini", age: 26 },
  { firstName: "donald", lastName: "trump", age: 75 },
  { firstName: "elon", lastName: "musk", age: 50 },
  { firstName: "deepika", lastName: "padukone", age: 26 }
];
//list of full name;

// const fullName=users.map(x=>x.firstName+" " + x.lastName);
// console.log(fullName);


//rectun numerb od age count
const count = users.reduce(function(acc, curr) {
    if (acc[curr.age]) {
        acc[curr.age] += 1;
    } else {
        acc[curr.age] = 1;
    }
    return acc;
}, {});

console.log(count);


//filter first first name whose age less than 30;
   
const fiterOut=users.filter(x=>x.age<30).map((x)=>x.firstName)
console.log(fiterOut);

//by reduse
const filteRiduce = users.reduce(function(acc, curr) {
    if (curr.age < 30) {
        acc.push(curr.firstName);
    }
    return acc;
}, []); 
console.log(filteRiduce);


//all use in one;



const products = [
  { name: "Laptop",     price: 499, color: "white", inShoppingCart: true },
  { name: "Smartphone", price: 899, color: "black", inShoppingCart: false },
  { name: "Headphones", price: 50,  color: "white", inShoppingCart: false },
  { name: "Tablet",     price: 199, color: "grey",  inShoppingCart: true },
  { name: "Keyboard",   price: 210, color: "blue",  inShoppingCart: false }
];

const cardPrice= products.filter(p => p.inShoppingCart)
                         .map(p => p.price * 0.5)
                         .reduce((total,price)=>{
                            return total+price
                         },0)

console.log(cardPrice);
