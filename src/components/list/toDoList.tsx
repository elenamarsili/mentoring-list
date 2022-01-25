import { ToDo } from "./toDo"
import React, { useState } from 'react';
import { List, Task } from "../../types";

type Props = { toDoList: List; setToDoList: React.Dispatch<React.SetStateAction<List>> }

export const ToDoList = ({ toDoList, setToDoList }: Props) => {

    const [newTask, setNewTask] = useState<string>('')

    const onFillInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const task: string = e.target.value
        setNewTask(task)
    }

    const onSubmit = () => {
        const task: Task = {
            id: toDoList.length+1,
            task: newTask
        }
        setToDoList(toDoList.concat(task));
        setNewTask('')
    }

    const onEnter= (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }


    return (
        <div>
            <ul>
                {toDoList.map(todo => {
                    return (
                        <ToDo key={todo.id} todo={todo} />
                    )
                })}
            </ul>

            <input value={newTask} onChange={(e) => { onFillInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onEnter(e) }}/>
            <button onClick={() => { onSubmit() }} disabled={ newTask.trim() === ''} >Submit</button>
        </div>
    )
}