// skip the multiples of 5 in the array 

let a = [12, 15, 17, 22, 25, 28, 30, 5, 33, 35, 45, 42];

let i = 0;

while (i < a.length) {

    if (i % 5 === 0) {

        i++;

        continue;
    }

    console.log(i);
    i++;
}