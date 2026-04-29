// Demonstrate Object this.

// let person = {f_name: "swapnil", l_name: "patil", age: 22, fullname: function() { return this.f_name + " " + this.l_name;}};

// person.fullname();


const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
};

person.fullName();