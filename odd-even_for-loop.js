// create seperate array for odd & even 

let a = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let even = [];
let odd = [];

for (let i = 0; a.length > i; i++) {

    if (a[i] % 2 === 0) {

        even.push(a[i]);
    }
    
    else {
        
        odd.push(a[i]);
    }
}

// console.log("Array : ", a);
console.log("Even : ", even);
console.log("odd : ", odd);