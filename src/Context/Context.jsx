import React, {useReducer, createContext} from "react";
import {Reducer} from './Reducer';

export const saveTransactionsToLocalStorage  = (transactions) => {
  localStorage.setItem('transactions',JSON.stringify(transactions))
}

//initial state
const initial_state = {
    transactions : JSON.parse(localStorage.getItem('transactions')) || []
}

//create context
export const GlobalContext = createContext(initial_state)

//provider component
const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer,initial_state)
  return (
    <>
        <GlobalContext.Provider value={{state, dispatch}}>{children}</GlobalContext.Provider>
    </>
  )
}

export default ContextProvider