@jest-environment jsdom

import '@testing-library/jest-dom/extend-expect';
import { fireEvent, screen } from '@testing-library/dom';
import TaskManager from './taskManager.js';

// Mock localStorage
beforeEach(() => {
  let store = {};
  global.localStorage = {
    getItem(key) {
      return store[key] || null;
    },
    setItem(key, value) {
      store[key] = value.toString();
    },
    clear() {
      store = {};
    },
  };
});

describe('TaskManager', () => {
  let taskManager;

  beforeEach(() => {
    taskManager = new TaskManager();
  });

  test('initializes with no tasks and currentId as 0', () => {
    expect(taskManager.tasks.length).toBe(0);
    expect(taskManager.currentId).toBe(0);
  });

  test('adds a new task', () => {
    taskManager.addTask('Task 1', 'Description 1', 'User 1', '2022-12-31', 'To-Do');
    expect(taskManager.tasks.length).toBe(1);
    expect(taskManager.tasks[0]).toEqual(expect.objectContaining({
      id: 1,
      name: 'Task 1',
      description: 'Description 1',
      assignedTo: 'User 1',
      dueDate: '2022-12-31',
      status: 'To-Do',
    }));
  });

  test('updates an existing task', () => {
    taskManager.addTask('Task 1', 'Description 1', 'User 1', '2022-12-31', 'To-Do');
    taskManager.updateTask(1, { name: 'Updated Task 1', status: 'Done' });
    expect(taskManager.tasks[0].name).toBe('Updated Task 1');
    expect(taskManager.tasks[0].status).toBe('Done');
  });

  test('deletes a task', () => {
    taskManager.addTask('Task 1', 'Description 1', 'User 1', '2022-12-31', 'To-Do');
    taskManager.deleteTask(1);
    expect(taskManager.tasks.length).toBe(0);
  });

  test('saves tasks to localStorage', () => {
    taskManager.addTask('Task 1', 'Description 1', 'User 1', '2022-12-31', 'To-Do');
    expect(JSON.parse(localStorage.getItem('tasks')).length).toBe(1);
    expect(JSON.parse(localStorage.getItem('currentId'))).toBe(1);
  });

  test('loads tasks from localStorage', () => {
    localStorage.setItem('tasks', JSON.stringify([{ id: 1, name: 'Task 1', description: 'Description 1', assignedTo: 'User 1', dueDate: '2022-12-31', status: 'To-Do' }]));
    localStorage.setItem('currentId', '1');
    const newTaskManager = new TaskManager();
    expect(newTaskManager.tasks.length).toBe(1);
    expect(newTaskManager.currentId).toBe(1);
  });
});

describe('index.js', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="liveAlertPlaceholder"></div>
      <input id="task-name" type="text" />
      <input id="task-desc" type="text" />
      <input id="assignee" type="text" />
      <input id="due-date" type="date" />
      <select id="status-code">
        <option value="To-Do">To-Do</option>
        <option value="In-Progress">In-Progress</option>
        <option value="Review">Review</option>
        <option value="Done">Done</option>
      </select>
      <button id="task-save-btn">Save</button>
      <div id="to-do"></div>
      <div id="in-progress"></div>
      <div id="review"></div>
      <div id="done"></div>
    `;
    require('./index.js');
  });

  test('validates form input and adds a task', () => {
    const nameInput = screen.getByLabelText('task-name');
    const descInput = screen.getByLabelText('task-desc');
    const assigneeInput = screen.getByLabelText('assignee');
    const dueDateInput = screen.getByLabelText('due-date');
    const statusSelect = screen.getByLabelText('status-code');
    const saveButton = screen.getByText('Save');

    fireEvent.input(nameInput, { target: { value: 'Task 1' } });
    fireEvent.input(descInput, { target: { value: 'Description 1' } });
    fireEvent.input(assigneeInput, { target: { value: 'User 1' } });
    fireEvent.input(dueDateInput, { target: { value: '2022-12-31' } });
    fireEvent.change(statusSelect, { target: { value: 'To-Do' } });
    fireEvent.click(saveButton);

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
  });

  test('shows alert if any field is empty', () => {
    const saveButton = screen.getByText('Save');
    fireEvent.click(saveButton);
    expect(screen.getByText('All fields are required.')).toBeInTheDocument();
  });
});
