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

class CurrentAccount extends BankAccount{
    trasactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance); // to pass the parement in main constructor
    }

    takeBusinessLoan (amount){
        console.log('Taking business loan'+amount);
    }
}


class SavingAccount extends BankAccount{
    trasactionLimit=10000;

    constructor(customerName,balance=0){
        super(customerName,balance); // to pass the parement in main constructor
    }

    takePersonalLoan (amount){
        console.log('Taking personal loan '+amount);
    }
}

const rakeshAccount= new SavingAccount('Rakesh k',1000);
rakeshAccount.deposit(800);
rakeshAccount.withdraw(900);
rakeshAccount.takePersonalLoan(10000)
console.log(rakeshAccount);






// for constructor_function
/*
function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;

}

BankAccount.prototype.deposit = function (amount) {
    this.balance += amount;
};

BankAccount.prototype.withdraw = function(amount){
    if (amount < this.balance) {
            this.balance -= amount;
    }
}

function CurrentAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance);// this is constructor linking
    this.trasactionLimit=50000;
}

CurrentAccount.prototype=Object.create(BankAccount.prototype);

CurrentAccount.prototype.takeBusinessLoan = function (amount) {
    console.log("taking business loan: "+amount);
};

function SavingAccount(customerName,balance=0){
    BankAccount.call(this,customerName,balance); // this is constructor linking
    this.trasactionLimit=10000;
}
SavingAccount.prototype=Object.create(BankAccount.prototype);

SavingAccount.prototype.takePersonalLoan=function(amount){
    console.log('taking personal loan '+amount);
};

const rakeshAccount = new SavingAccount("Rakesh k",5000);
rakeshAccount.deposit(500);
console.log(rakeshAccount);

*/