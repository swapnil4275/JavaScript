// Demonstrate continue; in array using while loop 
// skip all even numbers in this array 

let array = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

let i = 0;

while (i < array.length) {

    if (array[i] % 2 === 0) {
        
        i++;
        continue;
    }
    console.log(array[i]);

    i++;
}