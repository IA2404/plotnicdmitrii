import { Item, Weapon } from './classes.js';
import { generateId } from './utils.js';
import { updateTable } from './ui.js';

export const inventory = [];

export function addItemToInventory() {
  const name = document.getElementById('name').value.trim();
  const category = document.getElementById('category').value;
  const rarity = document.getElementById('rarity').value;
  const description = document.getElementById('description').value.trim();
  const damageValue = parseInt(document.getElementById('damage').value);

  if (!name || !description) return;

  const id = generateId();
  let item;

  if (category === 'weapon') {
    const damage = isNaN(damageValue) ? 0 : damageValue;
    item = new Weapon(id, name, category, rarity, description, damage);
    item.attack();
  } else {
    item = new Item(id, name, category, rarity, description);
  }

  inventory.push(item);
  updateTable();
}
