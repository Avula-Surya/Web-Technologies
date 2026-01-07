const mobileInput = document.getElementById("mobile");
const passwordInput = document.getElementById("password");

// Mobile number validation
mobileInput.addEventListener("input", () => {
    // allow only digits
    mobileInput.value = mobileInput.value.replace(/\D/g, "");

    if (mobileInput.value.length !== 10) {
        mobileInput.style.borderColor = "red";
        mobileInput.placeholder = "Mobile number must be 10 digits";
    } else {
        mobileInput.style.borderColor = "green";
    }
});

// Password validation
passwordInput.addEventListener("input", () => {
    if (passwordInput.value.length < 6) {
        passwordInput.style.borderColor = "red";
        passwordInput.placeholder = "Password must be minimum 6 characters";
    } else {
        passwordInput.style.borderColor = "green";
    }
});
