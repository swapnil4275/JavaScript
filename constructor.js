// demonstrate Constructor 

function student (name, marks) {

    this.name = name;
    this.marks = marks;

    this.display = function(){console.log(this.name + " has " + this.marks + " marks");};
}

let s1 = new student("swapnil", 80);
let s2 = new student("Atul", 85);

s1.display();
s2.display();