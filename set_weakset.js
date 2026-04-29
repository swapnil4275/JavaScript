// Demonstrate set Weakset 

let ws = new WeakSet();

let obj1 = {name: "swapnil"};
let obj2 = {name: "atul"};

ws.add(obj1);
ws.add(obj2);

console.log(ws);