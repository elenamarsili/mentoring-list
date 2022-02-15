import { ToDoList } from "./components/list/toDoList";
import { AddListButton, ListItem, ListContainer, Button, ListsTitle, ConsoleButton, } from "./components/list/toDo.styles";
import { useMyListsContext, useSetMyListsContext } from './contexts/ListsContext';

function App() {
  const myLists = useMyListsContext()
  const setMyLists = useSetMyListsContext()
  
  const onAddList = () => {
    setMyLists(myLists.concat({id: `${Date.now()}`,title: 'New List', tasks: []}))
  }

  const onConsole = () => {
    console.log(myLists)
  }
 
  return (
    <div>
      <ListsTitle>My Lists</ListsTitle>
        <ListContainer>
          {myLists.map(list => {
            return (
              <ListItem key={list.id} className="App">
                <ToDoList toDoList={list} setMyLists={setMyLists} />
              </ListItem>
            )
          })}
        </ListContainer>
      <Button>
        <AddListButton onClick={() => { onAddList() }}>+</AddListButton>
      </Button>
      <Button>
        <ConsoleButton onClick={() => { onConsole() }}>console.log(myLists)</ConsoleButton>
      </Button>
      
    </div>
  );
}

export default App;
