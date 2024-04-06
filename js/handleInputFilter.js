import { markupList } from "./markupList.js";

export const handleInputFilter = (event) => {
  const { value } = event.currentTarget;
  // or   const a = event.currentTarget.value;
  // const filterTodos = todos.filter((item) => item.title.includes(a));
  const filterTodos = todos.filter((item) => item.title.includes(value));
  console.log(event.currentTarget.value);
  console.log(filterTodos);
  markupList(filterTodos); // замість цього:
    //   refs.listEl.innerHTML = createCardList(filterTodos).join("");
    markupList(filterTodos);
}