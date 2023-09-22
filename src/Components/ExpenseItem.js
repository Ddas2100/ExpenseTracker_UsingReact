import './ExpenseItem.css'

function ExpenseItem(props) {
    return (
        <div className="expense-item">
            <div>{props.date.toISOString()}</div>
            <div className="expense-item__description">
                <h4>{props.title}</h4>
                <div className="expense-item__price">${props.amount}</div>
                <div className="expense-item__description">{props.LocationOfExpenditure}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;