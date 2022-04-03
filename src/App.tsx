import Lists from './components/list/Lists';
import Login from './components/auth/Login';
import { useUserContext } from './contexts/AuthContext';
import { MyListsProvider } from './contexts/ListsContext';
import { useEffect } from 'react';

function App() {
  const { email, password, name } = useUserContext()

  useEffect(() => {
    if (email==="" || password==="" || name==="" ){
    document.title = `My Lists`
    } else {
      document.title = `Welcome ${email}`
    }
  });

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
