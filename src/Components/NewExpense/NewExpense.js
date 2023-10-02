import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // Handle the data (e.g., add it to an array of expenses in the App.js)
        const expenseData = {
            //Pull out all (key,value) pairs from submitHandler inside ExpenseForm 
            // and insiert that data in this new object
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return (
        <div className='new-expense'>
          {!isEditing && (
            <button onClick={startEditingHandler}>Add New Expense</button>
          )}
          {isEditing && (
            <ExpenseForm
              onSaveExpenseData={saveExpenseDataHandler}
              onCancel={stopEditingHandler}
            />
          )}
        </div>
      );
    };

export default NewExpense;