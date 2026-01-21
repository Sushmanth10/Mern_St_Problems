function stBank(){
    let bankBalance = 0;

    function withdraw(x){
        // if(bankBalance < x)

        bankBalance = bankBalance - x
        console.log(`Your withdrawal has been success ${x}`);
        // alert(`Your amount has been successfully withdrawal ${x}`)
    }

    function demo(){
        console.log("Here is your demo account!")
    }

    function deposit(y){
        bankBalance = bankBalance + y
        console.log(`Your amount has been Deposited ${y}`);
    }

    function getBankBalance(){
        console.log(`Your Bank Balance is ${bankBalance}`);
    }
    return{withdraw,deposit,getBankBalance}
}

const sushmanthAcc = stBank();
console.log(sushmanthAcc);

sushmanthAcc.deposit(2000);
sushmanthAcc.withdraw(1000);
sushmanthAcc.getBankBalance();
sushmanthAcc.deposit(2000);
sushmanthAcc.getBankBalance();
sushmanthAcc.withdraw(3000);
sushmanthAcc.getBankBalance();