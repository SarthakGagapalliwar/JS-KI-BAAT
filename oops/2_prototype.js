function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;


    // this.deposit = function(amount) {  // this is a method
    //     this.balance += amount;
    // }
    // this.withdraw = (amount) => {  // this is also a method
    //     if (amount < this.balance) {
    //         this.balance -= amount;
    //     }
    // }

    // In this code, both deposit and withdraw methods are created inside every object.
    // That means each object gets its own copy of these methods, which is not efficient.
    // To avoid duplicating methods for every object, we can define them on the prototype instead.
    // Keeping methods in the prototype allows all objects to share the same function.

}

const rakeshAccount = new BankAccount("Rakesh k",800);
// const johnAccount = new BankAccount("John Doe",1000);

// console.log(rakeshAccount, johnAccount);

//prototype value is empty object {}

BankAccount.prototype.deposit = function (amount) {
    // We must use a normal function here.
    // Arrow functions use lexical scope for `this`, so `this` would not refer to the BankAccount instance.
    // With a normal function, `this` correctly refers to the BankAccount object.
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount){
    if (amount < this.balance) {
            this.balance -= amount;
    }
}

rakeshAccount.deposit(500)
rakeshAccount.withdraw(600)

console.log(rakeshAccount);
 