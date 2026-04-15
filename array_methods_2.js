// Demonstrate array methods

// sort()
let array1 = ["Mango", "Apple", "Banana", "Orange"];

array1.sort();

console.log("sort() : ", array1);


// slice()
let array2 = ["Apple", "Mango", "Banana", "Orange"];

let result = array2.slice(1, 3);

console.log("slice() : ", result);


// splice  

//splice remove value
let array3 = ["Apple", "Banana", "Mango", "Orange"];

array3.splice(1, 2);  // (start, deleteCount)

console.log("splice() : ", array3);

//splice add value
let array4 = ["Apple", "Orange"];

array4.splice(1, 0, "Tomato", "Onion"); // (start, deleteCount, addValue)

console.log("splice(start, delete, add) : ", array4);

// splice replace value
let array5 = ["Apple", "Banana", "Orange", "Mango"];

array5.splice(1, 1, "Tomato");

console.log("splice(start, deleteCount, addvalue : ", array5);


// map()

//string map()
let array6 = ["apple", "banana", "Mango", "tomato"];

let result1 = array6.map(n => n.toUpperCase());

console.log("map() string : ", result1);

// numbers map()
let array7 = [10, 20, 30, 40, 50];

let result2 = array7.map(n => n + 5);

console.log("map() numbers : ", result2);


// filter 

// string
let array8 = ["Apple", "Banana", "Mango", "Orange"];

let result3 = array8.filter(n => n.length > 5);

console.log("filter() string : ", result3);

// numbers
let array9 = [10, 25, 30, 45, 50, 65];

let result4 = array9.filter(n => n % 2 === 0);

console.log("filter() numbers : ", result4);



// find 
let array10 = [10, 20, 30, 40, 50, 60, 70];

let result5 = array10.find(n => n > 35);

console.log("find() : ", result5);


// foreach()
let array11 = [10, 20, 30, 40, 50, 60];

let result6 = array11.forEach(n => {console.log("forEach() : ", n)});


// some()
let array12 = [10, 20, 30, 40, 50];

let result7 = array12.some(n => n > 45);

console.log("some() : ", result7);


// every()
let array13 = [10, 20, 30, 40, 50, 60];

let result8 = array13.every(n => n > 30);

console.log("every() : ", result8);



// reduce
let array14 = [10, 20, 30, 40, 50, 60, 70];

let result9 = array14.reduce((total, n) => total + n , 0);

console.log("reduce() : ", result9);

