// Demonstrate JavaScript throw 

try {

    let age = 15;

    if(age < 18) {

        throw "Voting not allowed";
    }

    console.log("you can vote");
}

catch(error) {

    console.log(error);
}