// Demonstrate set logic (operations) 

let set1 = new Set(['a', 'b', 'c']);
let set2 = new Set(['b', 'c', 'd']);

console.log(set1);
console.log(set2);

console.log("--------------------------------------");


// union() Method
let union = set1.union(set2);  // use union  method
console.log("union method : ", union);

console.log("--------------------------------------");



// intersection() Method
let intersection = set1.intersection(set2);
console.log("intersection  method : ", intersection);

console.log("--------------------------------------");


// difference() Method
let difference = set1.difference(set2);
console.log("difference method : ", difference);

console.log("--------------------------------------");


// symmetricDifference() Method
let symdiff = set1.symmetricDifference(set2);
console.log("symmetricDifference : ", symdiff);

console.log("--------------------------------------");


// isDisjointForm() Method
let disjoint = set1.isDisjointFrom(set2);
console.log("isDisjointForm : ", disjoint);

console.log("--------------------------------------");


// isSubsetOf() Method
let subset = set1.isSubsetOf(set2);
console.log("isSubsetOf : ", subset);

console.log("--------------------------------------");


// isSupersetOf() Method
let superset = set1.isSupersetOf(set2);
console.log("isSupersetOf : ", superset);

console.log("--------------------------------------");
