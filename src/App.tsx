import { ToDoList } from "./components/list/toDoList";
import React, { useState } from 'react';

import { List, Lists } from "./types";
import { AddListButton, ListItem, ListTitle } from "./components/list/toDo.styles";

function App() {
  /* const [myLists, setMyLists] = useState<Lists>([]); */
  const [toDoList, setToDoList] = useState<List>([]); //toDoList es inmutable la funcion sirve a actualizarla

/*   const onAddList = () => {
    const newToDoList: List = {
            title: 'New List',
            tasks: []
        }
    setMyLists(myLists.concat(newToDoList));
} */

  return (
/*     <div>
      <ListTitle>My Lists</ListTitle>
      {myLists.map(list => {
          return (
            <ListItem className="App">
              <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
            </ListItem>
          )
      })}
      <AddListButton onClick={() => { onAddList() }}>+</AddListButton>
    </div> */
    <div>
      <ListTitle>My Lists</ListTitle>
      <ListItem className="App">
        <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
      </ListItem>
    </div>

  );
}

export default App;
