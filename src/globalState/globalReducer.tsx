import React, { FC, useReducer } from 'react'


type stateType = {
    details?: string;
    prize?: string;
    id?: number
}[]

type ActionType = {
    details?: string
    type?: string
    prize?: string
    id?: number
}

type contextType = {
    initialState: stateType
    deleteTransaction: any
    addTransaction: any
}




let initialState: stateType = []
// 

function reducer(state: stateType, action: ActionType): stateType {
    console.log(action);
    switch (action.type) {
        case 'ADD_DATA':
            return [...state, { details: action.details, prize: action.prize, id: action.id }]
        case 'DELETE_DATA':
            return [...state.filter((item) => { return item.id !== action.id })]
        default:
            return state
    }
}

export let globalcontext = React.createContext<contextType | undefined>(undefined)



let ContextProvider = globalcontext.Provider

const GlobalReducer: FC = ({ children }) => {

    let [state, dispatch] = useReducer(reducer, initialState)
    function addTransaction(details: string, prize: string, id: number): void {
        dispatch({
            type: 'ADD_DATA',
            details: details,
            prize: prize,
            id: id
        })
    }

    function deleteTransaction(id: number) {
        dispatch({
            type: 'DELETE_DATA',
            id: id
        })
    }
    return (
        <ContextProvider value={{ initialState: state, deleteTransaction, addTransaction }} >
            {children}
        </ContextProvider>
    )
}

export default GlobalReducer
