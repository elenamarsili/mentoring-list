import { useState } from "react";
import { useSetUserContext } from "../../contexts/AuthContext";
import { EyeIcon, LoginBox, LoginButton, LoginInput, LoginTitle, PassWrapper } from "./auth.styles";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Login() {
    const setUser = useSetUserContext() 
        
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const [passwordShown, setPasswordShown] = useState(false);
    
    const togglePasswordVisiblity = () => {
      setPasswordShown(passwordShown ? false : true);
    };

    const onSubmit = () => {
        setUser({email, password})
    };

    const onChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const newEmail = e.target.value
        setEmail(newEmail)
    }

    const onChangePassword = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const newPassword = e.target.value
        setPassword(newPassword)
    }

    const onLoginEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if ((email!=="" && password!=="")){
        if (e.key === "Enter") {
            onSubmit()
        }
      }
  }

    return (
      <LoginBox> 
          <form onSubmit={onSubmit}> 
            <LoginTitle>My Lists</LoginTitle>
              <LoginInput type="email" name="email" value={email} placeholder="Email" onChange={(e) => onChangeEmail(e)}  onKeyPress={(e) => { onLoginEnter(e) }}/>
            <PassWrapper>
              <LoginInput type={passwordShown ? "text" : "password"} name="password" value={password} placeholder="Password" onChange={(e) => onChangePassword(e)}  onKeyPress={(e) => { onLoginEnter(e) }}/>  
              <EyeIcon>{passwordShown ? <FaEyeSlash onClick={togglePasswordVisiblity}/> : <FaEye onClick={togglePasswordVisiblity}/>}</EyeIcon>
            </PassWrapper>
          <LoginButton>
            Login
          </LoginButton>
        </form>
      </LoginBox>
    );
  }
  
  export default Login;