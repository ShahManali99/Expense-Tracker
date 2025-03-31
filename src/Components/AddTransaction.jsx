import React, { useState } from 'react'

const AddTransaction = () => {
    const [label, setLabel] = useState('')
    const [amount, setAmount] = useState(0)

    const handleAddTransactionBtn = () => {
        
    }

  return (
    <>
    <h3>Add new transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={label} onChange={(e)=>{setLabel(e.target.value)}} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label>
          <input type="number" value={amount} onChange={(e)=>{setAmount(e.target.value)}} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={()=>{handleAddTransactionBtn()}}>Add transaction</button>
      </form>
    </>
  )
}

export default AddTransaction