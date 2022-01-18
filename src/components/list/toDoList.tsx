import { ToDo } from "./toDo"
import React, { useState } from 'react';
import { List } from "../../types";

type Props = {toDoList: List}

export const ToDoList = ({toDoList}: Props) => {

    const [newTask, setNewTask] = useState<string>('')

    const onFillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const task : string = e.target.value
        setNewTask(task)
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
                <button>Submit</button>  
            </form>
        </div>
    )
}