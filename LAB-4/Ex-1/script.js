const usernameInput = document.getElementById("username");
const statusText = document.getElementById("status");
const loader = document.getElementById("loader");
const form = document.getElementById("registerForm");

let isUsernameAvailable = false;

usernameInput.addEventListener("input", function () {

    const username = usernameInput.value.trim();

    if (username === "") {
        statusText.textContent = "";
        loader.style.display = "none";
        return;
    }

    // ✅ Must start with letter and format xxx@xxx
    const pattern = /^[A-Za-z][A-Za-z0-9]*@[A-Za-z0-9]+$/;

    if (!pattern.test(username)) {
        statusText.textContent = "Username must start with a letter (format: abc@xyz(or)abc@123)";
        statusText.className = "taken";
        isUsernameAvailable = false;
        loader.style.display = "none";
        return;
    }

    loader.style.display = "block";

    fetch("users.json")
        .then(response => response.json())
        .then(data => {

            loader.style.display = "none";

            const exists = data.users.some(user =>
                user.username.toLowerCase() === username.toLowerCase()
            );

            if (exists) {
                statusText.textContent = "Username already taken";
                statusText.className = "taken";
                isUsernameAvailable = false;
            } else {
                statusText.textContent = "Username available";
                statusText.className = "available";
                isUsernameAvailable = true;
            }
        })
        .catch(error => {
            loader.style.display = "none";
            statusText.textContent = "Error loading users";
            statusText.className = "taken";
            isUsernameAvailable = false;
        });
});

// Prevent form submission
form.addEventListener("submit", function (e) {
    if (!isUsernameAvailable) {
        e.preventDefault();
        alert("Please enter a valid and available username!");
    }
});
