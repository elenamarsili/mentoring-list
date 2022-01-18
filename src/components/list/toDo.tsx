export const ToDo = ({todo}) => {

    return (
        <li key={todo.id}>
            {todo.task}
        </li>
    )
}