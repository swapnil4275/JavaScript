// print grouping output 

let a = [[100, 2, 1], [3, 5, 10], [11, 12, 13]];

let size = 4;
let a2 = [];
let a3 = [];

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a[i].length; j++) {

        a2[a2.length] = a[i][j];


        if (a2.length === size) {

            a3[a3.length] = a2;
            
            a2 = [];
            
        }
    }
}



console.log(a3);