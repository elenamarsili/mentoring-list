import { createContext, ReactNode, useContext, useReducer, useState } from "react";
import { Lists } from "../types";
import { reducer, Action } from "./ListsReducer";

type Props = { children: ReactNode}

const Context = createContext<{myLists: Lists, dispatch: React.Dispatch<Action>}>({myLists: [], dispatch: ()=> {}})

export const MyListsProvider = (props: Props) => {
    const [myLists, dispatch] = useReducer(reducer, [])

    return (
        <Context.Provider value={{myLists, dispatch}} >
            {props.children}
        </Context.Provider>
    )
}

export const useMyListsContext = () =>{
    const context = useContext(Context)
    return context.myLists
}

export const useDispatchListsContext = () =>{
    const context = useContext(Context)
    return context.dispatch
}