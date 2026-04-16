// new array 

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let b = []

for(let i = 0; a.length > i; i++) {

    if (a[i] > 5) {

        b.push(a[i]);

    }
}
console.log(b);