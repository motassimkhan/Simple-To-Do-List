
function addTask() {
    const taskInput = document.getElementById("task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("taskList");
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <span>${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
    taskList.appendChild(listItem);

    taskInput.value = "";
}

function deleteTask(btn) {
    const listItem = btn.parentElement;
    const taskList = document.getElementById("taskList");
    taskList.removeChild(listItem);
}
