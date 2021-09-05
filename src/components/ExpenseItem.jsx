import './ExpenseItem.css'

export default function ExpenseItem() {
  const expenseDate = new Date(2021,2,28)
  const expenseAmount = 294.67
  const expenseTitle = "Car Insurance"
  return (
    <div className="expense-item"> 
     {/* object tidak bisa langsung dimunculkan dengan bracket kalau di react */}
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}
