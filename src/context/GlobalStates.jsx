import React, {useState, createContext, useReducer} from 'react';
import reducer from './reducer';

const allTransactions = [
  { id: 1, text: 'Flower', amount: -20 },
  { id: 2, text: 'Salary', amount: 300 },
  { id: 3, text: 'Book', amount: -10 },
  { id: 4, text: 'Camera', amount: 150 }
]

export const GlobalStates = createContext();

export const GlobalStatesProvider = ({children}) => {

  
    // const [transactions, setTransactions] = useState(allTransactions)

    const [transactions, dispatch] = useReducer(reducer, allTransactions)
    
    const addTransac = (newTrans) => {
        dispatch({
          type: 'ADD_TRANSACTION',
          payload: newTrans
        })
    }

    const delTransac = (id) => {
      dispatch({
        type: 'DEL_TRANSACTION',
        payload: id
      })
    }

  return (
    <GlobalStates.Provider value={{transactions, addTransac, delTransac}}>
        {children}
    </GlobalStates.Provider>
  )
}


