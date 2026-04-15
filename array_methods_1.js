// Demonstrate Array methods 

// 1. push()
let array1 = ["Apple", "Banana", "Mango"];

array1.push("Orange");

console.log("push- orange : ", array1);


// 2. pop()
let array2 = ["Apple", "Banana", "Mango", "Orange"];

array2.pop();

console.log("pop() : ", array2);


// 3. unshift()
let array3 = ["Apple", "Banana", "Mango"];

array3.unshift(2);

console.log("unshift(2) : ", array3);


// 4. shift()
let array4 = ["apple", "Banana", "Mango", "Orange"];

array4.shift();

console.log("shift() : ", array4);


// 5. length
let array5 = ["Apple", "Banana", "Mango", "Orange"];

console.log(".length : ", array5.length);


// 6. indexOf
let array6 = ["Apple", "Banana", "Mango", "Orange"];

console.log("indexOf (Mango) : ", array6.indexOf("Mango"));


// 7. includes()
let array7 = ["Apple", "Banana", "Mango", "Orange"];

console.log("includes (Banana) : ", array7.includes("Banana"));


// 8. toString()
let array8 = ["Apple", "Banana", 89, 88, "Mango", true, "Orange"];

console.log("toString() : ", array8.toString());


// 9. join()
let array9 = ["Apple", "Banana", "Mango", "Orange"];

console.log("join(-) : ", array9.join("-"));


// 10. reverse()
let array10 = ["Apple", "Banana", "Mango", "orange"];

console.log("reverse() : ", array10.reverse());