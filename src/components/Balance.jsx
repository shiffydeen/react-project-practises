import React, {useState, useContext} from 'react';
import { GlobalStates } from '../context/GlobalStates';



const Balance = () => {

    const {transactions} = useContext(GlobalStates);
    
    // console.log(transactions)

    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((acc, curr) => acc += curr, 0);

    // console.log(amount);
    // console.log(total);
    
    return (
        <>
            <h4>YOUR BALANCE</h4>
            <h1>${total}</h1>
        </>
    )
}

export default Balance
