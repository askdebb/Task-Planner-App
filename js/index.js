<<<<<<< HEAD
=======
// // const taskManagerClass = require('./taskManager.js')
// import  TaskManager  from "./taskManager.js";
// let toDoList = [];

// // name field
// const nameInput = document.getElementById("task-name");

// // description

// // const inputMsg = document.querySelector('#task-desc');
// const inputMsg = document.getElementById("task-desc");

// // assignee
// const inputAssignee = document.getElementById("assignee");

// // due date
// const inputDueDate = document.getElementById("due-date");

// // status

// const inputStatus = document.getElementById("status-code");

// // submit button
// const saveBtn = document.getElementById("task-save-btn");


// //to-do column
// const todoContainer = document.getElementById('to-do');

// saveBtn.addEventListener("click", save );

// const taskManager = new TaskManager();

function save(event) {
  event.preventDefault();
  const nameValue = nameInput.value;
  const descValue = inputMsg.value;
  const assigneeValue = inputAssignee.value;
  const statusValue = inputStatus.value;
  const dueDateValue = inputDueDate.value;
  // const dueDateValue = new Date();
  // const theTaskDate = theDueDate(dueDateValue);

  if (validateAndAcceptInput(nameValue, descValue, assigneeValue, dueDateValue, statusValue)) {
      if (saveBtn.innerText === "Save") {
          taskManager.addTask(nameValue, descValue, assigneeValue, dueDateValue, statusValue);
      } else {
          const taskId = saveBtn.getAttribute("data-task-id");
          taskManager.updateTask(parseInt(taskId), {
              name: nameValue,
              description: descValue,
              assignedTo: assigneeValue,
              dueDate: dueDateValue,
              status: statusValue
          });
          saveBtn.innerText = "Save";
          saveBtn.removeAttribute("data-task-id");
      }

      taskManager.update_list();
      clearForm();
  }
}

// function theDueDate(dueDateValue){
//   // Get the current year
// const year = dueDateValue.getFullYear();

// // Get the current month (0-indexed)
// const month = dueDateValue.getMonth() + 1; // Adjust for 0-based indexing

// // Get the current day of the month
// const day = dueDateValue.getDate();

// // Format the date as YYYY-MM-DD
// const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

// return formattedDate;
// // console.log(formattedDate); // Output: 2024-06-06 (assuming today is June 6th, 2024)
// }

// function save() {
//   event.preventDefault();
//   //Validation logic
//   const nameValue = nameInput.value;
//   const descValue = inputMsg.value;
//   const assigneeValue = inputAssignee.value;
//   const statusValue = inputStatus.value;
//   const dueDateValue = new Date();
//   const theTaskDate = theDueDate(dueDateValue);

//   validateAndAcceptInput(nameValue, descValue, assigneeValue, theTaskDate, statusValue);
//   taskManager.addTask(nameValue, descValue, assigneeValue, theTaskDate, statusValue);
//   taskManager.update_list();
//   //  console.log(toDoList);

// }

// function validateAndAcceptInput(nameInfo, descInfo,assigneeInfo, dueDateInfo, statusInfo){
//    // Check if the name contains numbers
//    const nameHasNumbers = /\d/.test(nameInfo) || nameInfo.trim() === "";

//    // Check if the description is empty
//    const descIsEmpty = descInfo.trim() === "";

//    // Check if the assignee contains special characters
//    const assigneeHasSpecialChars = /[^a-zA-Z\s]/.test(assigneeInfo);
 
//    // Check if the due date is in the past
//    const currentDate = new Date();
//    const dueDateIsPast = dueDateInfo < currentDate;
 
   
 
//    // Check if the status is one of the predefined options
//    const validStatuses = ["To-Do", "In-Progress","Review", "Done"];
//    const statusIsInvalid = !validStatuses.includes(statusInfo);
 
//     if (nameHasNumbers) {
//       appendAlert("Task name should not contain numbers or be empty.");
//       // alert("Task name should not contain numbers or be empty.");
//     } else if (descIsEmpty) {
//       appendAlert("Description should not be empty.");
//       // alert("Description should not be empty.");
//     } else if (dueDateIsPast) {
//       appendAlert("Due date should not be in the past.");
//       // alert("Due date should not be in the past.");
//     } else if (assigneeHasSpecialChars) {
//       appendAlert("Assignee should not contain special characters.");
//       // alert("Assignee should not contain special characters.");
//     } else if (statusIsInvalid) {
//       appendAlert('Status should be one of the predefined options: "To Do", "In Progress","Review", or "Done".');
//       // alert(
//       //   'Status should be one of the predefined options: "To Do", "In Progress","Review", or "Done".'
//       // );
//     } else {
//       // Save validated data in the to-do list container    
      
      
//     }

// }




>>>>>>> 4a628e5d48be7cf2e68297ec0b983fcac9ffc0b6


  const appendAlert = (message) => {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
  
    alertPlaceholder.append(wrapper)

    if (alertTrigger) {
      alertTrigger.addEventListener('click', () => {
        appendAlert(message, 'danger')
      })
    }
    
  }

  
  
const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

const alertTrigger = document.querySelector('.liveAlertBtn')




import TaskManager from "./taskManager.js";

const nameInput = document.getElementById("task-name");
const inputMsg = document.getElementById("task-desc");
const inputAssignee = document.getElementById("assignee");
const inputDueDate = document.getElementById("due-date");
const inputStatus = document.getElementById("status-code");
const saveBtn = document.getElementById("task-save-btn");

const taskManager = new TaskManager();

saveBtn.addEventListener("click", save);



function validateAndAcceptInput(name, description, assignedTo, dueDate, status) {
    if (!name || !description || !assignedTo || !dueDate || !status) {
        alert("All fields are required.");
        return false;
    }
    // Further validation logic can be added here
    return true;
}

function clearForm() {
    nameInput.value = '';
    inputMsg.value = '';
    inputAssignee.value = '';
    inputDueDate.value = '';
    inputStatus.value = 'To-Do';
}

document.addEventListener('DOMContentLoaded', () => {
    taskManager.update_list();
});

