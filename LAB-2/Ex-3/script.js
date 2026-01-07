
let taskId = 0;

// Allow dropping
function allowDrop(event) {
    event.preventDefault();
}

// Drag task
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

// Drop task
function drop(event) {
    event.preventDefault();
    const taskId = event.dataTransfer.getData("text");
    const task = document.getElementById(taskId);
    event.currentTarget.appendChild(task);

    // If dropped in Completed
    if (event.currentTarget.id === "completed") {
        task.style.backgroundColor = "#b6fcb6";
        alert("Task Completed Successfully");
    }
}

// Add new task
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskName = taskInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task name");
        return;
    }

    const task = document.createElement("div");
    task.className = "task";
    task.id = "task" + taskId++;
    task.draggable = true;
    task.ondragstart = drag;

    const date = new Date().toLocaleDateString();

    task.innerHTML = `<strong>${taskName}</strong><br><small>${date}</small>`;

    document.getElementById("todo").appendChild(task);
    taskInput.value = "";
}
