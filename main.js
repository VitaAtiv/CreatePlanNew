


import { handleInputFilter } from "./js/handleInputFilter.js";
import { markupList } from "./js/markupList.js";
import { onBtnClick } from "./js/onBtnClick.js";
import { refs } from "./constans.js";
import { getCards } from "./js/api.js";

import "./style.css";
//  8. ця логіка з функці хенделєдкард
const todos = getCards();


// 11. тому 
markupList(todos); // замість цього:
// refs.listEl.innerHTML =  createCardList(todos).join("");
refs.formToDo.addEventListener("submit", onBtnClick); // прослуховуємо кнопку
// 9. тепер треба заповнити ліст тудусами з 8.
// refs.listEl.innerHTML = todos.join("")


refs.filterTitle.addEventListener("input", handleInputFilter);







