import { addItemToInventory } from './inventory.js';
import { setupEventDelegation, updateTotalItems } from './ui.js';

document.getElementById('item-form').addEventListener('submit', (e) => {
  e.preventDefault();
  addItemToInventory();
  updateTotalItems();
});

setupEventDelegation();
