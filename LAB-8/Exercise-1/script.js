const calculateAverage = (m1, m2, m3) => (m1 + m2 + m3) / 3;

function calculate() {
    let studentName = document.getElementById("name").value;
    let mark1 = Number(document.getElementById("m1").value);
    let mark2 = Number(document.getElementById("m2").value);
    let mark3 = Number(document.getElementById("m3").value);

    // Empty check
    if (!studentName || isNaN(mark1) || isNaN(mark2) || isNaN(mark3)) {
        document.getElementById("result").innerHTML =
            `<span style="color:red;">Please fill all fields correctly!</span>`;
        return;
    }

    // Range validation
    if (
        mark1 < 0 || mark1 > 100 ||
        mark2 < 0 || mark2 > 100 ||
        mark3 < 0 || mark3 > 100
    ) {
        document.getElementById("result").innerHTML =
            `<span style="color:red;">Marks should be between 0 and 100 only!</span>`;
        return;
    }

    const totalMarks = mark1 + mark2 + mark3;
    let average = calculateAverage(mark1, mark2, mark3);

    document.getElementById("result").innerHTML =
        `Student Name: ${studentName} <br>
         Total Marks: ${totalMarks} <br>
         Average Marks: ${average.toFixed(2)}`;
}