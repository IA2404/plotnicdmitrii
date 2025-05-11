class Item {
    constructor(name, weight, rarity) {
      this.name = name;
      this.weight = weight;
      this.rarity = rarity;
    }
  
    getInfo() {
      return `Item: ${this.name}, Weight: ${this.weight}, Rarity: ${this.rarity}`;
    }
  
    setWeight(newWeight) {
      this.weight = newWeight;
    }
  }
  
  class Weapon extends Item {
    constructor(name, weight, rarity, damage, durability = 100) {
      super(name, weight, rarity);
      this.damage = damage;
      this.durability = durability;
    }
  
    use() {
      if (this.durability > 0) this.durability = Math.max(0, this.durability - 10);
    }
  
    repair() {
      this.durability = 100;
    }
  
    getInfo() {
      return `${super.getInfo()}, Damage: ${this.damage}, Durability: ${this.durability}`;
    }
  }
  
  const inventory = [];
  
  function addItem() {
    const name = document.getElementById('name').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const rarity = document.getElementById('rarity').value;
    const type = document.getElementById('type').value;
    const damage = parseInt(document.getElementById('damage').value);
  
    let newItem;
    if (type === 'weapon') {
      newItem = new Weapon(name, weight, rarity, damage || 10);
    } else {
      newItem = new Item(name, weight, rarity);
    }
  
    inventory.push(newItem);
    renderInventory();
  }
  
  function renderInventory() {
    const container = document.getElementById('inventory');
    container.innerHTML = '';
  
    inventory.forEach((item, index) => {
      const div = document.createElement('div');
      div.className = 'item-card';
      div.innerHTML = `
        <p>${item.getInfo()}</p>
        ${item instanceof Weapon
          ? `<button onclick="useWeapon(${index})">Использовать</button>
             <button onclick="repairWeapon(${index})">Починить</button>`
          : ''
        }
      `;
      container.appendChild(div);
    });
  }
  
  function useWeapon(index) {
    inventory[index]?.use?.();
    renderInventory();
  }
  
  function repairWeapon(index) {
    inventory[index]?.repair?.();
    renderInventory();
  }
  