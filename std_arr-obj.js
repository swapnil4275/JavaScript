// Create Student info array,object and find sum of marks & precentage 

let student = [{ roll_no: 11, name: "swapnil", marks: [99, 92, 91, 89, 90] }, { roll_no: 12, name: "atul", marks: [92, 93, 87, 89, 95] }, { roll_no: 13, name: "aditya", marks: [93, 90, 86, 88, 94] }, { roll_no: 14, name: "sanika", marks: [94, 89, 92, 90, 95] }];


let percentage = 0;

for (let i = 0; i < student.length; i++) {

    let sum = 0;

    for (let j = 0; j < student[i].marks.length; j++) {

        sum = sum + student[i].marks[j];

    }
    percentage = sum / student[i].marks.length;

    student[i].percentage = percentage;

    console.log("roll_no : ", student[i].roll_no + ", Name : ", student[i].name + ",  Total Marks : ", sum + ",  percentage : ", percentage);

}
console.log(student);


// top ranks

student.sort((a, b) => b.percentage - a.percentage);

console.log("Rank-1", student[0].name, student[0].percentage);
console.log("Rank-2", student[1].name, student[1].percentage);
console.log("Rank-3", student[3].name, student[3].percentage);
