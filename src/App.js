import ExpenseItem from './Components/ExpenseItem';
// import logo from './logo.svg';
// import './App.css'; 

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Tolilet Paper',
      amount: 94.12,
      date: new Date(2023, 7, 14),
      LocationOfExpenditure: 'General Store'
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2023, 7, 15),
      LocationOfExpenditure: 'Samsung Showroom'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2023, 7, 16),
      LocationOfExpenditure: 'Insurance Office'
    },
    {
      id: 'e4',
      title: 'New Desk',
      amount: 450,
      date: new Date(2023, 7, 18),
      LocationOfExpenditure: 'General Store'
    }
  ]
  
  const elements=[];
  for(const[index, value] of expenses.entries()) {
    elements.push(<li key={index}>{value}</li>)
  }
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <h2>Let's Get Started!</h2>
      {expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          LocationOfExpenditure={expense.LocationOfExpenditure}
        />
      ))}
      {/* <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date= {expenses[0].date}
        LocationOfExpenditure= {expenses[0].LocationOfExpenditure}>
      </ExpenseItem>
      
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date= {expenses[1].date}
        LocationOfExpenditure= {expenses[1].LocationOfExpenditure}>
      </ExpenseItem>

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date= {expenses[2].date}
        LocationOfExpenditure= {expenses[2].LocationOfExpenditure}>
      </ExpenseItem>

      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date= {expenses[3].date}
        LocationOfExpenditure= {expenses[3].LocationOfExpenditure}>
      </ExpenseItem> */}
    </div>
  );
}

export default App;
