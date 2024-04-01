//3. створюємо шаблон майбутньої картки - спочатку його будуємо в штмл а потім переносимо в джаваскрипт через функцію:
export function createCard(card) {
  return `<li class="list-item">
        <h2 class="list-item-title">${card.title}</h2>
        <p class="list-item-description">${card.description}</p>
      </li>`;
}
