// Variable declarations using let and const
const studentName = "Arun";
let mark1 = 85;
let mark2 = 90;
let mark3 = 88;

const calculateTotal = (m1, m2, m3) => m1 + m2 + m3;

// Arrow function to calculate the average
const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

// Calculations
let totalMarks = calculateTotal(mark1, mark2, mark3);
let average = calculateAverage(mark1, mark2, mark3);

// Displaying results using template literals
console.log(`--- Student Report Card ---`);
console.log(`Student Name  : ${studentName}`);
console.log(`Total Marks   : ${totalMarks}`);
console.log(`Average Marks : ${average.toFixed(2)}`);