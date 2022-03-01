import Lists from './components/list/Lists';
import { MyListsProvider } from './contexts/ListsContext';

function App() {

  return (
    <div>
      <MyListsProvider>
          <Lists/>
      </MyListsProvider>
    </div>
  );
}

export default App;
