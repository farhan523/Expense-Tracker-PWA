import React, { FC, useContext } from 'react'
import { globalcontext } from '../globalState/globalReducer'

const History: FC = () => {
    let contextvalue = useContext(globalcontext);

    return (
        <div className="history">
            <h3>History</h3>
            <ul>
                {contextvalue?.initialState.map((item) => { return <li key={item.id} className={parseInt(item.prize as string) < 0 ? 'red' : 'green'} >{item.details} <span>{Math.abs(parseInt(item.prize as string))}  <button onClick={() => { contextvalue?.deleteTransaction(item.id as number) }}>X</button></span> </li> })}
                {/* <li className="green">32323 <span>+$3045520172<button>X</button></span></li>
                <li className="green">32323 <span>+$3045520172<button>X</button></span></li>
                <li className="green">32323 <span>+$3045520172<button>X</button></span></li> */}
            </ul>
        </div>
    )
}

export default History
