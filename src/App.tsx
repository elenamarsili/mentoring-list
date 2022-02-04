import { ToDoList } from "./components/list/toDoList";
import React, { useState } from 'react';

import { List } from "./types";
import { ListItem, ListTitle } from "./components/list/toDo.styles";

function App() {

  const [toDoList, setToDoList] = useState<List>([]); //toDoList es inmutable la funcion sirve a actualizarla

  return (
    <ListItem className="App">
      <ListTitle>To do List</ListTitle>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </ListItem>
  );
}

export default App;
