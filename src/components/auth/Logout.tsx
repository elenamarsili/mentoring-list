import { useSetUserContext, useUserContext } from "../../contexts/AuthContext";
import { LogoutButton } from "./auth.styles";

function Logout() {
    const setUser = useSetUserContext() 

    const logout = () => {
        setUser({email: "", name: "", password: ""});
        document.title = `My Lists`
      }

    return (
        <LogoutButton onClick={() => { logout() }}>Logout</LogoutButton>
    );
  }
  
  export default Logout;