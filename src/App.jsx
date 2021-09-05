// kalau huruf kecil nama custom elemennya enggak akan bisa jalan 
// import expenseitem from "./components/ExpenseItem";

import ExpenseItem from "./components/ExpenseItem.jsx";

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem></ExpenseItem>
      {/* di bawah ini enggak jalan */}
      {/* <expenseitem></expenseitem> */}
    </div>
  );
}

export default App;
