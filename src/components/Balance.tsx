import React, { FC, useContext } from 'react'
import { globalcontext } from '../globalState/globalReducer'

const Balance: FC = () => {
    let contextvalue = useContext(globalcontext);
    let balance: number[] | undefined = []
    balance = contextvalue?.initialState.map((item) => { return parseInt(item.prize as string) })
    console.log(balance)

    return (
        <div>
            <h4>Your Balance</h4>
            <h5>$ {balance?.reduce((previousValue, currentValue) => {
                return previousValue + currentValue
            }, 0)}</h5>
        </div>
    )
}

export default Balance
