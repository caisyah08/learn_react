import './ExpenseItem.css'

export default function ExpenseItem({title,date,amount}) {
  return (
    <div className="expense-item"> 
     {/* object tidak bisa langsung dimunculkan dengan bracket kalau di react */}
      <div>{date.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
    </div>
  );
}
