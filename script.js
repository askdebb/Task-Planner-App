// name field
const nameInput = document.getElementById('task-name');

// description

const inputMsg = document.querySelector('#task-desc');
// const inputMsg = document.getElementById('task-desc');

// assignee
const inputAssignee = document.getElementById('assignee');

// due date
const inputDueDate = document.getElementById('due-date');

// status

const inputStatus = document.getElementById('status-code');

// submit button
const saveBtn = document.getElementById('task-save-btn');



saveBtn.addEventListener('click', function () {
   console.log(nameInput.value);
   console.log(inputMsg.value);
   console.log(inputAssignee.value);
   console.log(inputDueDate.value);
   console.log(inputStatus.value);
});