// ATM Example using try/catch 

try {

    let balance = 50000;
    let withdraw = 70000;

    console.log("Transaction Start");

    if (withdraw > balance) {

        console.log("Insufficient Balance");
    }

    else {

        balance = balance - withdraw;

        console.log("Remaining Balance : ", balance);
    }
}

catch(error) {

    console.log("Something went Wrong");
}

finally{

    console.log("Thank You Visit Again");
}