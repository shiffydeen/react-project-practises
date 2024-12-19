import React from 'react'

const Transaction = ({text, amount}) => {
  return (
    <>
        <li className={`${amount < 0 ? "expense" : "income"}`}>{text} <span>{amount}</span></li>
    </>
  )
}

export default Transaction
