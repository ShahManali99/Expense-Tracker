import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/Context'
import AddTransaction from './AddTransaction'

const Balance = () => {
  const [showAddTxnBtn, setShowAddTxnBtn] = useState(true)
  const {state:{transactions}} = useContext(GlobalContext)
  const amount = transactions.map((transaction)=>transaction.amount)
  const total = amount.reduce((acc, item)=>acc+=item,0).toFixed(2)
  return (
    <>
        <div className='balance'>
          <div>
            <h4>Your Balance</h4>
            <h1>${total}</h1>
          </div>
          <span><button className='addCancelBtn' onClick={()=>setShowAddTxnBtn(!showAddTxnBtn)}>{showAddTxnBtn?'ADD':'Cancel'}</button></span>
        </div>
        {!showAddTxnBtn && <AddTransaction setShowAddTxnBtn={setShowAddTxnBtn}/>}
    </>
  )
}

export default Balance