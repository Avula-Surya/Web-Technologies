const form = document.getElementById("registerForm");
const userTable = document.getElementById("userTable");

// Load users on refresh
window.onload = displayUsers;

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

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

function deleteUser(index) {
    let users = JSON.parse(localStorage.getItem("users"));
    users.splice(index, 1);
    localStorage.setItem("users", JSON.stringify(users));
    displayUsers();
}

function clearAllUsers() {
    localStorage.removeItem("users");
    displayUsers();
}
