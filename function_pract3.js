// print table and skip only even numvers 

function table(num) {

    for (let i = 1; i <= 10; i++) {

        if (i % 2 === 0) {
            continue;
        }
        console.log(num * i);
    }
}
table(5);