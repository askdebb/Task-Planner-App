export default class TaskManager {
  constructor() {
    this.currentId = JSON.parse(localStorage.getItem("currentId")) || 0;
    this.tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  }

  addTask(name, description, assignedTo, dueDate, status = "To-Do") {
    this.currentId++;
    const theNewTask = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status,
    };

    this.tasks.push(theNewTask);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
    localStorage.setItem("currentId", this.currentId);
  }

  update_list() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
      const allTasks = JSON.parse(savedTasks);

      let todoTasksHTML = "";
      let inProgressTasksHTML = "";
      let reviewTasksHTML = "";
      let doneTasksHTML = "";

      for (const task of allTasks) {
        if (task.status === "To-Do") {
          todoTasksHTML += renderTaskHTML(task);
        } else if (task.status === "In-Progress") {
          inProgressTasksHTML += renderTaskHTML(task);
        } else if (task.status === "Review") {
          reviewTasksHTML += renderTaskHTML(task);
        } else if (task.status === "Done") {
          doneTasksHTML += renderTaskHTML(task);
        }
      }

      document.getElementById("to-do").innerHTML = todoTasksHTML;
      document.getElementById("in-progress").innerHTML = inProgressTasksHTML;
      document.getElementById("review").innerHTML = reviewTasksHTML;
      document.getElementById("done").innerHTML = doneTasksHTML;

      // Add click listener to task cards
      document.querySelectorAll(".task-card").forEach((card) => {
        card.addEventListener("click", (event) => {
          const taskId = parseInt(event.currentTarget.dataset.taskId);
          const task = this.tasks.find((t) => t.id === taskId);

          // Populate the task form with the task details
          document.getElementById("task-name").value = task.name;
          document.getElementById("task-description").value = task.description;
          document.getElementById("task-assigned-to").value = task.assignedTo;
          document.getElementById("task-due-date").value = task.dueDate;
          document.getElementById("task-status").value = task.status;
          document.getElementById("task-id").value = task.id;

          // Update the "Save" button to "Update"
          document.getElementById("save-task").textContent = "Update";
        });
      });
    }
  }
}

function renderTaskHTML(task) {
  let actionButtons = "";
  if (task.status === "To-Do") {
    actionButtons = `
          <a href="#" class="btn btn-secondary">Update</a>
          <a href="#" class="btn btn-danger">Delete</a>
      `;
  } else if (task.status === "In-Progress") {
    actionButtons = `<a href="#" class="btn btn-warning">Update</a>`;
  } else if (task.status === "Review") {
    actionButtons = `<a href="#" class="btn btn-info">Update</a>`;
  } else if (task.status === "Done") {
    actionButtons = `<a href="#" class="btn btn-success">Done</a>`;
  }

  return `
      <div class="card mt-2 task-card" style="width: 15rem;" data-task-id="${task.id}"> 
          <div class="card-body">
              <h5 class="card-title text-center">${task.name}</h5>
              <hr/>
              <h6 class="sub-title">Description</h6>
              <p class="card-text">${task.description}</p>
          </div>
          <ul class="list-group list-group-flush">
              <li class="list-group-item"> 
                  <div class="hstack gap-3">
                      <div class="p-1 sub-title">Assigned To
                          <p>${task.assignedTo}</p>
                      </div>
                      <div class="p-1 sub-title">Due Date
                          <p>${task.dueDate}</p>
                      </div>
                  </div>
              </li>
              <li class="list-group-item">Status: <span>${task.status}</span></li>
          </ul>
          <div class="card-body">
              ${actionButtons}
          </div>
      </div>
  `;
}

// Example usage:
document.addEventListener('DOMContentLoaded', () => {
  const taskManager = new TaskManager();
  taskManager.update_list(); // This will load and render tasks from localStorage
});



// const task = new TaskManager();

// task.addTask('Shopping List', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );
// task.addTask('Shopping cart', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );
// task.addTask('Shopping doom', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );

// console.log(task.tasks)

// task.removeTask('Shopping cart');

// console.log(task.tasks)
