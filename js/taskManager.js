export class TaskManager {
    constructor(tasks = []) {
      this.currentId = localStorage.getItem("currentId") || 0;
      this.tasks = tasks || [];
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
    const taskList = document.getElementById("to-do");
    taskList.innerHTML = ""; // Clear previous list items
    for (const task of this.tasks) {
      const listItem = document.createElement("li");
      listItem.innerHTML = `<b>${task.name}</b> - ${task.description}`;
      taskList.appendChild(listItem);
    }
  }
  

  // removeTask (task_item) {
  //   this.tasks = this.tasks.filter(function(item){
  //     return item != task_item; 
  // });
  // }
  
}
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