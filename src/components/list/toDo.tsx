import { Task } from "../../types"
import { ToDoItem } from "./toDo.styles";
type Props = {todo: Task}
export const ToDo = ({todo}: Props) => {

    return (
        <ToDoItem>
            {todo.task}
        </ToDoItem>
    )
}