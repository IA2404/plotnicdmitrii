export function renderTasks(tasks, filter, deleteTask, toggleTask) {
  const list = document.getElementById('task-list');
  list.innerHTML = '';

  const filtered = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.done;
    if (filter === 'done') return task.done;
  });

  if (filtered.length === 0) {
    const empty = document.createElement('li');
    empty.textContent = 'Нет задач';
    list.appendChild(empty);
  }

  filtered.forEach(task => {
    const li = document.createElement('li');
    li.className = task.done ? 'done' : '';

    const span = document.createElement('span');
    span.textContent = task.text;
    span.addEventListener('click', () => toggleTask(task.id));

    const btn = document.createElement('button');
    btn.textContent = 'Удалить';
    btn.addEventListener('click', () => deleteTask(task.id));

    li.appendChild(span);
    li.appendChild(btn);
    list.appendChild(li);
  });
}
