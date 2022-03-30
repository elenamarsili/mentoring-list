import Lists from './components/list/Lists';
import Login from './components/auth/Login';
import { useUserContext } from './contexts/AuthContext';
import { MyListsProvider } from './contexts/ListsContext';

function App() {
  const { email, password, name } = useUserContext()

  if (email==="" || password==="" || name==="" ){
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
