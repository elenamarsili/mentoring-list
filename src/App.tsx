import Lists from './components/list/Lists';
import Login from './components/auth/Login';
import { useUserContext } from './contexts/AuthContext';
import { MyListsProvider } from './contexts/ListsContext';

function App() {
  const { email, password } = useUserContext()

  if (email==="" || password===""){
    return(
      <Login />
    )
  } 
  return (
    <MyListsProvider>
      <Lists/>
    </MyListsProvider>
  )
}

export default App;
