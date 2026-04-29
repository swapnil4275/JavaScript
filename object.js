// demonstrate js object 

const car = {name:"polo", model:2010, colour:"red"};

console.log(car);


// access the value 
console.log("car model : " + car.model);  //using dot notation
console.log("car name : " + car["name"]);   // using bracket notation

// change value 
car.model = 2012;

// add property
car.price = 2000000;

// delete property
delete car.colour;

console.log("change the model value, add property (price), delete (colour) : " , car);