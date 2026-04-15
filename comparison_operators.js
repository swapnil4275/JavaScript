// Demonstrate Comparison Operators 

// == (Equal to)
let x1 = 10;
let y1 = x1 == 10;
console.log("== : ", y1);

// === (strict Equal to)
let x2 = 10;
let y2 = x2 === "10";
console.log("=== : ", y2);


// != (Not Equal to)
let x3 = 10;
let y3 = x3 != 20;
console.log("!= : ", y3);


// !== (strict Not Equal to)
let x4 = "20";
let y4 = x4 !== 20;
console.log("!== : ", y4);


// > (greater than)
let x5 = 10;
console.log("> : ", x5 > 11);

// >= (greater than OR equal to)
let x6 = 10;
console.log(">= : ", x6 >= 10);


// < (Less than)
let x7 = 20;
console.log("< : ", x7 < 20);

// <= (Less than OR equal to)
let x8 = 20;
console.log("<= : ", x8 <= 20);


// String comparison
let text1 = "A";
let text2 = "B";
let result = text1 < text2;
console.log("string compare (A < B) : ", result);