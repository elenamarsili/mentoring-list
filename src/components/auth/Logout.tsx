import { useSetUserContext } from "../../contexts/AuthContext";
import { LogoutButton } from "./auth.styles";

function Logout() {
    const setUser = useSetUserContext() 

    const logout = () => {
        setUser({email: "", password: ""});
      }

    return (
        <LogoutButton onClick={() => { logout() }}>Logout</LogoutButton>
    );
  }
  
  export default Logout;