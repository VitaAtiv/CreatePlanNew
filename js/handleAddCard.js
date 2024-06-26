import { refs } from "../constans.js";
import { createCard } from "./createCard.js";


// 7. чому функція онбтнклік знає про додавання карток? крае створити окрему функцію
export function handleAddCard(card) {
  //перенос з попереднього 6. тепер треба додати в список (інер штимель не підходить, бо щоразу перезаписуватиме картку - тобто буде лише ожна картка що весь час оновлюватиметься користувачем, тому:)
  refs.listEl.insertAdjacentHTML("beforeend", createCard(card));
  // коли завантажується сторінка маємо перевіряти чи є вже щось у локалсторж
  // і потім при натисканні на онклік в будь-якому випадку записувати
  // ця функція додає карту не лише в список, а й в локалсторж:
  // робимо пеервірку чи є в локалсторж ці карти
  const cards = getCards();
 
  cards.push(card); // доаємо в цей масив нашу картку
  console.log(cards);
  setCards(cards);
}
