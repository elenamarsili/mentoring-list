import { ToDoList } from "./components/list/toDoList";
import React, { useState } from 'react';
import list from "./list.json";
import { List } from "./types";


function App() {

  const [toDoList, setToDoList] = useState<List>(list); //toDoList es inmutable la funcion sirve a actualizarla

  return (
    <div className="App">
      <h1>To do List</h1>
      <ToDoList toDoList={toDoList} setToDoList={setToDoList} />
    </div>
  );
}

export default App;
