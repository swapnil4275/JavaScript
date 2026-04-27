
let a = [[100, 2, 1], [3, 5, 10], [11, 12, 13]];

let array2 = [];
let array3 = [];
let num = 4;

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {

        array2[array2.length] = a[i][j];


        if (array2.length === num) {

            array3[array3.length] = array2;
            array2 = []; 

        }
    }
}
if (array2.length > 0) {

    array3[array3.length] = array2;
} 

console.log(array3);