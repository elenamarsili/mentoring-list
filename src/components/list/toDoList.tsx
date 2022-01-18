import { ToDo } from "./toDo"
import React, { useState } from 'react';

export const ToDoList = ({toDoList}) => {

    const [newTask, setNewTask] = useState('')

    return (
        <div>
            <ul>
                {toDoList.map(todo => {
                    return (
                        <ToDo todo={todo} />
                    )
                })}
            </ul>

            <form>
                <input value={newTask} type="text" placeholder="Enter new task..."/>
                <button>Submit</button>  
            </form>
        </div>
    )
}