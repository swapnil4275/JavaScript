// Print reverse table only even numbers  

function table(num) {

    for (let i = 10; i >= 1; i--) {

        if (i % 2 === 0) {

            console.log(num * i);
        }
    }
}
table(5);