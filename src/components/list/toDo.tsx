import { Task } from "../../types"

type Props = {todo: Task}
export const ToDo = ({todo}: Props) => {

    return (
        <li>
            {todo.task}
        </li>
    )
}