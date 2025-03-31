import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import History from './Components/History'
import IncomeExpense from './Components/IncomeExpense'

function App() {

  return (
    <>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpense />
        <History />
        <AddTransaction />
      </div>
    </>
  )
}

export default App
