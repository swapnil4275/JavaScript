// task 2 array & object 

let emp = [{ id: 111, name: "Swapnil", salary: 45000 }, { id: 112, name: "atul", salary: 48000 }, { id: 113, name: "aditya", salary: 75000 }, { id: 114, name: "sanika", salary: 70000 }];

let a1 = [];

for (let i = 0; i < emp.length; i++) {

    if (emp[i].salary > 50000){

        a1.push(emp[i]);

    }
}
console.log(a1);
