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

saveBtn.addEventListener("click", function () {
   //Validation logic
    const nameValue = nameInput.value;
    const descValue = inputMsg.value;
    const assigneeValue = inputAssignee.value;
    const statusValue = inputStatus.value;
    const dueDateValue = new Date(inputDueDate.value);
    const currentDate = new Date();

  // Check if the name contains numbers
  const nameHasNumbers = /\d/.test(nameValue);

  // Check if the description is empty
  const descIsEmpty = descValue.trim() === "";

  // Check if the due date is in the past
  const dueDateIsPast = dueDateValue < currentDate;

  // Check if the assignee contains special characters
  const assigneeHasSpecialChars = /[^a-zA-Z\s]/.test(assigneeValue);

  // Check if the status is one of the predefined options
  const validStatuses = ["To-Do", "In-Progress", "Done"];
  const statusIsInvalid = !validStatuses.includes(statusValue);

  if (nameHasNumbers) {
    alert("Task name should not contain numbers.");
  } else if (descIsEmpty) {
    alert("Description should not be empty.");
  } else if (dueDateIsPast) {
    alert("Due date should not be in the past.");
  } else if (assigneeHasSpecialChars) {
    alert("Assignee should not contain special characters.");
  } else if (statusIsInvalid) {
    alert(
      'Status should be one of the predefined options: "To Do", "In Progress", or "Done".'
    );
  } else {
    // Save validated data in the to-do list container
    toDoList.push({
      // key : value  <==>  property : value
      name: nameInput.value,
      description: inputMsg.value,
      assignee: inputAssignee.value,
      dueDate: inputDueDate.value,
      status: inputStatus.value,
    });
  }

  console.log(toDoList);

});

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
