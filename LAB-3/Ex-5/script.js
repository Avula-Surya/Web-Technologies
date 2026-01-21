// TEMPORARY STORAGE VARIABLES
let userData = {
    name: "",
    age: "",
    email: "",
    phone: "",
    password: "",
    address: "",
    city: ""
};

// CONTROL CURRENT STAGE
let currentStage = 1;

// INIT SHOW FIRST STAGE
document.getElementById("stage1").style.display = "block";
updateProgressBar();


// ----------------------------------------------------
// NAVIGATION FUNCTIONS
// ----------------------------------------------------
function nextStage(stage) {
    if (validateStage(stage)) {
        document.getElementById("stage" + stage).style.display = "none";
        currentStage = stage + 1;
        document.getElementById("stage" + currentStage).style.display = "block";
        updateProgressBar();
    }
}

function prevStage(stage) {
    document.getElementById("stage" + stage).style.display = "none";
    currentStage = stage - 1;
    document.getElementById("stage" + currentStage).style.display = "block";
    updateProgressBar();
}


// ----------------------------------------------------
// PROGRESS BAR DYNAMIC UPDATE
// ----------------------------------------------------
function updateProgressBar() {
    let progress = (currentStage - 1) * 33;
    document.getElementById("progressBar").style.width = progress + "%";
}


// ----------------------------------------------------
// VALIDATION FOR EACH STAGE
// ----------------------------------------------------
function validateStage(stage) {
    let valid = true;

    // Clear all previous errors
    document.querySelectorAll(".error").forEach(e => e.textContent = "");

    if (stage === 1) {
        let name = document.getElementById("name").value.trim();
        let age = document.getElementById("age").value.trim();

        if (name === "") {
            valid = false;
            document.getElementById("err_name").textContent = "Name is required.";
        }

        if (age === "" || age < 1) {
            valid = false;
            document.getElementById("err_age").textContent = "Enter a valid age.";
        }

        if (valid) {
            userData.name = name;
            userData.age = age;
        }
    }

    if (stage === 2) {
        let email = document.getElementById("email").value.trim();
        let phone = document.getElementById("phone").value.trim();

        if (!/^[^@]+@[^@]+\.[a-z]{2,}$/.test(email)) {
            valid = false;
            document.getElementById("err_email").textContent = "Invalid email.";
        }

        if (!/^[0-9]{10}$/.test(phone)) {
            valid = false;
            document.getElementById("err_phone").textContent = "Phone must be 10 digits.";
        }

        if (valid) {
            userData.email = email;
            userData.phone = phone;
        }
    }

    if (stage === 3) {
        let pass = document.getElementById("password").value;
        let confirm = document.getElementById("confirmPassword").value;

        if (pass.length < 6) {
            valid = false;
            document.getElementById("err_password").textContent = "Password must be 6+ characters.";
        }

        if (confirm !== pass) {
            valid = false;
            document.getElementById("err_confirm").textContent = "Passwords do not match.";
        }

        if (valid) {
            userData.password = pass;
        }
    }

    if (stage === 4) {
        let address = document.getElementById("address").value.trim();
        let city = document.getElementById("city").value.trim();

        if (address === "") {
            valid = false;
            document.getElementById("err_address").textContent = "Address required.";
        }

        if (city === "") {
            valid = false;
            document.getElementById("err_city").textContent = "City required.";
        }

        if (valid) {
            userData.address = address;
            userData.city = city;
        }
    }

    return valid;
}


// ----------------------------------------------------
// FINAL SUBMISSION
// ----------------------------------------------------
function submitForm() {
    if (validateStage(4)) {
        document.getElementById("submitMessage").style.color = "green";
        document.getElementById("submitMessage").textContent =
            "Form submitted successfully!";

        console.log("USER DATA:", userData);
    }
}
