
let array1 = [100, 2, 1, 3, 5, 10, 11, 12, 13];

let array2 = [];
let array3 = [];
let num = 3;

for (let i = 0; i < array1.length; i++) {

    array2[array2.length] = array1[i];

    if (array2.length === num) {

        array3[array3.length] = array2;

        array2 = [];
    }
}

if (array2.length > 0) {

    array3[array3.length] = array2;
}

console.log(array3);
