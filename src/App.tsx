import { ToDoList } from "./components/list/toDoList";
import React, { useState } from 'react';

import { Lists } from "./types";
import { AddListButton, ListItem, ListContainer, Button, ListsTitle, } from "./components/list/toDo.styles";

function App() {
  const [myLists, setMyLists] = useState<Lists>([]);
  
  const onAddList = () => {
    setMyLists(myLists.concat({id: `${Date.now()}`,title: 'New List', tasks: []}))
}
 
console.log(myLists)

  return (
    <div>
      <ListsTitle>My Lists</ListsTitle>
        <ListContainer>
          {myLists.map(list => {
            return (
              <ListItem className="App">
                <ToDoList toDoList={list} setMyLists={setMyLists} />
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

export default App;
