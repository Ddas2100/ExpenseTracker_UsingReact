import React from 'react';
import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import './Expenses.css'

const ExpenseItem=(props) => {
    const clickHandler= () => {
        console.log('clicked!!!')
    }
    return (
        // <Card className= "expense-item">
        //     <ExpenseDate date={props.date} />
        //     <ExpenseDetails className='expense-item__description'
        //         title={props.title} amount= {props.amount} LocationOfExpenditure={props.LocationOfExpenditure}>
        //     </ExpenseDetails>
        // </Card>
        <Card className= "expense-item">
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h3>{props.title}</h3>
                <div className='expense-item__price'>${props.amount}</div>
                {/* <h4>{props.LocationOfExpenditure}</h4> */}
            </div>
            <button className='deleteButton' onClick={clickHandler}>Delete</button>
        </Card>
    ); 
}

export default ExpenseItem;

