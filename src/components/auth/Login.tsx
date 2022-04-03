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
    };

    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const newEmail = e.target.value
        setEmail(newEmail)
    }

    const onChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
      const newName = e.target.value
      setName(newName)
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const newPassword = e.target.value
        setPassword(newPassword)
    }

    const onLoginEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if ((email!=="" && password!=="" && name!=="" )){
        if (e.key === "Enter") {
            onSubmit()
        } 
      }
  }

    return (
      <LoginBox> 
          <LoginTitle>My Lists</LoginTitle>
          <LoginInput type="email" name="email" value={email} placeholder="Email" onChange={(e) => onChangeEmail(e)}  onKeyPress={(e) => { onLoginEnter(e) }}/>
          <LoginInput type="name" name="name" value={name} placeholder="Username" onChange={(e) => onChangeName(e)}  onKeyPress={(e) => { onLoginEnter(e) }}/> 
          <LoginInput type="password" name="password" value={password} placeholder="Password" onChange={(e) => onChangePassword(e)}  onKeyPress={(e) => { onLoginEnter(e) }}/>  
        <LoginButton onClick={onSubmit}>
          Login
        </LoginButton>
      </LoginBox>
    );
  }
  
  export default Login;