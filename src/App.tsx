import { ToDoList } from "./components/list/toDoList";
import React, { useState } from 'react';

import { Lists } from "./types";
import { AddListButton, ListItem, ListTitle } from "./components/list/toDo.styles";

function App() {
  const [myLists, setMyLists] = useState<Lists>([]);
  
  const onAddList = () => {
    setMyLists(myLists.concat({id: `${Date.now()}`,title: 'NewList', tasks: []}))
}
 
console.log(myLists)

  return (
    <div>
      <ListTitle>My Lists</ListTitle>
      {myLists.map(list => {
          return (
            <ListItem className="App">
              <ToDoList toDoList={list} setMyLists={setMyLists} />
            </ListItem>
          )
      })}
      <AddListButton onClick={() => { onAddList() }}>+</AddListButton>
    </div>
  );
}

export default App;
