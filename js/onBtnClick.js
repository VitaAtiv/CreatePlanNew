
import { handleAddCard } from "./handleAddCard.js";

export function onBtnClick(event) {
  event.preventDefault(); // щоб не оновлювалась сторінка
  const formEl = event.currentTarget; // знаходимо елемент форми, на якому відпрацювала відправка сабміт
  const formDataValue = new FormData(formEl); // створюється обєкт з властивостями-значеннями введеними в інпут та текстаріа
  const data = {};
  formDataValue.forEach((value, name) => {
    //  console.log(name, value);  // перебираємо кожен єлемент об'єкту і в консоль ключ та значення
    data[name] = value; // в об'єкті дейт звертаюсь до неіснуючої властивості яка записується в змінну нейм. зберігаю в неї велью
    // тобто створюється нова властивість нейм в дата і тудизаписується значення велью
    // так відбувається спочатку для інпуту, потім для текстаріа
  });
  // localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  formEl.reset(); // оновлюємо форму аби вона там видалялася

  // 5. де отримується нова картка кард? тут в дата
  // console.log(createCard(data)); // виклик функції креейт кард повністю створює лішку-розмітку в консолі
  // 6. тепер треба додати в список (інер штимель не підходить, бо щоразу перезаписуватиме картку - тобто буде лише ожна картка що весь час оновлюватиметься користувачем, тому:)
  // замість цього  refs.listEl.insertAdjacentHTML("beforeend", createCard(data)); таке:
  handleAddCard(data);
}