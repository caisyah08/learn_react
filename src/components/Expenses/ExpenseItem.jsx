import { useState } from "react";
import Card from "../General UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

export default function ExpenseItem({ title, date, amount }) {
  //useState mengembalikkan array 
  //elemen pertama adalah nilai state yang sekarang
  //elemen kedua adalah fungsi untuk melakukan update
  const [itemTitle, setItemTitle] = useState(title)

  const clickHandler = () => {
    setItemTitle('updated')
    console.log(itemTitle,'sebelum title')
  }

  console.log('sesudah fungsi')

  return (
    <Card className="expense-item">
      <ExpenseDate date={date}/>
      <div className="expense-item__description">
        <h2>{itemTitle}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={clickHandler}>update</button>
    </Card>
  );
}
