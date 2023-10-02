import React, { useState } from 'react';
import './App.css'; 
import Expenses from './Components/Expenses/Expenses';
import NewExpense from './Components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Tolilet Paper',
    amount: 94.12,
    date: new Date(2023, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV', 
    amount: 799.49,
    date: new Date(2022, 5, 15),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 9, 16),
  },
  {
    id: 'e4',
    title: 'New Desk',
    amount: 450,
    date: new Date(2022, 7, 18), 
  },
  {
    id: 'e5',
    title: 'Television',
    amount: 299,
    date: new Date(2023, 10, 18),
  }
]

const App= () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler} />
      <Expenses items= {expenses} />
    </div>
  );
}

export default App;
