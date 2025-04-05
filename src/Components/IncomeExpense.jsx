import React, { useContext } from 'react'
import { GlobalContext } from '../Context/Context'

const IncomeExpense = () => {
  const {state: {transactions}} = useContext(GlobalContext)
  const amount = transactions.map(transaction=>transaction.amount)
  const income = amount.filter(item=>item>0)
                             .reduce((acc, item)=>(acc+=item),0)
  const expense = amount.filter(item=>item<0)
                              .reduce((acc, item)=>(acc+=item),0) * -1

  const formatAmount = (amount) => {
    const absAmount = Math.abs(amount);
    if (absAmount >= 1000000) {
      return `${(absAmount/1000000).toFixed(1)}M`; // $1000.0M
    }
    return `${absAmount.toLocaleString('en-US', {
      maximumFractionDigits: 2,
      minimumFractionDigits: absAmount % 1 === 0 ? 0 : 2
    })}`;

  };
  return (
    <>
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">{formatAmount(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">{formatAmount(expense)}</p>
            </div>
        </div>
    </>
  )
}

export default IncomeExpense