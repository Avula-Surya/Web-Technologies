const form = document.getElementById("studentForm");
const tableBody = document.getElementById("studentTableBody");
const message = document.getElementById("message");

let students = []; 


function fakeAPI(response, status = 200) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (status === 200) {
                resolve({ status, data: response });
            } else {
                reject({ status, error: response });
            }
        }, 400);
    });
}

// ================= READ =================
function fetchStudents() {
    fakeAPI(students, 200)
        .then(res => {
            renderTable(res.data);
        })
        .catch(err => {
            showMessage("Error fetching students (500)", "error");
        });
}

//  CREATE & UPDATE
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const id = document.getElementById("studentId").value.trim();
    const name = document.getElementById("name").value.trim();
    const department = document.getElementById("department").value.trim();
    const marks = document.getElementById("marks").value.trim();

    if (!id || !name || !department || !marks) {
        showMessage("All fields are required", "error");
        return;
    }

    const existing = students.find(s => s.id === id);

    if (existing) {
       
        existing.name = name;
        existing.department = department;
        existing.marks = marks;

        fakeAPI(existing, 200)
            .then(res => {
                showMessage("Student updated successfully (200)", "success");
                fetchStudents();
                form.reset();
            })
            .catch(err => {
                showMessage("Error updating student (500)", "error");
            });

    } else {
        
        const newStudent = { id, name, department, marks };

        students.push(newStudent);

        fakeAPI(newStudent, 200)
            .then(res => {
                showMessage("Student added successfully (200)", "success");
                fetchStudents();
                form.reset();
            })
            .catch(err => {
                showMessage("Error adding student (500)", "error");
            });
    }
});

//           DELETE
function deleteStudent(id) {
    const index = students.findIndex(s => s.id === id);

    if (index === -1) {
        fakeAPI("Student not found", 404)
            .catch(err => {
                showMessage("Student not found (404)", "error");
            });
        return;
    }

    students.splice(index, 1);

    fakeAPI("Deleted", 200)
        .then(res => {
            showMessage("Student deleted successfully (200)", "success");

            
            form.reset();

            fetchStudents();
        })
        .catch(err => {
            showMessage("Error deleting student (500)", "error");
        });
}

// ================= EDIT =================
function editStudent(id) {
    const student = students.find(s => s.id === id);

    if (!student) {
        showMessage("Student not found (404)", "error");
        return;
    }

    document.getElementById("studentId").value = student.id;
    document.getElementById("name").value = student.name;
    document.getElementById("department").value = student.department;
    document.getElementById("marks").value = student.marks;
}

// RENDER TABLE
function renderTable(data) {
    tableBody.innerHTML = "";

    if (data.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="5">No students available</td>
            </tr>
        `;
        return;
    }

    data.forEach(student => {
        const row = `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.department}</td>
                <td>${student.marks}</td>
                <td>
                    <button onclick="editStudent('${student.id}')">Edit</button>
                    <button onclick="deleteStudent('${student.id}')">Delete</button>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// ================= MESSAGE =================
function showMessage(msg, type) {
    message.textContent = msg;
    message.className = type;

    setTimeout(() => {
        message.textContent = "";
    }, 3000);
}

// Initial Load
fetchStudents();
