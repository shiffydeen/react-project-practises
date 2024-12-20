import React, {useState, useContext} from 'react'
import { GlobalStates } from '../context/GlobalStates';
import Transaction from './Transaction';

const TransactionList = () => {

    const {transactions} = useContext(GlobalStates);
    
    // console.log(transactions)

  return (
    <>
        <h3>History</h3>
        <ul className="transaction-list">
            {
                transactions.map(transaction => {
                    return <Transaction key={transaction.id} {...transaction}/>
                })
            }
        </ul>
    </>
  )
}

export default TransactionList
