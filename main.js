import './style.css'

// 2.
const LOCALSTORAGE_KEY = "todos"; // створюємо спеціальний ключ, аби дата записати інакше

// 1.
const refs = {
  formToDo: document.querySelector(".form-todo"),  // знаходимо кнопку
  listEl: document.querySelector (".list"),  //4.аби додати картку, треба знайти список, щоб знати куди додавати нову картку
};

refs.formToDo.addEventListener("submit", onBtnClick);  // прослуховуємо кнопку
function onBtnClick(event) {
  event.preventDefault()  // щоб не оновлювалась сторінка
  const formEl = event.currentTarget // знаходимо елемент форми, на якому відпрацювала відправка сабміт  
  console.log(formEl);
 const formDataValue = new FormData(formEl);  // створюється обєкт з властивостями-значеннями введеними в інпут та текстаріа
  const data = {};
  formDataValue.forEach((value, name) => {
    //  console.log(name, value);  // перебираємо кожен єлемент об'єкту і в консоль ключ та значення
    data[name] = value; // в об'єкті дейт звертаюсь до неіснуючої властивості яка записується в змінну нейм. зберігаю в неї велью
    // тобто створюється нова властивість нейм в дата і тудизаписується значення велью
    // так відбувається спочатку для інпуту, потім для текстаріа
  });
  console.log(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data));
  formEl.reset() // оновлюємо форму аби вона там видалялася
  
  // 5. де отримується нова картка кард? тут в дата
   console.log(createCard(data)); // виклик функції креейт кард повністю створює лішку-розмітку в консолі
  // 6. тепер треба додати в список (інер штимель не підходить, бо щоразу перезаписуватиме картку - тобто буде лише ожна картка що весь час оновлюватиметься користувачем, тому:)
  refs.listEl.insertAdjacentHTML("beforeend", createCard(data));
}

//3. створюємо шаблон майбутньої картки - спочатку його будуємо в штмл а потім переносимо в джаваскрипт через функцію:
function createCard (card) {
  return `<li class="list-item">
        <h2 class="list-item-title">${card.title}</h2>
        <p class="list-item-description">${card.description}</p>
      </li>`;
}