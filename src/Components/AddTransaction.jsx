import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/Context'
import { ACTIONS } from '../Context/Reducer'

const AddTransaction = () => {
    const [label, setLabel] = useState('')
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState('')
    const {dispatch} = useContext(GlobalContext)

    const handleAddTransactionBtn = (transaction) => {
        dispatch({
          type: ACTIONS.ADD_TRANSACTION,
          payload: transaction
        })
        setLabel('');
        setAmount(0);
        setDate('');
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
        <div className="form-control">
          <label htmlFor="date">Date</label>
          <input type="date" value={date} onChange={(e)=>{
              setDate(e.target.value)}
              } placeholder="Enter date..."/>
        </div>
        <button className="btn" onClick={()=>{
          handleAddTransactionBtn({id:crypto.randomUUID(),text:label, amount:+amount, date: date})}
          }>Add transaction</button>
    </>
  )
}

export default AddTransaction