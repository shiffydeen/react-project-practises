import React, {useState, useContext} from 'react'
import { GlobalStates } from '../context/GlobalStates';

const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalStates);

    const amount = transactions.map(transaction => transaction.amount);
    const incomeTotal = amount.filter(item => item > 0).reduce((acc, curr) => acc += curr, 0);
    const expenseTotal = amount.filter(item => item < 0).reduce((acc, curr) => acc += curr, 0);

    console.log(incomeTotal);
    console.log(expenseTotal)


  return (
    <div className="inc-exp">
        <div>
          <h4>INCOME</h4>
          <p className="income">{incomeTotal}</p>
        </div>
        <div>
          <h4>EXPENSE</h4>
          <p className="expense">{expenseTotal}</p>
        </div>
      </div>
  )
}

export default IncomeExpenses
