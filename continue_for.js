// Demonstrate continue; in for loop 

for (let i = 1; i <= 5; i++) {

    if (i === 3) {   // skip 3
        continue;
    }
    console.log(i);
}