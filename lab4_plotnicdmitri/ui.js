import { inventory } from './inventory.js';

export function updateTable() {
  const tbody = document.querySelector('#inventory-table tbody');
  tbody.innerHTML = '';
  inventory.forEach(item => {
    const tr = document.createElement('tr');
    tr.className = item.rarity;
    tr.dataset.id = item.id;
    tr.innerHTML = `
      <td>${item.name}</td>
      <td>${item.category}</td>
      <td>${item.rarity}</td>
      <td>${item.category === 'weapon' ? item.damage : '—'}</td>
      <td><button class="delete-btn">Удалить</button></td>
    `;
    tbody.appendChild(tr);
  });
}

export function setupEventDelegation() {
  const tbody = document.querySelector('#inventory-table tbody');

  tbody.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const row = e.target.closest('tr');
      const id = row.dataset.id;
      row.classList.add('fade-out');
      setTimeout(() => {
        removeItem(id);
        row.remove();
        updateTotalItems();
      }, 500);
    }
  });

  tbody.addEventListener('mouseover', (e) => {
    const row = e.target.closest('tr');
    if (row) {
      const item = inventory.find(i => i.id === row.dataset.id);
      if (item) {
        document.getElementById('item-info').textContent = item.getInfo();
      }
    }
  });

  tbody.addEventListener('mouseout', () => {
    document.getElementById('item-info').textContent = '';
  });
}

/**
 * Удаление предмета из массива
 */
function removeItem(id) {
  const index = inventory.findIndex(i => i.id === id);
  if (index !== -1) inventory.splice(index, 1);
}

/**
 * Обновление счетчика предметов
 */
export function updateTotalItems() {
  document.getElementById('total-items').textContent = `Всего предметов: ${inventory.length}`;
}
