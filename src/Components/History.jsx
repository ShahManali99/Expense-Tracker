import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Context'

const History = () => {
  const {state:{transactions}} = useContext(GlobalContext)
  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map((transaction)=>{
            return (
              <li className={transaction.amount<0?'minus':'plus'} key={transaction.id}>
                {transaction.text} <span>{transaction.amount<0?'-':'+'}${Math.abs(transaction.amount)}</span><button className='delete-btn'>x</button>
              </li>
            )
          })}
        </ul>
    </>
  )
}

export default History