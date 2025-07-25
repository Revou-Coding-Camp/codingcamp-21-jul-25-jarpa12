console.log("Hello, World!");
let tasks = [];
let showCompletedOnly = false; // Variable to track filter state
function addTask() {
    //Function to add a task
    const taskInput = document.getElementById("task");
    const dateInput = document.getElementById("Date");
    // Check if inputs are empty
    if (taskInput.value === "" || dateInput.value === "") {
        alert("Please fill in both task and date fields.");
    } else {
    tasks.push({
        task: taskInput.value,
        date: dateInput.value,
        completed: false,
    });

    console.log("Task added:", taskInput.value, "on", dateInput.value);
    console.log(tasks);
    }

    renderTasks();
}

function removeAllTask() {
    //Function to remove a task
    tasks = [];

    renderTasks();
}

function removeTask(index) {
    //Function to remove a specific task
    tasks.splice(index, 1);
    console.log("Task removed:", index);
    renderTasks();
}

function completeTask(index) {
    //Function to mark a task as complete
    tasks[index].completed = true;
    console.log("Task completed:", tasks[index].task);
    renderTasks();
}

function toggleFilter() {
    //Function to toggle the filter
   showCompletedOnly = !showCompletedOnly;
   renderTasks();
}

function renderTasks() {
    //Function to render tasks in the task list
    const taskList = document.getElementById("task-list");
    taskList.innerHTML = ""; // Clear the current list

    let filteredTasks = showCompletedOnly ? tasks.filter(task => task.completed) : tasks;
    filteredTasks
    filteredTasks.forEach((task, index) => {
        taskList.innerHTML += 
        `<li class="task-item flex justify-between items-center py-2">
            <span${task.completed ? ' style="text-decoration: line-through; color: gray;"' : ''}>${task.task} ${task.date}</span>
            <div>
                    <button type="button" class="px-[12px] py-[4px] rounded-[6px] bg-green-500 text-white" onclick="completeTask(${index});">Complete</button>
                    <button class="px-[12px] py-[4px] rounded-[6px] bg-red-500 text-white" onclick="removeTask(${index});">Delete</button>
            </div>
        </li>
        `;
    });
}