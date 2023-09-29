import React from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const saveExpenseDataHandler = (enteredExpenseData) => {
        // Handle the data (e.g., add it to an array of expenses in the App.js)
        const expenseData = {
            //Pull out all (key,value) pairs from submitHandler inside ExpenseForm 
            // and insiert that data in this new object
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    };

    return (
        <div className='new-expense'>
            {/* Render the ExpenseForm component and pass the callback as a prop */}
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
};

export default NewExpense;