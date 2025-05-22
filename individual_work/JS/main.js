import { renderTasks } from './ui.js';
import { loadTasks, saveTasks } from './storage.js';

let tasks = loadTasks();
let currentFilter = 'all';

function addTask(text) {
  tasks.push({ id: Date.now(), text, done: false });
  saveTasks(tasks);
  render();
}

function deleteTask(id) {
  tasks = tasks.filter(t => t.id !== id);
  saveTasks(tasks);
  render();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.done = !task.done;
    saveTasks(tasks);
    render();
  }
}

function render() {
  renderTasks(tasks, currentFilter, deleteTask, toggleTask);
}

document.getElementById('task-form').addEventListener('submit', e => {
  e.preventDefault();
  const input = document.getElementById('task-input');
  const text = input.value.trim();
  if (text === '') {
    alert('Пожалуйста, введите задачу');
    return;
  }
  addTask(text);
  input.value = '';
});

document.querySelectorAll('.filters button').forEach(btn => {
  btn.addEventListener('click', () => {
    currentFilter = btn.dataset.filter;
    render();
  });
});

render();
