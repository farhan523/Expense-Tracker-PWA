import React, { FC, useContext, useState } from 'react'
import { globalcontext } from '../globalState/globalReducer'

const Form: FC = () => {
    let contextvalue = useContext(globalcontext);
    let [details, setDetails] = useState<string>('')
    let [amount, setAmount] = useState<string>('')

    function submit(e: React.SyntheticEvent) {
        e.preventDefault();
        let id: number = Math.floor(Math.random() * 10000000)
        contextvalue?.addTransaction(details, amount, id)
    }
    return (
        <div className="form">
            <h3>Add New Transection</h3>
            <hr />
            <form onSubmit={submit}>
                <label htmlFor="text">Enter text</label>
                <input type="text" value={details} onChange={(e) => { setDetails(e.currentTarget.value) }} placeholder="Enter text...." id="text"></input>
                <label htmlFor="text">Amount <br /> (negative-expense,positive incm</label>
                <input type="number" value={amount} onChange={(e) => { setAmount(e.currentTarget.value) }} placeholder="Enter Amount" id="text"></input>
                <input type="submit" ></input>
            </form>
        </div>
    )
}

export default Form
