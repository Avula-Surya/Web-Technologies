// -----------------------------------------------------
// QUESTION STRUCTURE
// -----------------------------------------------------
const questions = [
    {
        id: 1,
        question: "What is your name?",
        type: "text",
        required: true,
        maxLength: 30
    },
    {
        id: 2,
        question: "What is your gender?",
        type: "radio",
        required: true,
        options: ["Male", "Female", "Other"]
    },
    {
        id: 3,
        question: "Which programming languages do you know?",
        type: "checkbox",
        required: true,
        minSelect: 1,
        options: ["JavaScript", "Python", "Java", "C++"]
    },
    {
        id: 4,
        question: "Write your feedback (optional):",
        type: "text",
        required: false,
        maxLength: 150
    }
];

// DOM elements
const surveyForm = document.getElementById("surveyForm");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");


// -----------------------------------------------------
// DYNAMIC FORM GENERATION
// -----------------------------------------------------
function buildSurvey() {
    surveyForm.innerHTML = ""; 

    questions.forEach(q => {
        let box = document.createElement("div");
        box.className = "questionBox";

        // Question title
        let label = document.createElement("label");
        label.textContent = q.question;
        box.appendChild(label);

        // Error message placeholder
        let error = document.createElement("div");
        error.className = "errorMsg";
        error.id = "error_" + q.id;

        // Generate based on type
        if (q.type === "text") {
            let input = document.createElement("textarea");
            input.id = "q_" + q.id;
            input.maxLength = q.maxLength;
            input.rows = 3;

            box.appendChild(input);
            box.appendChild(error);
        }
        else if (q.type === "radio") {
            q.options.forEach(option => {
                let wrapper = document.createElement("div");

                let input = document.createElement("input");
                input.type = "radio";
                input.name = "q_" + q.id;
                input.value = option;

                let lbl = document.createElement("span");
                lbl.textContent = " " + option;

                wrapper.appendChild(input);
                wrapper.appendChild(lbl);

                box.appendChild(wrapper);
            });
            box.appendChild(error);
        }
        else if (q.type === "checkbox") {
            q.options.forEach(option => {
                let wrapper = document.createElement("div");

                let input = document.createElement("input");
                input.type = "checkbox";
                input.name = "q_" + q.id;
                input.value = option;

                let lbl = document.createElement("span");
                lbl.textContent = " " + option;

                wrapper.appendChild(input);
                wrapper.appendChild(lbl);

                box.appendChild(wrapper);
            });
            box.appendChild(error);
        }

        surveyForm.appendChild(box);
    });
}

buildSurvey();


// -----------------------------------------------------
// VALIDATION FUNCTION
// -----------------------------------------------------
function validateSurvey() {
    let isValid = true;

    questions.forEach(q => {
        let errorBox = document.getElementById("error_" + q.id);
        errorBox.textContent = "";  

        // TEXT validation
        if (q.type === "text") {
            let input = document.getElementById("q_" + q.id);
            input.classList.remove("invalid");

            if (q.required && input.value.trim() === "") {
                errorBox.textContent = "This field is required.";
                input.classList.add("invalid");
                isValid = false;
            }
            else if (input.value.length > q.maxLength) {
                errorBox.textContent = `Maximum ${q.maxLength} characters allowed.`;
                input.classList.add("invalid");
                isValid = false;
            }
        }

        // RADIO validation
        else if (q.type === "radio") {
            let options = document.getElementsByName("q_" + q.id);
            let checked = [...options].some(opt => opt.checked);

            if (q.required && !checked) {
                errorBox.textContent = "Please select an option.";
                isValid = false;
            }
        }

        // CHECKBOX validation
        else if (q.type === "checkbox") {
            let options = document.getElementsByName("q_" + q.id);
            let selected = [...options].filter(opt => opt.checked).length;

            if (q.required && selected < q.minSelect) {
                errorBox.textContent = `Select at least ${q.minSelect} option(s).`;
                isValid = false;
            }
        }
    });

    return isValid;
}


// -----------------------------------------------------
// SUBMIT BUTTON ACTION
// -----------------------------------------------------
submitBtn.addEventListener("click", () => {
    result.textContent = "";

    if (validateSurvey()) {
        result.style.color = "green";
        result.textContent = "Survey submitted successfully!";
    } else {
        result.style.color = "red";
        result.textContent = "Please fix all errors and try again.";
    }
});
