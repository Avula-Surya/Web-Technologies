const form = document.getElementById("registerForm");
const userTable = document.getElementById("userTable");

// Load users on page load
document.addEventListener("DOMContentLoaded", displayUsers);

// Register user
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const password = document.getElementById("password").value;

    // Validation
    if (mobile.length !== 10) {
        alert("Mobile number must be 10 digits");
        return;
    }

    if (password.length < 6) {
        alert("Password must be minimum 6 characters");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    users.push({ name, email, mobile });

    localStorage.setItem("users", JSON.stringify(users));

    form.reset();
    displayUsers();
});

// Display users
function displayUsers() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    userTable.innerHTML = "";

    users.forEach((user, index) => {
        userTable.innerHTML += `
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

// Delete user
function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

// Clear all users
function clearAllUsers() {
    localStorage.removeItem("users");
    displayUsers();
}
