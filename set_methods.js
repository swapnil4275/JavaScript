// Demonstrate Set Methods 

let myset = new Set([10, 20]);

console.log("print set : ", myset);  // print set
console.log("--------------------------------------");


// Add() Method 
myset.add(30);
myset.add(40);
myset.add(50);

console.log("add() : ", myset);  // use add() method
console.log("--------------------------------------");


// delete() method
myset.delete(40);
myset.delete(50);

console.log("delete() : ", myset);  // use delete() method
console.log("--------------------------------------");


// has() Method
ans = myset.has(30);

console.log("has() : ", ans);  // use has() method
console.log("--------------------------------------");



// .size method
console.log(".size : ", myset.size);  // use .size method
console.log("--------------------------------------");


// forEach() Method
console.log("forEach : ")
myset.forEach((value) => {   
                                // use forEach() method
    console.log(value);
});

console.log("--------------------------------------");


// enteries() Method
console.log("entries() : ");
for (let item of myset.entries()) {     // use entries() method
    console.log(item);
}
console.log("--------------------------------------");



// keys() Method
console.log("keys() : ");
for (let key of myset.keys()) {    // use keys() method

    console.log(key);
}
console.log("--------------------------------------");


// values() Method
console.log("values() : ");
for (let value of myset.values()) {   // use values() method

    console.log(value);
}
console.log("--------------------------------------");


// clear() Method

myset.clear();      // use clear() method
console.log("clear() : ", myset);

console.log("--------------------------------------");

