

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

function save(event) {
    event.preventDefault();
    const nameValue = nameInput.value;
    const descValue = inputMsg.value;
    const assigneeValue = inputAssignee.value;
    const statusValue = inputStatus.value;
    const dueDateValue = inputDueDate.value;

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

