function BankAccount(customerName,balance=0){
    this.customerName=customerName;
    this.accountNumber=Date.now();
    this.balance=balance;


    this.deposite = function(amount){
        this.balance += amount;
    }
    this.withdraw = (amount)=>{
        if(amount<this.balance){
            this.balance-=amount;
        }
    }   
}

// const rakeshAccount = new BankAccount("Rakesh k",1000);  // new will mkae the object from this contureture funciton
// const johnAccount = new BankAccount("John Doe"); 

// rakeshAccount.deposite(5000);
// rakeshAccount.withdraw(2000);
// johnAccount.deposite(5000);
// console.log(rakeshAccount,johnAccount); 


 ///////////////**********//////////////////

const accounts = [];


const accountForm = document.querySelector('#accountForm')
const customerName = document.querySelector('#customerName')
const balance = document.querySelector('#balance')

const depositForm = document.querySelector('#depositForm')
const accountNumber = document.querySelector('#accountNumber')
const amount = document.querySelector('#amount')


accountForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account = new BankAccount(customerName.value,+balance.value); // + to cover string to number
    accounts.push(account);
    console.log(accounts);
})

depositForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const account= accounts.find((account) =>account.accountNumber === +accountNumber.value);

    account.deposite(+amount.value);
    console.log(accounts);
})




//important
//Array and object are in-build constructors in javascript