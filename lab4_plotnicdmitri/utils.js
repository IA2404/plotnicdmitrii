/**
 * Генерация уникального ID
 * @returns {string}
 */
export function generateId() {
  return '_' + Math.random().toString(36).substr(2, 9);
}
