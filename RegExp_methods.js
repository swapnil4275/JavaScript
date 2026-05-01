// Demonstrate RegExp Methods 

// 1. test()
let str1 = "abc";
console.log(/abc/.test(str1));


// 2. match()
let str2 = "abc123";
console.log(str2.match(/\d+/));


// 3. replace()
let str3 = "abc1234";
console.log(str3.replace(/\d+/, "XYZ"));


// 4. search()
let str4 = "hello";
console.log(str4.search(/o/));