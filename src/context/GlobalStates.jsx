import React, {useState, createContext} from 'react'



export const GlobalStates = createContext();

export const GlobalStatesProvider = ({children}) => {

    const allTransactions = [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
      ]

    const [transactions, setTransactions] = useState(allTransactions)
    
    
    const addTransac = (item) => {
        setTransactions(...transactions, 
            item
        )
    }

  return (
    <GlobalStates.Provider value={{transactions, addTransac}}>
        {children}
    </GlobalStates.Provider>
  )
}


