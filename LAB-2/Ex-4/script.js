document.addEventListener("DOMContentLoaded", displayUsers);

// Register User
function registerUser(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;

    // Validations
    if (!name || !email || !mobile || !password) {
        alert("All fields are mandatory");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Mobile number must be 10 digits");
        return;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Duplicate email check
    if (users.some(user => user.email === email)) {
        alert("Email already registered");
        return;
    }

    const user = { name, email, mobile };
    users.push(user);

    localStorage.setItem("users", JSON.stringify(users));
    document.getElementById("userForm").reset();
    displayUsers();
}

// Display Users
function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const table = document.getElementById("userTable");
    table.innerHTML = "";

    users.forEach((user, index) => {
        table.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td>
                    <button onclick="deleteUser(${index})">Delete</button>
                </td>
            </tr>
        `;
    });
}

// Delete User
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

// Clear All Users
function clearAllUsers() {
    if (confirm("Are you sure you want to delete all users?")) {
        localStorage.removeItem("users");
        displayUsers();
    }
}
