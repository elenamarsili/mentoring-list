import { ToDo } from "./toDo"
import React, { useState } from 'react';
import { List, Task } from "../../types";
import { ToDoInput, AddButton, AddItemsParagraph, ListTitle, Title, EditButton, TitleInput } from "./toDo.styles";

type Props = { toDoList: List; setToDoList: React.Dispatch<React.SetStateAction<List>> }

export const ToDoList = ({ toDoList, setToDoList }: Props) => {

    const [newTask, setNewTask] = useState<string>('')

    const [editTitle, setEditTitle] = useState<boolean>(false)

    const [title, setTitle] = useState<string>('List name')

    const onFillTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const task: string = e.target.value
        setNewTask(task)
    }
    
    const onFillTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title: string = e.target.value
        setTitle(title)
    }
    const onEdit = () => {
        setEditTitle(!editTitle)
    }

    const onSubmit = () => {
        const task: Task = {
            id: toDoList.length+1,
            task: newTask
        }
        setToDoList(toDoList.concat(task));
        setNewTask('')
    }

    const onTitleSubmit = () => {
        const newTitle: string = title
        setTitle(newTitle);
        setEditTitle(false)
    }

    const onEnter= (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }

    const onTitleEnter= (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onTitleSubmit()
        }
    }

    if (!editTitle) {
        if (toDoList.length >= 1) {
            return (
                <div>
                    <Title>
                        <ListTitle>{title}</ListTitle>
                        <EditButton onClick={() => { onEdit() }}>Edit</EditButton>
                    </Title>
                    <div>
                        {toDoList.map(todo => {
                            return (
                                <ToDo key={todo.id} todo={todo} toDoList={toDoList} setToDoList={setToDoList}/>
                            )
                        })}
                    </div>
        
                    <ToDoInput value={newTask} onChange={(e) => { onFillTaskInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onTitleEnter(e) }}/>
                    <AddButton onClick={() => { onSubmit() }} disabled={ newTask.trim() === ''} >Submit</AddButton>
                </div>
            )
        } else {
            return (
                <div>
                    <Title>
                        <ListTitle>{title}</ListTitle>
                        <EditButton onClick={() => { onEdit() }}>Edit</EditButton>
                    </Title>
    
                    <div>
                        <AddItemsParagraph>Add new items to the list</AddItemsParagraph>
                    </div>
        
                    <ToDoInput value={newTask} onChange={(e) => { onFillTaskInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onEnter(e) }}/>
                    <AddButton onClick={() => { onSubmit() }} disabled={ newTask.trim() === ''} >Submit</AddButton>
                </div>
            )
        }
    } else {
        if (toDoList.length >= 1) {
            return (
                <div>
                    <Title>
                        <TitleInput value={title} onChange={(e) => { onFillTitleInput(e) }} type="text" placeholder="Enter new title..." onKeyPress={(e) => { onTitleEnter(e) }}/>
                    </Title>
                    <div>
                        {toDoList.map(todo => {
                            return (
                                <ToDo key={todo.id} todo={todo} toDoList={toDoList} setToDoList={setToDoList}/>
                            )
                        })}
                    </div>
        
                    <ToDoInput value={newTask} onChange={(e) => { onFillTaskInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onEnter(e) }}/>
                    <AddButton onClick={() => { onSubmit() }} disabled={ newTask.trim() === ''} >Submit</AddButton>
                </div>
            )
        } else {
            return (
                <div>
                    <Title>
                        <TitleInput value={title} onChange={(e) => { onFillTitleInput(e) }} type="text" placeholder="Enter new title..." onKeyPress={(e) => { onTitleEnter(e) }}/>
                    </Title>
    
                    <div>
                        <AddItemsParagraph>Add new items to the list</AddItemsParagraph>
                    </div>
        
                    <ToDoInput value={newTask} onChange={(e) => { onFillTaskInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onEnter(e) }}/>
                    <AddButton onClick={() => { onSubmit() }} disabled={ newTask.trim() === ''} >Submit</AddButton>
                </div>
            )
        }

    }
    
}