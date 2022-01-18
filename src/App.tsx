import { ToDoList } from "./components/list/toDoList";
import React, { useState } from 'react';
import list from "./list.json";
import { List } from "./types";


function App() {

  const [toDoList, setToDoList] = useState<List>(list);

  return (
    <div className="App">
      <h1>To do List</h1>
      <ToDoList toDoList={toDoList} />
    </div>
  );
}

export default App;
