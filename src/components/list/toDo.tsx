import { List, Task } from "../../types"
import { ToDoItem, DeleteButton } from "./toDo.styles";

type Props = {todo: Task; toDoList: List; setToDoList: React.Dispatch<React.SetStateAction<List>>}

export const ToDo = ({todo, toDoList, setToDoList }: Props) => {
    
    const onDelete = () => {
        const toRemove = todo
        setToDoList(toDoList.filter((item) => {
            return item !== toRemove
        }));
    }

        return (
            <ToDoItem>
                {todo.task}
                <DeleteButton onClick={() => { onDelete() }}>X</DeleteButton>
            </ToDoItem>
        )
}

