// 
// Add task
function add() {
    let task = document.getElementById("task").value;
    if (task.trim() === "") return; // Prevent adding empty tasks
    document.getElementById("task").value = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));

    renderTasks();
}

// Delete all tasks
function delall() {
    localStorage.removeItem("tasks");
    renderTasks();
}

// Render tasks from local storage
function renderTasks() {
    let ul = document.getElementById("ull");
    ul.innerHTML = "";

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach((task, index) => {
        let ul = document.createElement("article");
        ul.className = "li";

        let li = document.createElement("li");
        let h3 = document.createElement("h3");
        h3.textContent = task;
        li.appendChild(h3);

        let button = document.createElement("button");
        button.textContent = "Del";
        button.className = "d";
        button.onclick = function () {
            deleteTask(index);
        };

        ul.appendChild(li);
        ul.appendChild(button);
        document.getElementById("ull").appendChild(ul);
    });
}

// Delete a specific task
function deleteTask(index) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTasks();
}

// Load tasks when the page loads
window.onload = renderTasks;
