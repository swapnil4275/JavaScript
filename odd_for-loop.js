// print odd numbers 

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; a.length > i; i++) {

    if (a[i] % 2 !== 0) {

        console.log(a[i]);
    }
}