import { List, Lists, Task } from "../../types"
import { ToDoItem, DeleteButton, EditButton, ToDoInput, TaskButtons } from "./toDo.styles";
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";

type Props = {todo: Task; toDoList: List; setMyLists: React.Dispatch<React.SetStateAction<Lists>>}

export const ToDo = ({todo, toDoList, setMyLists}: Props) => {
    
    const [editTask, setEdiTask] = useState<boolean>(false)
    const [task, setTask] = useState<string>(todo.task)

    const onEdit = () => {
        if (todo.task.trim() !== '') {
            setEdiTask(!editTask)
        }
    }
    const onFillTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTask: string = e.target.value
        setTask(newTask)
    }

    const onTaskEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onTaskSubmit()
        }
    }

    const onTaskSubmit = () => {
        onEdit()
        setMyLists(myLists => (
            myLists.map((list)=>{
                if (list.id === toDoList.id) {
                    return {
                        ...toDoList,
                        tasks: toDoList.tasks.map((t) => {
                            if (t.id === todo.id) {
                               return {
                                   ...todo,
                                   id: `${Date.now()}`,
                                   task
                               } 
                            } else {
                                return t
                            }
                        })
                    }
                } 
                return list
            })
        ))
    }

    const onDelete = () => {
        const toRemove = todo
        window.confirm('Are you sure you want to delete this item?') 
        && setMyLists(myLists => (
            myLists.map((list)=>{
                if (list.id === toDoList.id) {
                    return {
                        ...toDoList,
                        tasks: toDoList.tasks.filter((item) => {
                            return item !== toRemove
                        })
                    }
                } 
                return list
            })
        ))
    }

        return (
            <ToDoItem>
                {editTask ? (
                    <ToDoInput value={task} onChange={(e) => { onFillTaskInput(e) }} type="text" onBlur={() => {onTaskSubmit()}} onKeyPress={(e) => { onTaskEnter(e) }} />
                )
                    : (
                        <>
                            {task}
                            <TaskButtons>
                                <EditButton onClick={() => { onEdit() }}><FaEdit /></EditButton>
                                <DeleteButton onClick={() => { onDelete() }}><FaTrashAlt /></DeleteButton>
                            </TaskButtons>
                        </>

                    )}
            </ToDoItem>
        )
}

