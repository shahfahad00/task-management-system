let tasks = []; // Store tasks in memory

// Mock user data for login/signup
let users = [
    { username: "admin", password: "admin123" },
];

function showSignup() {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("signupPage").style.display = "block";
}

function showLogin() {
    document.getElementById("signupPage").style.display = "none";
    document.getElementById("loginPage").style.display = "block";
}

// Simple login function (hardcoded credentials)
function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Validate credentials
    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        document.getElementById("loginPage").style.display = "none";
        document.getElementById("taskPage").style.display = "block";
        loadTasks();
    } else {
        alert("Invalid credentials!");
    }
}

// Simple signup function (create new user)
function signup() {
    const username = document.getElementById("newUsername").value;
    const password = document.getElementById("newPassword").value;

    if (username && password) {
        // Add new user to the system
        users.push({ username, password });
        alert("Signup successful! Now you can login.");
        showLogin();
    } else {
        alert("Please fill in both fields.");
    }
}

// Load tasks (display tasks)
function loadTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    tasks.forEach(task => {
        const li = document.createElement("li");
        li.classList.add("task-item");
        li.innerHTML = `${task.title} - ${task.description}
                        <button class="delete-btn" onclick="deleteTask('${task.id}')">Delete</button>
                        <button class="update-btn" onclick="updateTask('${task.id}')">Update</button>`;
        taskList.appendChild(li);
    });
}

// Add a task
function addTask() {
    const title = document.getElementById("taskTitle").value;
    const description = document.getElementById("taskDesc").value;

    if (title && description) {
        const task = { id: Date.now().toString(), title, description };
        tasks.push(task);
        loadTasks();
        document.getElementById("taskTitle").value = "";
        document.getElementById("taskDesc").value = "";
    } else {
        alert("Please fill in both fields!");
    }
}

// Delete a task
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    loadTasks();
}

// Update a task
function updateTask(id) {
    const task = tasks.find(t => t.id === id);
    const newTitle = prompt("Enter new title", task.title);
    const newDesc = prompt("Enter new description", task.description);

    if (newTitle && newDesc) {
        task.title = newTitle;
        task.description = newDesc;
        loadTasks();
    } else {
        alert("Both fields are required to update the task.");
    }
}