import React, {useReducer, createContext} from "react";
import {Reducer} from './Reducer';

//initial state
const initial_state = {
    transactions : [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
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