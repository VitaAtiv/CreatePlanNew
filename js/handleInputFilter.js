import { markupList } from "./markupList.js";
import { LOCALSTORAGE_KEY, refs } from "../constans.js";


export const handleInputFilter = (event) => {
  const { value } = event.currentTarget;
  // or   const a = event.currentTarget.value;
  // const filterTodos = todos.filter((item) => item.title.includes(a));
  
  const todos = getCards();
  const filterTodos = todos.filter((item) => item.title.includes(value));
  console.log(event.currentTarget.value);
  console.log(filterTodos);
  markupList(filterTodos); // замість цього:
    //   refs.listEl.innerHTML = createCardList(filterTodos).join("");
   
}


// or
/*   export const handleInputFilter = (todos) => {
    return (event) => {
  const { value } = event.currentTarget;
  const filterTodos = todos.filter((item) => item.title.includes(value));
  markupList(filterTodos);    
}
*/