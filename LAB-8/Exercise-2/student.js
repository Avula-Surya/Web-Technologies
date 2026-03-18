const student = {
    id: 101,
    name: "Priya",
    department: "CSE",
    marks: 92
};
// We extract the variables in one line
const { id, name, department, marks } = student;

console.log(id, name, department, marks);


// We create a new object containing everything from 'student' plus 'grade'
const updatedStudent = {
    ...student,
    grade: "A"
};

console.log(updatedStudent);