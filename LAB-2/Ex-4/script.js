const mobileInput = document.getElementById("mobile");
const passwordInput = document.getElementById("password");

// Set default placeholders
mobileInput.placeholder = "Mobile number must be 10 digits";
passwordInput.placeholder = "Password must be minimum 6 characters";

// Mobile validation
mobileInput.addEventListener("input", () => {
    mobileInput.value = mobileInput.value.replace(/\D/g, "");

    if (mobileInput.value.length !== 10) {
        mobileInput.style.border = "2px solid red";
        mobileInput.title = "Mobile number must be 10 digits";
    } else {
        mobileInput.style.border = "2px solid green";
        mobileInput.title = "";
    }
});

// Password validation
passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 6) {
        passwordInput.style.border = "2px solid red";
        passwordInput.title = "Password must be minimum 6 characters";
    } else {
        passwordInput.style.border = "2px solid green";
        passwordInput.title = "";
    }
});
