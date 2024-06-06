class TaskManager {
    constructor() {
      this.currentId = localStorage.getItem("currentId") || 0;
      this.tasks = [];
      const savedTasks = localStorage.getItem("tasks");
      if(savedTasks){
        this.tasks = JSON.parse(savedTasks);
      } else {
        let newTaskInfo = JSON.stringify(this.tasks);
        localStorage.setItem("tasks", newTaskInfo);
      }
    }

  addTask (name, description, assignedTo, dueDate, status = 'To-Do') {
    this.currentId++; 
    const theNewTask = {
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status

    }
    this.tasks.push(theNewTask);
    localStorage.setItem("currentId", this.currentId);

  }


  update_list() {
    for (const task of this.tasks) {
      if(task.status === 'To-Do') {
        todoRender(task);
      } else if (task.status === 'In-Progress') {
        inProgressRender(task)
      } else if (task.status === 'Review') {
        review(task)
      } else {

      }
    //   const listItem = document.createElement("li");
    //   listItem.innerHTML = `<b>${task.name}</b> - ${task.description}`;
    //   taskList.appendChild(listItem);
    // }
  }


  

  // removeTask (task_item) {
  //   this.tasks = this.tasks.filter(function(item){
  //     return item != task_item; 
  // });
  // }
  
}
}

function todoRender(task) {
  const toDoComponent = document.getElementById("to-do");
  toDoComponent.innerHTML = ""; // Clear previous list items
  toDoComponent.innerHTML = `<div class="card mt-2" style="width: 15rem;"> 
                                <div class="card-body">
                                  <h5 class="card-title text-center">${task.name}</h5>
                                  <hr/>
                                  <h6 class="sub-title">Description</h6>
                                  <p class="card-text">${task.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                
                                  <li class="list-group-item"> 
                                    <div class="hstack gap-3">
                                    <div class="p-1 sub-title">AssignedTo
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
                                  <a href="#" class="btn btn-secondary">Update</a>
                                  <a href="#" class="btn btn-danger">Delete</a>
                                </div>
                            </div> `
};

function inProgressRender(task) {
  const toDoComponent = document.getElementById("in-progress");
  toDoComponent.innerHTML = ""; // Clear previous list items
  toDoComponent.innerHTML = `<div class="card mt-2" style="width: 15rem;"> 
                                <div class="card-body">
                                  <h5 class="card-title text-center">${task.name}</h5>
                                  <hr/>
                                  <h6 class="sub-title">Description</h6>
                                  <p class="card-text">${task.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                
                                  <li class="list-group-item"> 
                                    <div class="hstack gap-3">
                                    <div class="p-1 sub-title">AssignedTo
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
                                  <a href="#" class="btn btn-warning">Update</a>
                                </div>
                            </div> `
};
function review(task) {
  const toDoComponent = document.getElementById("review");
  toDoComponent.innerHTML = ""; // Clear previous list items
  toDoComponent.innerHTML = `<div class="card mt-2" style="width: 15rem;"> 
                                <div class="card-body">
                                  <h5 class="card-title text-center">${task.name}</h5>
                                  <hr/>
                                  <h6 class="sub-title">Description</h6>
                                  <p class="card-text">${task.description}</p>
                                </div>
                                <ul class="list-group list-group-flush">
                                
                                  <li class="list-group-item"> 
                                    <div class="hstack gap-3">
                                    <div class="p-1 sub-title">AssignedTo
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
                                  <a href="#" class="btn btn-info">Done?</a>
                                </div>
                            </div> `
};

  // const task = new TaskManager();

  // task.addTask('Shopping List', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );
  // task.addTask('Shopping cart', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );
  // task.addTask('Shopping doom', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );

  // console.log(task.tasks)

  // task.removeTask('Shopping cart');

  // console.log(task.tasks)




//   const newTaskForm = document.querySelector('#new-task-form');
// newTaskForm.addEventListener('submit', (event) => {
//   event.preventDefault();


//   taskManager.addTask(name, description, assignedTo, dueDate);

//   nameInput.value = '';
//   descriptionInput.value = '';
//   assignedToInput.value = '';
//   dueDateInput.value = '';
// });

// module.exports= {TaskManager}

export default TaskManager