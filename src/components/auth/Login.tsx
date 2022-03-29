import { useState } from "react";
import { useSetUserContext } from "../../contexts/AuthContext";


function Login() {
    const setUser = useSetUserContext() 
        
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onSubmit = () => {
        setUser({email , password})
    };


    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const email = e.target.value
        setEmail(email)
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const password = e.target.value
        setPassword(password)
    }

    return (
      <div> 
        <input type="email" value={email} onChange={(e) => onChangeEmail(e)}/>  

        <input type="password" value={password} onChange={(e) => onChangePassword(e)}/>  

        <button onClick={onSubmit}>Login</button>
      </div>
    );
  }
  
  export default Login;