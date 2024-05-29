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

  //if (nameHasNumbers) {

  //} else {
  // Save validated data in the to-do list container
  toDoList.push({
    // key : value  <==>  property : value
    name: nameInput.value,
    description: inputMsg.value,
    assignee: inputAssignee.value,
    dueDate: inputDueDate.value,
    status: inputStatus.value,
  });

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

// for editing title of columns

//document.addEventListener("DOMContentLoaded", function () {
  let currentColumn;

  // Event listener for edit column buttons
  document.querySelectorAll(".edit-column-btn").forEach((button) => {
    button.addEventListener("click", function () {
      currentColumn = this.closest(".task-list-items");
      const title = currentColumn.querySelector("#column-title").innerText;

      // Populate modal with current column title
      document.getElementById("columnTitle").value = title;
    });
  });

  // Event listener for the save changes button in the modal
  document.getElementById('saveChangesBtn').addEventListener('click', function () {
    const newTitle = document.getElementById('columnTitle').value;

    // update the column title
    if (currentColumn) {
      currentColumn.querySelector('#column-title').innerText = newTitle;
    }

      // close the modal
      const modal = bootstrap.Modal.getInstance(document.getElementsById('editColumnModal'));
      modal.hide();
    });
//});



