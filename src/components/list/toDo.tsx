import { List, Lists, Task } from "../../types"
import { ToDoItem, DeleteButton } from "./toDo.styles";

type Props = {todo: Task; toDoList: List; setMyLists: React.Dispatch<React.SetStateAction<Lists>>}

export const ToDo = ({todo, toDoList, setMyLists}: Props) => {
    
    const onDelete = () => {
        const toRemove = todo
        setMyLists(myLists => (
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
                {todo.task}
                <DeleteButton onClick={() => { onDelete() }}>X</DeleteButton>
            </ToDoItem>
        )
}

