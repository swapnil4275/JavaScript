// Demonstrate object 

let product = {name: "Mobile", price: 20000, brand: "vivo"};

console.log(product);

console.log("print keys : ", Object.keys(product));  //print only keys

console.log("print values : ", Object.values(product));  //print only values

console.log("print product name : ", product.name); // print name

// change price 
product.price = 22000;

//add colour
product.colour = "white";


// print using loop

for (let key in product) {

    console.log(key, product[key]);
}








