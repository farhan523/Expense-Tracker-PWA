import React, { FC, useContext } from 'react'
import { globalcontext } from '../globalState/globalReducer'

const IncomeExpense: FC = () => {

    let contextvalue = useContext(globalcontext);

    let expense = contextvalue?.initialState.filter((item) => { return parseInt(item.prize as string) < 1 })
    let expenseAmount = expense?.map((item) => { return parseInt(item.prize as string) })

    let income = contextvalue?.initialState.filter((item) => { return parseInt(item.prize as string) > 1 })
    let incomeAmount = income?.map((item) => { return parseInt(item.prize as string) })

    return (
        <div className="IE">
            <div className="left"><p>INCOME</p><p id="income">{incomeAmount?.reduce((previousValue, currentValue) => {
                return previousValue + Math.abs(currentValue)
            }, 0)} </p></div>
            <div className="right"><p>EXPENSES</p><p id="expense">{expenseAmount?.reduce((previousValue, currentValue) => {
                return previousValue + Math.abs(currentValue)
            }, 0)}</p></div>
        </div>
    )
}

export default IncomeExpense
