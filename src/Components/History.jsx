import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Context'
import { ACTIONS } from '../Context/Reducer'

const History = () => {
  const {state:{transactions}, dispatch} = useContext(GlobalContext)
  const handleDeleteHistory = (id) => {
    return dispatch({
      type: ACTIONS.DELETE_HISTORY,
      payload:id
    })
  }
  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction)=>{
            return (
              <li className={transaction.amount<0?'minus':'plus'} key={transaction.id}>
                {transaction.text}
                <span>{transaction.date}</span> 
                <span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span>
                <button className='delete-btn' onClick={()=>handleDeleteHistory(transaction.id)}>x</button>
              </li>
            )
          })}
        </ul>
    </>
  )
}

export default History