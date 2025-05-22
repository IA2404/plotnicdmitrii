/**
 * Класс базового предмета
 */
export class Item {
  constructor(id, name, category, rarity, description) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.rarity = rarity;
    this.description = description;
  }

  /**
   * Получить информацию о предмете
   * @returns {string}
   */
  getInfo() {
    return `${this.name} (${this.category}) - ${this.rarity}. ${this.description}`;
  }
}

/**
 * Класс оружия, наследуется от Item
 */
export class Weapon extends Item {
  constructor(id, name, category, rarity, description, damage) {
    super(id, name, category, rarity, description);
    this.damage = damage;
  }

  /**
   * Выводит урон от оружия
   */
  attack() {
    console.log(`Оружие ${this.name} нанесло ${this.damage} урона!`);
  }
}
