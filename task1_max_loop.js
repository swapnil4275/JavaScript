// print max number 

let a = [100, 10, 12, 14, 16, 18, 20, 22, 24];

let max = a[0];

for (let i = 1; i < a.length; i++) {

    if (max < a[i]) {

        max = a[i];

    } 
}
console.log(max);
