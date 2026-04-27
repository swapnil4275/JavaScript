// find largest number in array 

let a = [12, 3, 45, 34, 43, 47, 23];

let i = 0;
let large = a[0];

while (i < a.length) {

    if (large < a[i]) {

        large = a[i];
    }
    i++;
}
console.log(large);



// let i = 1;

// let large = 1;

// while (i <= 20) {

//     if (large < i) {

//         large = i;
//     }
//     i++;
// }
// console.log(large);