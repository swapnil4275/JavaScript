// count number of digit 

let num = 34567456;
let count = 0;

while (0 < num) {

    num = Math.floor(num/10);

    count++;
}
console.log(count);


// use array

// let a = [1, 2, 3, 4, 5, 6];

// let i = 0;
// let count = 0;

// while (i < a.length) {

//     count++;
//     i++;
// }
// console.log(count);