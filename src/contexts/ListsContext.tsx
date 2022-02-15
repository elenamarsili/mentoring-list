import { createContext, ReactNode, useContext, useState } from "react";
import { Lists } from "../types";

type Props = { children: ReactNode}

const Context = createContext<{myLists: Lists, setMyLists: React.Dispatch<React.SetStateAction<Lists>>}>({myLists: [], setMyLists: ()=> {}})

export const MyListsProvider = (props: Props) => {
    const [myLists, setMyLists] = useState<Lists>([]);

    return (
        <Context.Provider value={{myLists, setMyLists}} >
            {props.children}
        </Context.Provider>
    )
}

export const useMyListsContext = () =>{
    const context = useContext(Context)
    return context.myLists
}

export const useSetMyListsContext = () =>{
    const context = useContext(Context)
    return context.setMyLists
}