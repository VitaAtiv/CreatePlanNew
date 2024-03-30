import "./style.css";

// 2.
const LOCALSTORAGE_KEY = "todos"; // створюємо спеціальний ключ, аби дата записати інакше
//  8. ця логіка з функці хенделєдкард
const todos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];


// 1.
const refs = {
  formToDo: document.querySelector(".form-todo"), // знаходимо кнопку
  listEl: document.querySelector(".list"), //4.аби додати картку, треба знайти список, щоб знати куди додавати нову картку
};

refs.formToDo.addEventListener("submit", onBtnClick); // прослуховуємо кнопку
// 9. тепер треба заповнити ліст тудусами з 8.
// refs.listEl.innerHTML = todos.join("")
// 11. тому 
refs.listEl.innerHTML =  cteateCardList(todos).join("");


function onBtnClick(event) {
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

// 7. чому функція онбтнклік знає про додавання карток? крае створити окрему функцію
function handleAddCard(card) {
  //перенос з попереднього 6. тепер треба додати в список (інер штимель не підходить, бо щоразу перезаписуватиме картку - тобто буде лише ожна картка що весь час оновлюватиметься користувачем, тому:)
  refs.listEl.insertAdjacentHTML("beforeend", createCard(card));
  // коли завантажується сторінка маємо перевіряти чи є вже щось у локалсторж
  // і потім при натисканні на онклік в будь-якому випадку записувати
  // ця функція додає карту не лише в список, а й в локалсторж:
  // робимо пеервірку чи є в локалсторж ці карти
  const cards = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || []; // оскільки в локалсторж зберігається строка то маємо джейсон розпарсити ++ після того як розпарсили маємо перевірити чи взагалі воно є, чи може там нул, якщо нул то можна отримати порожній масив
  // в такому видадку з "або" наш cards міститиме масив
  cards.push(card)  // доаємо в цей масив нашу картку
  console.log(cards);
   localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(cards)); //просто кардс передати не можна це масв, треба перетворити на строку джейсонюстрінгефай
}
// 10.
// якщо в todos отримували масив об'єктів з тайтл і дескріпшин, то тут викликаючи креаткард і передаючи кардс отримуємо масив лішок 
function cteateCardList (cards) {
  return cards.map(createCard)
}

//3. створюємо шаблон майбутньої картки - спочатку його будуємо в штмл а потім переносимо в джаваскрипт через функцію:
function createCard(card) {
  return `<li class="list-item">
        <h2 class="list-item-title">${card.title}</h2>
        <p class="list-item-description">${card.description}</p>
      </li>`;
}


