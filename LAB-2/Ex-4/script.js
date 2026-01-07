const form = document.getElementById("registerForm");
const userTable = document.getElementById("userTable");

// Load users on page load
window.onload = displayUsers;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;

    // Mobile validation
    if (mobile.length !== 10) {
        alert("Mobile number must be 10 digits");
        return;
    }

    // Password validation
    if (password.length < 6) {
        alert("Password must be minimum 6 characters");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // 🚫 Duplicate email check
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
        alert("This email is already registered");
        return;
    }

    // Save user
    users.push({ name, email, mobile });
    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    displayUsers();
});

// Display users
function displayUsers() {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    userTable.innerHTML = "";

    users.forEach((user, index) => {
        userTable.innerHTML += `
            <tr>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.mobile}</td>
                <td><button onclick="deleteUser(${index})">Delete</button></td>
            </tr>
        `;
    });
}

// Delete single user
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

// Clear all users
function clearAllUsers() {
    localStorage.removeItem("users");
    displayUsers();
}
