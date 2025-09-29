class BankAccount {
    customerName;
    accountNumber;
    // balance = 0;
    #balance = 0; // by given this # will works as private


    constructor(customerName,balance=0){
        this.customerName=customerName;
        this.accountNumber=Date.now();
        this.#balance=balance;
    }


    deposit(amount){
        this.#balance+=amount;
    }

    withdraw(amount){
        if(this.#balance>amount){
            this.#balance-=amount;
        }
    }

    //normla 
    // setBalance(amount){
    //     if(isNaN(amount)){
    //         throw new console.error("this is not valid input");
            
    //     }
    //     this.#balance=amount;
    // }

    // getBalance(){
    //     return this.#balance;
    // }

    //by js synatax
    set balance(amount){
        if(isNaN(amount)){
            throw new console.error("this is not valid input");
            
        }
        this.#balance=amount;
    }

    get balance(){
        return this.#balance;
    }

}

class CurrentAccount extends BankAccount{
    trasactionLimit=50000;

    constructor(customerName,balance=0){
        super(customerName,balance); // to pass the parement in main constructor
        // console.log(this.#balance); // cant be asis beuse of privte propteries
        // we can not accec parent private proprtirses
        //csnt acces in sub-class this is cureenacount is sub class
    }

    #calcualteInterest(amount){
        console.log("calulating interest");
    }

    takeBusinessLoan (amount){
        //Logic 
        this.#calcualteInterest(amount);
        console.log('Taking business loan'+amount);
    }
}


const rakeshAccount = new CurrentAccount('rakesh K',2000);
// rakeshAccount.balance=5000; // this will work but we want that this should not work outside
// rakeshAccount.balance='hello'; // this will work but we want that this should not work outside
// to avoide this we will use encapulation


//rakeshAccount.#balance='hello'; // now this will give an error Privte fiel cant be ecess

// rakeshAccount.setBalance(400);  // this will work for exec for this priavte field
// console.log(rakeshAccount.getBalance());


// rakeshAccount.balance=500;
// console.log(rakeshAccount.balance);


rakeshAccount.takeBusinessLoan(4000);
console.log(rakeshAccount);

