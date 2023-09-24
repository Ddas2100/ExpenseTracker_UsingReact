import React from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import './Expenses.css'

function ExpenseItem(props) {
    return (
        <Card className= "expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails className='expense-item__description'
                title={props.title} amount= {props.amount} LocationOfExpenditure={props.LocationOfExpenditure}>
            </ExpenseDetails>
        </Card>
        //     <ExpenseDetails className='expense-item__description'
        //         title={props.title} amount= {props.amount} LocationOfExpenditure={props.LocationOfExpenditure} 
        //     />
        //     <div className='expense-item__description'>
        //         <h3>{props.title}</h3>
        //         <div className='expense-item__price'>${props.amount}</div>
        //         <div>{props.LocationOfExpenditure}</div>
        //     </div>
        // </Card>
    ); 
}

export default ExpenseItem;

