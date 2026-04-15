// product, discount, tax, total 

let product1 = 100;
let product2 = 200;
let product3 = 300;
let product4 = 50;
let product5 = 3500;

let total = product1 + product2 + product3 + product4 + product5;
let tax = (total*5)/100;

let total1 = total - tax;
let discount = (total1*10) / 100;
let total_bill = total1 - discount;

console.log("Total : ", total); 
console.log("Tax 5% : ",tax);
console.log("Discount 10% : ", discount);
console.log("Total Bill : ", total_bill);

