import './style.css'

const refs = {
  formToDo: document.querySelector(".form-todo"),  // знаходимо кнопку
};

refs.formToDo.addEventListener("submit", onBtnClick);  // прослуховуємо кнопку
function onBtnClick(event) {
  event.preventDefault()  // щоб не оновлювалась сторінка
  const formEl = event.currentTarget // знаходимо елемент форми, на якому відпрацювала відправка сабміт  
  console.log(formEl);
 const data = new FormData(formEl);  // створюється обєкт з властивостями-значеннями введеними в інпут та текстаріа
  console.log(data);
  data.forEach((value, name) => {
    console.log(name, value);
  }) 
}