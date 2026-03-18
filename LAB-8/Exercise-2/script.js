function processData() {
    const student = {
        id: Number(document.getElementById("id").value),
        name: document.getElementById("name").value,
        department: document.getElementById("dept").value,
        marks: Number(document.getElementById("marks").value)
    };
    const { id, name, department, marks } = student;
    let outputText = `${id} ${name} ${department} ${marks}\n`;
    let grade;
    if (marks >= 90) grade = "A";
    else if (marks >= 75) grade = "B";
    else if (marks >= 50) grade = "C";
    else grade = "F";
    const updatedStudent = {
        ...student,
        grade: grade
    };
    outputText += `{
  id: ${updatedStudent.id},
  name: '${updatedStudent.name}',
  department: '${updatedStudent.department}',
  marks: ${updatedStudent.marks},
  grade: '${updatedStudent.grade}'
}`;
    document.getElementById("output").innerHTML = `<pre>${outputText}</pre>`;
}