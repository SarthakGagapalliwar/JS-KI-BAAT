// class is just syntactic sugar for constructor functions and prototypes

//In JS, a class doesn’t introduce a brand-new object-oriented system (like in Java, C++, etc.).
//A class is just a cleaner, easier-to-read syntax for creating constructor functions and setting up prototype methods.
//Under the hood, when you write a class, JavaScript still uses constructor functions and prototypes.

// class is intro in es6


class BankAccount {
    customerName;
    accountNumber;
    balance = 0;


    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.balance=balance;
    }


    deposit(amount){
        this.balance+=amount;
    }

    withdraw(amount){
        if(this.balance>amount){
            this.balance-=amount;
        }
    }

}

const rakeshAccount= new BankAccount('Rakesh k',1000);
rakeshAccount.deposit(800);
rakeshAccount.withdraw(900);

console.log(rakeshAccount);


// In JavaScript, function declarations are hoisted, so you can call them before they are defined.
// But classes are NOT hoisted. You must define a class before using it.



/*
✅1. Function Declarations (hoisted fully)
greet(); // ✅ Works\
function greet() {
  console.log("Hello!");
}
  
⚠️ 2. Function Expressions (not hoisted fully)
sayHi(); // ❌ Error: Cannot access 'sayHi' before initialization
const sayHi = function() {
  console.log("Hi!");
};

Only the variable name is hoisted, not the function definition.
Before assignment, it’s in the temporal dead zone (TDZ) if declared with let or const, or undefined if declared with var.




⚠️ 3. Arrow Functions (same as function expressions)
hello(); // ❌ Error: Cannot access 'hello' before initialization
const hello = () => {
  console.log("Hello!");
};
Behaves exactly like function expressions.
Not hoisted as a function, only the variable is hoisted.


Summary for quick revision:
Function Declaration → Fully hoisted.
Function Expression / Arrow Function → Variable hoisted, function not.
Class → Not hoisted at all.

*/