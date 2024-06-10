// const taskManagerClass = require('./taskManager.js')
import  TaskManager  from "./taskManager.js";
let toDoList = [];

// name field
const nameInput = document.getElementById("task-name");

// description

// const inputMsg = document.querySelector('#task-desc');
const inputMsg = document.getElementById("task-desc");

// assignee
const inputAssignee = document.getElementById("assignee");

// due date
const inputDueDate = document.getElementById("due-date");

// status

const inputStatus = document.getElementById("status-code");

// submit button
const saveBtn = document.getElementById("task-save-btn");


//to-do column
const todoContainer = document.getElementById('to-do');

saveBtn.addEventListener("click", save );

const taskManager = new TaskManager();



function save() {
  event.preventDefault();
  //Validation logic
  const nameValue = nameInput.value;
  const descValue = inputMsg.value;
  const assigneeValue = inputAssignee.value;
  const statusValue = inputStatus.value;
  const dueDateValue = new Date();
  const theTaskDate = theDueDate(dueDateValue);

 
  

  validateAndAcceptInput(nameValue, descValue, assigneeValue, theTaskDate, statusValue);
  taskManager.addTask(nameValue, descValue, assigneeValue, theTaskDate, statusValue);
  taskManager.update_list();
  //  console.log(toDoList);

}

function validateAndAcceptInput(nameInfo, descInfo,assigneeInfo, dueDateInfo, statusInfo){
   // Check if the name contains numbers
   const nameHasNumbers = /\d/.test(nameInfo) || nameInfo.trim() === "";

   // Check if the description is empty
   const descIsEmpty = descInfo.trim() === "";

   // Check if the assignee contains special characters
   const assigneeHasSpecialChars = /[^a-zA-Z\s]/.test(assigneeInfo);
 
   // Check if the due date is in the past
   const currentDate = new Date();
   const dueDateIsPast = dueDateInfo < currentDate;
 
   
 
   // Check if the status is one of the predefined options
   const validStatuses = ["To-Do", "In-Progress","Review", "Done"];
   const statusIsInvalid = !validStatuses.includes(statusInfo);
 
    if (nameHasNumbers) {
      alert("Task name should not contain numbers or be empty.");
    } else if (descIsEmpty) {
      alert("Description should not be empty.");
    } else if (dueDateIsPast) {
      alert("Due date should not be in the past.");
    } else if (assigneeHasSpecialChars) {
      alert("Assignee should not contain special characters.");
    } else if (statusIsInvalid) {
      alert(
        'Status should be one of the predefined options: "To Do", "In Progress","Review", or "Done".'
      );
    } else {
      // Save validated data in the to-do list container    
      
      
    }

}

function theDueDate(dueDateValue){
  // Get the current year
const year = dueDateValue.getFullYear();

// Get the current month (0-indexed)
const month = dueDateValue.getMonth() + 1; // Adjust for 0-based indexing

// Get the current day of the month
const day = dueDateValue.getDate();

// Format the date as YYYY-MM-DD
const formattedDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

return formattedDate;
// console.log(formattedDate); // Output: 2024-06-06 (assuming today is June 6th, 2024)
}


// console.log(nameInput.value);
// console.log(inputMsg.value);
// console.log(inputAssignee.value);
// console.log(inputDueDate.value);
// console.log(inputStatus.value);

// \ e.preventDefault();
// toDoList.push({
//    name: nameInput.value,
//    mesasge: inputMsg.value,
//    assignee: inputAssignee.value,
//    dueDate:  inputDueDate.value,
//    status: inputStatus.value

// });

// for editing title of columns

//document.addEventListener("DOMContentLoaded", function () {
  // let currentColumn;

  // // Event listener for edit column buttons
  // document.querySelectorAll(".edit-column-btn").forEach((button) => {
  //   button.addEventListener("click", function () {
  //     currentColumn = this.closest(".task-list-items");
  //     const title = currentColumn.querySelector("#column-title").innerText;

  //     // Populate modal with current column title
  //     document.getElementById("columnTitle").value = title;
  //   });
  // });

  // Event listener for the save changes button in the modal
  //document.getElementById('saveChangesBtn').addEventListener('click', function () {
    //const newTitle = document.getElementById('columnTitle').value;

    // update the column title
   // if (currentColumn) {
     // currentColumn.querySelector('#column-title').innerText = newTitle;
   // }

      // close the modal
     // const modal = bootstrap.Modal.getInstance(document.getElementsById('editColumnModal'));
      //modal.hide();
    //});
//});



