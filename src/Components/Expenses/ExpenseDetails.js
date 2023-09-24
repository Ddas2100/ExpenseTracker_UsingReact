import React from 'react';
import './ExpenseItem.css'

function ExpenseDetails(props) {
    return (
        <div className="expense-item__description">
            <h4>{props.title}</h4>
            <div className="expense-item__price">${props.amount}</div>
            <div className="expense-item__description">{props.LocationOfExpenditure}</div>
        </div>
    )
}

export default ExpenseDetails