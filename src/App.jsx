import './App.css'
import AddTransaction from './Components/AddTransaction'
import Balance from './Components/Balance'
import History from './Components/History'
import IncomeExpense from './Components/IncomeExpense'
import ContextProvider from './Context/Context'


function App() {

  return (
    <>
      <ContextProvider>
        <h2>Expense Tracker</h2>
        <div className="container">
          <Balance />
          <IncomeExpense />
          <History />
          <AddTransaction />
        </div>
      </ContextProvider>
    </>
  )
}

export default App
