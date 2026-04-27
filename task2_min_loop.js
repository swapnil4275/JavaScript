// print min number using loop

let a = [10, 20, 30, 40, 50, 5, 55, 60, 6, 70];

let min = a[0];

for (let i = 1; i < a.length; i++) {

    if (min > a[i]) {

        min = a[i];

    }
}
console.log(min);