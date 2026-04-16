// calculate the sum of all array elements using for loop 

let a = [100, 200, 300, 400, 500];

let sum = 0;

for (let i = 0; a.length > i; i++) {

    sum = sum + a[i];
}

console.log("Sum of array : ", sum);