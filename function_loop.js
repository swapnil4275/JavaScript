// print table of 5 using function , loop

// using for loop
// function table(num) {

//     for (let i = 1; i <= 10; i++) {

//         console.log(num * i);
//     }
// }
// table(5);


//using while loop
// function table(num) {

//     let i = 1;
//     while (i <= 10) {

//         console.log(num * i);
//         i++;
//     }
// }
// table(5);


// using do while loop
function table(num) {

    let i = 1;

    do {
        console.log(num * i);
        i++;
    }
    while(i <= 10);
}
table(5);