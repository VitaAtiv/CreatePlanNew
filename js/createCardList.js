import { createCard } from "./createCard.js";

// 10.
// якщо в todos отримували масив об'єктів з тайтл і дескріпшин, то тут викликаючи креаткард і передаючи кардс отримуємо масив лішок
export function createCardList(cards) {
  return cards.map(createCard);
}
