// largerst no 

let a = [12, 0, 10, 39, 47, 84, 74];

let large = a[0];

for (let i = 1; a.length > i; i++) {

    if (large < a[i]) {

        large = a[i];
    }
}
console.log(large);