import { useContext } from "react"
import { GlobalStatesProvider } from "./context/GlobalStates"
import AddTransaction from "./components/AddTransaction"
import Balance from "./components/Balance"
import IncomeExpenses from "./components/IncomeExpenses"
import TransactionList from "./components/TransactionList"

function App() {
  

  return (
    <GlobalStatesProvider>
      <h2>Expense Tracker</h2>
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalStatesProvider>
  )
}

export default App
