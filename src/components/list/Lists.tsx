import { ToDoList } from "./toDoList";
import { AddListButton, ListItem, ListContainer, Button, ListsTitle } from "./toDo.styles";
import { useMyListsContext, useDispatchListsContext } from '../../contexts/ListsContext';
import { useUserContext } from "../../contexts/AuthContext";
import Logout from "../auth/Logout";

function Lists() {
  const user = useUserContext()
  const myLists = useMyListsContext()
  const dispatch = useDispatchListsContext()  
  
  const onAddList = () => {
    dispatch({type: 'new-list'})
  }

  return (
    <div>
      <ListsTitle>{user.name}'s Lists</ListsTitle>
        <Logout />
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
    </div>
  );
}

export default Lists;
