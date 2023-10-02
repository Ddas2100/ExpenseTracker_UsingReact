import React from 'react';
// import ExpenseDetails from './ExpenseDetails';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import './Expenses.css' 

const ExpenseItem=(props) => {
    // const [title, setTitle] = useState(props.title);
    // const clickHandler = () => {
    //     setTitle('Updated');
    //     console.log(title);
    // };

    // const [amount, setAmount] = useState(props.amount);
    // const clickHandler2 = () => {
    //     setAmount('100');
    //     console.log(amount);
    // };
    
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
            {/* <button className='changeButton' onClick={clickHandler}>Change Title</button> */}
            {/* <button className='changeButton' onClick={clickHandler2}>Change Amount</button> */}
        </Card> 
    ); 
}

export default ExpenseItem;

