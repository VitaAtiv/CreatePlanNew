import { LOCALSTORAGE_KEY, refs } from "../constans";

export const getCards = () => {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
}  // оскільки в локалсторж зберігається строка то маємо джейсон розпарсити ++ після того як розпарсили маємо перевірити чи взагалі воно є, чи може там нул, якщо нул то можна отримати порожній масив
// в такому видадку з "або" наш cards міститиме масив
 

export const setCards = (cards) => {
    return JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)) || [];
}  