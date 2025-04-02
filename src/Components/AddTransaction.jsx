import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/Context'
import { ACTIONS } from '../Context/Reducer'

const AddTransaction = () => {
    const [label, setLabel] = useState('')
    const [amount, setAmount] = useState(0)
    const {dispatch} = useContext(GlobalContext)

    const handleAddTransactionBtn = (transaction) => {
        dispatch({
          type: ACTIONS.ADD_TRANSACTION,
          payload: transaction
        })
        setLabel('');
        setAmount(0);
    }

  return (
    <>
    <h3>Add new transaction</h3>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={label} onChange={(e)=>{
            setLabel(e.target.value)}
            } placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e)=>{
            setAmount(e.target.value)}
            } placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={()=>{
          handleAddTransactionBtn({id:crypto.randomUUID(),text:label, amount:+amount})}
          }>Add transaction</button>
    </>
  )
}

export default AddTransaction