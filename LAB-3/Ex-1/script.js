// DOM elements
const nameField = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const age = document.getElementById("age");
const role = document.getElementById("role");
const skillsBox = document.getElementById("skillBox");
const skills = document.getElementById("skills");
const form = document.getElementById("regForm");

// Error labels
const emailError = document.getElementById("emailError");
const passError = document.getElementById("passError");
const confirmPassError = document.getElementById("confirmPassError");

// -----------------------------------
// SHOW/HIDE SKILLS BASED ON ROLE
// -----------------------------------
role.addEventListener("change", () => {
    if (role.value === "Student" || role.value === "Teacher") {
        skillsBox.classList.remove("hidden");
    } else {
        skillsBox.classList.add("hidden");
    }
});

// -----------------------------------
// EMAIL VALIDATION (.com or .edu only)
// -----------------------------------
email.addEventListener("input", () => {
    const pattern = /^[A-Za-z0-9._%+-]+@(gmail|yahoo|outlook)\.(com|in)$/;

    if (!pattern.test(email.value)) {
        emailError.textContent = "Enter a valid email (gmail, yahoo, outlook)";
        setInvalid(email);
    } else {
        emailError.textContent = "";
        setValid(email);
    }
});

// -----------------------------------
// PASSWORD VALIDATION (Role Dynamic)
// -----------------------------------
password.addEventListener("input", validatePassword);
role.addEventListener("change", validatePassword);

function validatePassword() {
    let value = password.value;
    let error = "";

    if (role.value === "Admin") {
        // Stronger rules
        if (value.length < 8 || 
            !/[A-Z]/.test(value) ||
            !/[a-z]/.test(value) ||
            !/[0-9]/.test(value) ||
            !/[!@#$%^&*]/.test(value)) {
            error = "Admin password must be 8+ chars, include upper/lowercase, number & special char.";
            setInvalid(password);
        } else {
            setValid(password);
        }
    } else {
        // Normal rule
        if (value.length < 6) {
            error = "Password must be at least 6 characters.";
            setInvalid(password);
        } else {
            setValid(password);
        }
    }

    passError.textContent = error;
}

// -----------------------------------
// CONFIRM PASSWORD CHECK
// -----------------------------------
confirmPassword.addEventListener("input", () => {
    if (confirmPassword.value !== password.value) {
        confirmPassError.textContent = "Passwords do not match";
        setInvalid(confirmPassword);
    } else {
        confirmPassError.textContent = "";
        setValid(confirmPassword);
    }
});

// -----------------------------------
// REAL-TIME INVALID HIGHLIGHT
// -----------------------------------
function setInvalid(field) {
    field.classList.add("invalid");
}

function setValid(field) {
    field.classList.remove("invalid");
}

// -----------------------------------
// FINAL FORM VALIDATION BEFORE SUBMIT
// -----------------------------------
form.addEventListener("submit", (e) => {
    e.preventDefault();

    if (
        nameField.value.trim() === "" ||
        email.classList.contains("invalid") ||
        password.classList.contains("invalid") ||
        confirmPassword.classList.contains("invalid") ||
        age.value.trim() === "" ||
        role.value === ""
    ) {
        alert("Please fix errors before submitting!");
        return;
    }

    alert("Registration Successful!");
    form.reset();
});
