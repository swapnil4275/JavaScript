// Demonstrate RegExp Flags 

// i - case ignore
let str = "Hello";
console.log(/hello/i.test(str));

// g - all match
let str1 = "1, 2, 3";
console.log(str1.match(/\d/g));
