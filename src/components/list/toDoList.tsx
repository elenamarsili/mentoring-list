import { ToDo } from "./toDo"
import React, { useState } from 'react';
import { List, Task } from "../../types";
import { ToDoInput, AddButton, AddItemsParagraph, ListTitle, Title, EditButton, TitleInput } from "./toDo.styles";

type Props = { toDoList: List; setToDoList: React.Dispatch<React.SetStateAction<List>> }

export const ToDoList = ({ toDoList, setToDoList }: Props) => {

    const [newTask, setNewTask] = useState<string>('')

    const [editTitle, setEditTitle] = useState<boolean>(false)

    const [title, setTitle] = useState<string>('New List')

    const onFillTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const task: string = e.target.value
        setNewTask(task)
    }
    
    const onFillTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title: string = e.target.value
        setTitle(title)
    }
    const onEdit = () => {
        if (title.trim() !== '') {
            setEditTitle(!editTitle)
        }
    }

    const onSubmit = () => {
        if (newTask.trim() !== ''){
            const task: Task = {
                id: toDoList.length+1,
                task: newTask
            }
            setToDoList(toDoList.concat(task));
            setNewTask('')
        }
    }

    const onEnter= (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }

    const onTitleEnter= (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onEdit()
        }
    }

    return (
        <>
            <Title>
                { editTitle ? (
                                    <TitleInput value={title} onChange={(e) => { onFillTitleInput(e) }} type="text" placeholder="Enter new title..." onKeyPress={(e) => { onTitleEnter(e) }}/>
                                )
                            : (
                                <>
                                    <ListTitle>{title}</ListTitle>
                                    <EditButton onClick={() => { onEdit() }}>Edit</EditButton>
                                </>
                                
                            )}
            </Title>
            <div>
                {toDoList.length >= 1 ? (
                                        <>
                                            {toDoList.map(todo => {
                                                return (
                                                    <ToDo key={todo.id} todo={todo} toDoList={toDoList} setToDoList={setToDoList}/>
                                                )
                                            })}
                                        </>
                                        ) 
                                        : (
                                            <AddItemsParagraph>Add new items to the list</AddItemsParagraph>
                                        )}
            </div>
            <ToDoInput value={newTask} onChange={(e) => { onFillTaskInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onEnter(e) }}/>
            <AddButton onClick={() => { onSubmit() }} disabled={ newTask.trim() === ''} >Submit</AddButton>
        </>
    )  
}

/* const onFillTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title: string = e.target.value
    setToDoList(toDoList => ({
        ...toDoList,
        title
    }))
}

const onEdit = () => {
    setEditTitle(!editTitle)
}
const onTitleEnter= (e: React.KeyboardEvent<HTMLInputElement>, event:React.ChangeEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && title.trim() !== '') {
        onTitleSubmit(event)
    }
}
const onTitleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title: string = e.target.value
    setToDoList(toDoList => ({
        ...toDoList,
        title
    }));
    setEditTitle(false)
}

const onFillTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const task: string = e.target.value
    setNewTask(task)
}
const onEnter= (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && newTask.trim() !== '') {
        onTaskSubmit()
    }
}

const onTaskSubmit = () => {
    const task: Task = {
        id: toDoList.tasks.length+1,
        task: newTask
    }

    setToDoList(toDoList => ({
        ...toDoList,
        tasks: toDoList.tasks.concat(task)
    }))
    setNewTask('')
} */