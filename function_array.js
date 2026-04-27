// print table of 5 in array using function 

function table(num) {

    let array = [];

    for (let i = 1; i <= 10; i++) {

        array.push(num * i);
    }
    console.log(array);
}
table(5);