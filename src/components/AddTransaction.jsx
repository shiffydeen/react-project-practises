import React, {useRef, useState, useContext} from 'react'
import { GlobalStates } from '../context/GlobalStates';

const AddTransaction = () => {

    const {addTransac} = useContext(GlobalStates)

    const [text, setText] = useState('');
    const [amount, setAmount] = useState('');

    // console.log(text);
    // console.log(amount);



    const handleSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text, 
            amount: +amount
        }

        addTransac(newTransaction)
    }

  return (
    <>
        <h3>Add new transaction</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="expense-title">Text</label>
          <input type="text" id="expense-title" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)}/>
          <label htmlFor="expense-amount">Amount <br /> (negative - expense, positive - income)</label>
          <input type="number" id="expense-amount" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)}/>
          <button className="btn">Add transaction</button>
        </form>
    </>
  )
}

export default AddTransaction
