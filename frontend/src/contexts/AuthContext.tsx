import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types";

type Props = { children: ReactNode}

const AuthContext = createContext<{user: User, setUser: React.Dispatch<React.SetStateAction<User>>}>({user: { email: '', password: ''}, setUser: ()=> {}})

export const AuthContextProvider = (props: Props) => {
    const [user, setUser] = useState<User>({ email: '', password: ''})
  
    return (
        <AuthContext.Provider value={{user, setUser}}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(AuthContext)
    return context.user
}

export const useSetUserContext = () => {
    const context = useContext(AuthContext)
    return context.setUser
} 