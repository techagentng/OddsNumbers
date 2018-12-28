function sayName(name){
    console.log("Hello" + name);
}

var STUDENTS = [
    {
        age:10
    },
    {
        age:20
    },
    {
        age:21
    },
    {
        age:22
    },
    
];


function filterStudents(students, age){
    var newArray = [];
    for(let student of students){
        if(student.age >=10)
            newArray.push(student);
    }
    return newArray;
}

console.log(filterStudents(STUDENTS, 10));
