// Demonstrate RegExp Quantifiers 

// + - 1 or more
let str = "abc12345";
console.log(str.match(/\d+/));


// * - 0 or more (o valid)
let str1 = "abc";
console.log(str1.match(/\d*/));


// ? - optional
let str3 = "color";
console.log(/colou?r/.test(str3));