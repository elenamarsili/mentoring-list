import { ToDo } from "./toDo"
import React, { useState } from 'react';
import { List, Task } from "../../types";

type Props = {toDoList: List}

export const ToDoList = ({toDoList}: Props) => {

    const [newTask, setNewTask] = useState<string>('')

    const onFillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const task : string = e.target.value
        setNewTask(task)
    }

    const onSubmit = () => {
        const task : Task = {
            id: toDoList.length,
            task: newTask
        }
        toDoList.push(task)
    }

    return (
        <div>
            <ul>
                {toDoList.map(todo => {
                    return (
                        <ToDo key={todo.id} todo={todo} />
                    )
                })}
            </ul>

            <form>
                <input value={newTask} onChange={(e) => {onFillInput(e)}} type="text" placeholder="Enter new task..."/>
                <button onClick={()=>{onSubmit()}}>Submit</button>  
            </form>
        </div>
    )
}