export default (transactions, action) => {
    switch (action.type) {
        case 'ADD_TRANSACTION': 
            return [
                ...transactions,  action.payload
            ]
        case 'DEL_TRANSACTION':
            return transactions.filter(item => item.id !== action.payload)
    }

}