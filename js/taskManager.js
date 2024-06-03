 class TaskManager {
    constructor(currentId = 0) {
      this.currentId = currentId;
      this.tasks = [];
    }

  addTask (name, description, assignedTo, dueDate, status = 'To-Do') {
    this.currentId++; 
    this.tasks.push({
      id: this.currentId,
      name: name,
      description: description,
      assignedTo: assignedTo,
      dueDate: dueDate,
      status: status
    });
  }
}
  const task = new TaskManager();

  task.addTask('Shopping List', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );
  task.addTask('Shopping List', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );
  task.addTask('Shopping List', 'Create Christmas shopping list', 'Agya Christopher', '6/10/2024', 'To-Do' );

  console.log(task.tasks)




//   const newTaskForm = document.querySelector('#new-task-form');
// newTaskForm.addEventListener('submit', (event) => {
//   event.preventDefault();


//   taskManager.addTask(name, description, assignedTo, dueDate);

//   nameInput.value = '';
//   descriptionInput.value = '';
//   assignedToInput.value = '';
//   dueDateInput.value = '';
// });

module.exports= {TaskManager}