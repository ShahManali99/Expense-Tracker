import React, { useContext, useEffect, useState } from 'react'
import { GlobalContext } from '../Context/Context'
import { ACTIONS } from '../Context/Reducer'

const History = () => {
  const [searchText, setSearchText] = useState('')
  const {state:{transactions}, dispatch} = useContext(GlobalContext)
  const handleDeleteHistory = (id) => {
    return dispatch({
      type: ACTIONS.DELETE_HISTORY,
      payload:id
    })
  }

  const filteredTransactions = [...transactions].filter((transaction)=>
      transaction.text.toLowerCase().includes(searchText.toLowerCase()) ||
      transaction.date.includes(searchText) ||
      transaction.amount.toString().includes(searchText)
    )
    .sort((a,b) => {
      return new Date(b.date) - new Date(a.date)
    })

    const formatAmount = (amount) => {
      const absAmount = Math.abs(amount);
      const sign = amount < 0 ? '-' : '+';
      if (absAmount >= 1000000) {
        return `${sign}$${(absAmount/1000000).toFixed(1)}M`; // $1000.0M
      }
      return `${sign}$${absAmount.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: absAmount % 1 === 0 ? 0 : 2
      })}`;

    };

  return (
    <>
        <h3>History</h3>
        <input type='text' placeholder='Search' className='search' value={searchText} onChange={(e)=>setSearchText(e.target.value)}/> 
        <ul className="list">
          {filteredTransactions.length > 0 ? filteredTransactions.map((transaction)=>{
            return (
              <li className={transaction.amount<0?'minus':'plus'} key={transaction.id}>
                {transaction.text}
                <span>{transaction.date}</span> 
                <span>{formatAmount(transaction.amount)}</span>
                <button className='delete-btn' onClick={()=>handleDeleteHistory(transaction.id)}>x</button>
              </li>
            )
          }):
          <p>No transactions found</p>}
        </ul>
    </>
  )
}

export default History