import { ToDo } from "./toDo"
import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import { List, Lists, Task } from "../../types";
import { ToDoInput, AddButton, AddItemsParagraph, ListTitle, Title, EditButton, TitleInput, DeleteListButton } from "./toDo.styles";

type Props = { toDoList: List; setMyLists: React.Dispatch<React.SetStateAction<Lists>> }

export const ToDoList = ({ toDoList, setMyLists }: Props) => {

    const [newTask, setNewTask] = useState<string>('')

    const [editTitle, setEditTitle] = useState<boolean>(false)

    const [title, setTitle] = useState<string>(toDoList.title)

    const onFillTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const task: string = e.target.value
        setNewTask(task)
    }

    const onFillTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const title: string = e.target.value
        setTitle(title)
    }

    const onTitleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onTitleSubmit()
        }
    }

    const onTitleSubmit = () => {
        onEdit()
            setMyLists(myLists => (
                myLists.map((list)=>{
                    if (list.id === toDoList.id) {
                        return {
                            ...toDoList,
                            title
                        }
                    } 
                    return list
                })
            ))
    }

    const onEdit = () => {
        if (title.trim() !== '') {
            setEditTitle(!editTitle)
        }
    }

    const onEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            onSubmit()
        }
    }

    const onSubmit = () => {
        if (newTask.trim() !== '') {
            const task: Task = {
                id: `${Date.now()}`,
                task: newTask
            }
            setMyLists(myLists => (
                myLists.map((list)=>{
                    if (list.id === toDoList.id) {
                        return {
                            ...toDoList,
                            tasks : toDoList.tasks.concat(task)
                        }
                    } 
                    return list
                })
            ))
            setNewTask('')
        }
    }

    const onDeleteList = () => {
        window.confirm('Are you sure you want to delete this list?') 
        && setMyLists(myLists => myLists.filter((list)=> list.id !== toDoList.id))
    }




    return (
        <>
            <Title>
                {editTitle ? (
                    <TitleInput value={title} onChange={(e) => { onFillTitleInput(e) }} type="text" placeholder="Enter new title..." onBlur={() => {onTitleSubmit()}} onKeyPress={(e) => { onTitleEnter(e) }} />
                )
                    : (
                        <>
                            <ListTitle>{title}</ListTitle>
                            <EditButton onClick={() => { onEdit() }}><FaEdit /></EditButton>
                        </>

                    )}
            </Title>
            <div>
                {toDoList.tasks.length >= 1 ? (
                    <>
                        {toDoList.tasks.map(todo => {
                            return (
                                <ToDo key={todo.id} todo={todo} toDoList={toDoList} setMyLists={setMyLists} />
                            )
                        })}
                    </>
                )
                    : (
                        <AddItemsParagraph>Add new items to the list</AddItemsParagraph>
                    )}
            </div>
            <ToDoInput value={newTask} onChange={(e) => { onFillTaskInput(e) }} type="text" placeholder="Enter new task..." onKeyPress={(e) => { onEnter(e) }} />
            <AddButton onClick={() => { onSubmit() }} disabled={newTask.trim() === ''} >Submit</AddButton>
            <DeleteListButton onClick={() => { onDeleteList() }} >Delete List</DeleteListButton>
        </>
    )
}
