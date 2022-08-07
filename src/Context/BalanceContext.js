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
    return(
        <BalanceContext.Provider value={{
            transactions: transactions.transactions,
            addTransaction,
            }}>
            {children}
        </BalanceContext.Provider>
    )
}

