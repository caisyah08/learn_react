import { useState } from "react";
import "./ExpenseForm.css";

export default function ExpenseForm() {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')
  const [enteredDate, setEnteredDate] = useState('')

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value)
    console.log(event.target, 'target event title')
  }

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value)
    console.log(event.target, 'target event amount')
  }

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value)
    console.log(event.target, 'target event date')
  }

  return (
    <form>
      <div className="new-expense__controls">
        
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={setEnteredTitle} />
        </div>

        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={setEnteredAmount} />
        </div>

        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" min="2019-01-01" step="2022-12-31" onChange={setEnteredDate} />
        </div>

        <div className="new-expense__actions">
          <button type="submit">Add expense</button>
        </div>

      </div>
    </form>
  );
}
