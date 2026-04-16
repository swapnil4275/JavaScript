// find maximum number 

let a = [100, 200, 300, 400, 500];

let max = a[0];

for(let i = 1; a.length > i; i++) {

    max = max > a[i]; {

        max = a[i];
    }
}

console.log(max);