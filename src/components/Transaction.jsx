import React, {useContext} from 'react';
import { GlobalStates } from '../context/GlobalStates';

const Transaction = ({text, amount, id}) => {

  const {delTransac} = useContext(GlobalStates)

  return (
    <>
        <li>
        <button className="delete-btn" onClick={() => delTransac(id)}>x</button>{text}<span className={amount < 0 ? "expense" : "income"}>{amount}</span>
        </li>
    </>
  )
}

export default Transaction
