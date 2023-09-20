import './ExpenseItem.css'

function ExpenseItem() {
    return (
        <div className="expense-item">
            <div className="expense-item__description">
                <h4>Food</h4>
                <div className="expense-item__price">Rs. 10</div>
            </div> 
            <div className="expense-item__description"> 
                <h4>Petrol</h4>
                <div className="expense-item__price">Rs. 100</div>
            </div>
            <div className="expense-item__description">
                <h4>Movies</h4>
                <div className="expense-item__price">Rs. 200</div>
            </div>
        </div>
    )
}

export default ExpenseItem;