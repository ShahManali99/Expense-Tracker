import React, { useContext, useState } from 'react'
import { GlobalContext } from '../Context/Context'
import { ACTIONS } from '../Context/Reducer'

const AddTransaction = () => {
    const [label, setLabel] = useState('')
    const [amount, setAmount] = useState(0)
    const [selectedOption, setSelectedOption] = useState('expense')
    const [date, setDate] = useState('')
    const [error, setError] = useState('')
    const {dispatch} = useContext(GlobalContext)

    const handleAddTransactionBtn = (transaction) => {
      if (!transaction.text || !transaction.amount || !transaction.date) {
        console.log(transaction.label)
        console.log(transaction.amount)
        console.log(transaction.date)
        setError('Please fill in all fields.')
        return
      }
      setError('')
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
      <div className="add-transaction-container">
        <input type="text" value={label} onChange={(e)=>{
                setLabel(e.target.value)}
                } placeholder="Enter text..." />
        <input type="number" value={amount} onChange={(e)=>{
                setAmount(e.target.value)}
                } placeholder="Enter amount..." />
        <div className="radio-box">
          <div>
            <input type="radio" value='expense' checked={selectedOption==='expense'} onChange={(e)=>setSelectedOption(e.target.value)}/>
            <label htmlFor="expense">Expense</label>
          </div>
          <div>
            <input type="radio" value='income' checked={selectedOption==='income'} onChange={(e)=>setSelectedOption(e.target.value)} />
            <label htmlFor="Expense">Income</label>
          </div>
        </div>
        <input type="date" value={date} onChange={(e)=>{
              setDate(e.target.value)}
              } placeholder="Enter date..."/>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <button className="btn" onClick={()=>{
          handleAddTransactionBtn({
            id:crypto.randomUUID(),
            text:label, 
            amount:+amount*(selectedOption === 'expense'?-1:1), 
            date: date})}
          }>Add transaction</button>
      </div>
    </>
  )
}

export default AddTransaction