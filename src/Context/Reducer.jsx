import { saveTransactionsToLocalStorage } from "./Context"

export const ACTIONS = {
    DELETE_HISTORY: 'delete-history',
    ADD_TRANSACTION: 'add-transaction'
}
export const Reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.DELETE_HISTORY:
            const deleteTransaction = state.transactions.filter(transaction=>transaction.id !== action.payload)
            saveTransactionsToLocalStorage(deleteTransaction)
            return {...state, transactions: deleteTransaction}
        case ACTIONS.ADD_TRANSACTION:
            const addTransaction = [action.payload, ...state.transactions]
            saveTransactionsToLocalStorage(addTransaction)
            return {
                ...state,
                transactions:addTransaction
            }
        default:
            return {...state};
    }
}