// -------------------------------------------------------------
// Activity Log Storage
// -------------------------------------------------------------
let activityLog = [];
let clickCount = 0;

// DOM elements
const logBox = document.getElementById("logBox");
const warning = document.getElementById("warning");
const resetBtn = document.getElementById("resetBtn");
const exportBtn = document.getElementById("exportBtn");

// -------------------------------------------------------------
// Helper: Record Activity
// -------------------------------------------------------------
function logActivity(type, target, details = "") {
    let entry = {
        time: new Date().toLocaleTimeString(),
        type: type,
        target: target,
        details: details
    };

    activityLog.push(entry);
    displayLog();
    checkSuspicious();
}

// -------------------------------------------------------------
// Display Log in DOM
// -------------------------------------------------------------
function displayLog() {
    logBox.innerHTML = "";

    activityLog.forEach(item => {
        let div = document.createElement("div");
        div.className = "log-entry";

        div.innerHTML = `
            <b>${item.time}</b> — 
            <span>${item.type}</span> on 
            <i>${item.target}</i> 
            ${item.details ? `<br>Details: ${item.details}` : ""}
        `;

        logBox.appendChild(div);
    });

    logBox.scrollTop = logBox.scrollHeight;
}

// -------------------------------------------------------------
// Suspicious Activity Detection
// -------------------------------------------------------------
function checkSuspicious() {
    if (clickCount > 20) {
        warning.textContent = "⚠ Suspicious activity detected: Too many clicks!";
    } else {
        warning.textContent = "";
    }
}

// -------------------------------------------------------------
// Event Listeners (with bubbling + capturing)
// -------------------------------------------------------------

// Click Listener — Capture Phase (true)
document.addEventListener("click", function (e) {
    clickCount++;
    logActivity("Click", e.target.tagName, "Captured event");
}, true);

// Click Listener — Bubble Phase (false)
document.addEventListener("click", function (e) {
    logActivity("Click", e.target.tagName, "Bubbled event");
});

// Keypress Listener
document.addEventListener("keydown", function (e) {
    logActivity("Key Press", e.target.tagName, `Key: ${e.key}`);
});

// Focus Listener
document.addEventListener("focusin", function (e) {
    logActivity("Focus", e.target.tagName);
});


// -------------------------------------------------------------
// RESET LOG
// -------------------------------------------------------------
resetBtn.addEventListener("click", () => {
    activityLog = [];
    clickCount = 0;
    warning.textContent = "";
    displayLog();
});


// -------------------------------------------------------------
// EXPORT LOG AS TEXT
// -------------------------------------------------------------
exportBtn.addEventListener("click", () => {
    let text = "===== USER ACTIVITY LOG =====\n\n";

    activityLog.forEach(item => {
        text += `${item.time} — ${item.type} on ${item.target}`;
        if (item.details) text += ` — Details: ${item.details}`;
        text += "\n";
    });

    let blob = new Blob([text], { type: "text/plain" });
    let url = URL.createObjectURL(blob);

    let a = document.createElement("a");
    a.href = url;
    a.download = "activity_log.txt";
    a.click();
});
