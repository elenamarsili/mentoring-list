import { ToDoList } from "./toDoList";
import { AddListButton, ListItem, ListContainer, Button, ListsTitle } from "./toDo.styles";
import { useMyListsContext, useDispatchListsContext } from '../../contexts/ListsContext';

function Lists() {
  const myLists = useMyListsContext()
  const dispatch = useDispatchListsContext()  
  
  const onAddList = () => {
    dispatch({type: 'new-list'})
  }
  return (
    <div>
      <ListsTitle>My Lists</ListsTitle>
        <ListContainer>
          {myLists.map(list => {
            return (
              <ListItem key={list.id} className="App">
                <ToDoList toDoList={list}/>
              </ListItem>
            )
          })}
        </ListContainer>
      <Button>
        <AddListButton onClick={() => { onAddList() }}>+</AddListButton>
      </Button>
   
      <div>{JSON.stringify(myLists)}</div>
  
      
    </div>
  );
}

export default Lists;
