import { useState } from "react";
import { useSetUserContext } from "../../contexts/AuthContext";
import { LoginBox, LoginButton, LoginInput, LoginTitle } from "./auth.styles";



function Login() {
    const setUser = useSetUserContext() 
        
    const [email, setEmail] = useState<string>("")
    const [name, setName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onSubmit = () => {
        setUser({email , name, password})
        document.title = `Welcome ${email}`
    };


    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const email = e.target.value
        setEmail(email)
    }

    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const name = e.target.value
      setName(name)
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const password = e.target.value
        setPassword(password)
    }

    return (
      <LoginBox> 
          <LoginTitle>My Lists</LoginTitle>
          <LoginInput type="email" name="email" value={email} placeholder="Email" onChange={(e) => onChangeEmail(e)}/>
          <LoginInput type="name" name="name" value={name} placeholder="Username" onChange={(e) => onChangeName(e)}/> 
          <LoginInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => onChangePassword(e)}/>  
        <LoginButton onClick={onSubmit}>
          Login
        </LoginButton>
      </LoginBox>
    );
  }
  
  export default Login;