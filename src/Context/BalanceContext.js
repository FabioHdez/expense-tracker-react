import React, {createContext, useReducer} from 'react'

const initialState = {
    transactions:[]
}


export const BalanceContext = createContext(initialState);

// REDUCER FUNCTION FOR THE useReducer HOOK
function transactionReducer(state,action){
    switch(action.type){
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'EDIT_TRANSACTION':
            const newTransactionList = state.transactions.filter(transaction => transaction.id !== action.payload.id)
                return {
                    ...state,
                    transactions: [action.payload, ...newTransactionList]
                }
        default:
            return state
    }
}

export const BalanceProvider = ({children}) => {
    const [transactions, dispatch] = useReducer(transactionReducer,initialState)
    // functions
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }
    function deleteTransaction(transactionId){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: transactionId
        })
    }
    function editTransaction(transaction){
        dispatch({
            type:'EDIT_TRANSACTION',
            payload: transaction
        })
    }
    return(
        <BalanceContext.Provider value={{
            transactions: transactions.transactions,
            addTransaction,
            deleteTransaction,
            editTransaction
            }}>
            {children}
        </BalanceContext.Provider>
    )
}

