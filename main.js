
import "./style.css";



import { createCardList } from "./js/createCardList.js";
import { LOCALSTORAGE_KEY, refs } from "./constans.js";
import { onBtnClick } from "./js/onBtnClick.js";

//  8. ця логіка з функці хенделєдкард
const todos = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];




refs.formToDo.addEventListener("submit", onBtnClick); // прослуховуємо кнопку
// 9. тепер треба заповнити ліст тудусами з 8.
// refs.listEl.innerHTML = todos.join("")
// 11. тому 
refs.listEl.innerHTML =  createCardList(todos).join("");







