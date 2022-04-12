import { List, Task } from "../../types"
import { ToDoItem, DeleteButton, EditButton, ToDoInput, TaskButtons } from "./toDo.styles";
import React, { useState } from 'react';
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { useDispatchListsContext } from '../../contexts/ListsContext';

type Props = {todo: Task; toDoList: List}

export const ToDo = ({todo, toDoList}: Props) => {
    const dispatch = useDispatchListsContext()

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
        dispatch({type: 'edit-task', id: toDoList.id, editedTask: task, taskId: todo.id})
    }

    const onDelete = () => {
        const toRemove = todo
        window.confirm('Are you sure you want to delete this item?') 
        && dispatch({type: 'delete-task-from-list', id: toDoList.id, taskToRemove: toRemove })
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

