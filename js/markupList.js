import { refs } from "../constans.js";
import { createCardList } from "./createCardList.js";

export function markupList(list) {
  refs.listEl.innerHTML = createCardList(list).join("");
}