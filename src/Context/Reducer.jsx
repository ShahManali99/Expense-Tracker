export const ACTIONS = {
    DELETE_HISTORY: 'delete-history',
    ADD_TRANSACTION: 'add-transaction'
}
export const Reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.DELETE_HISTORY:
            return {...state, transactions: state.transactions.filter(transaction=>transaction.id !== action.payload)}
        case ACTIONS.ADD_TRANSACTION:
            return {
                ...state,
                transactions:[action.payload, ...state.transactions]
            }
        default:
            return {...state};
    }
}