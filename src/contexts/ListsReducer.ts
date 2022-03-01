import { List, Lists, Task } from "../types"

type State = Lists

export type Action = {
    type: 'new-list' | 'list-title-update' | 'add-task-to-list' | 'delete-list' | 'edit-task' | 'delete-task-from-list';
    title?: string;
    id?: string;
    task?: Task;
    taskId?: string;
    editedTask?: string;
    taskToRemove?: Task;
}


export const reducer = (currentState: State, action: Action): State=> {
    switch(action.type) {
        case 'new-list': {
            return currentState.concat({id: `${Date.now()}`,title: 'New List', tasks: []})
        }
        case 'list-title-update': {
            if (!action.id) return currentState;
            if (!action.title) return currentState;

            const updatedList = currentState.map((list)=>{
                if (list.id === action.id) {
                    return {
                        ...list,
                        title: action.title!
                    }
                } 
                return list
            });
            return [...updatedList]
        }
        case 'add-task-to-list': {
            const {id, task} = action;
            if (!id) return currentState;
            if (!task) return currentState;

            const updatedList = currentState.map((list)=>{
                if (list.id === id) {
                    return {
                        ...list,
                        tasks : list.tasks.concat(task)
                    }
                } 
                return list
            });
            return [...updatedList]
        }
        case 'delete-list': {
            return currentState.filter((list)=> list.id !== action.id)
        }
        case 'edit-task': {
            const {id, taskId, editedTask} = action;
            if (!id) return currentState;
            if (!taskId) return currentState;
            if (!editedTask) return currentState;

            const updatedLists = currentState.map((list)=>{
                if (list.id === id) {
                    const updatedList : List = {
                        ...list,
                        tasks: list.tasks.map((t) => {
                            if (t.id === taskId) {
                                return {
                                    ...t,
                                    task: editedTask
                                } as Task
                            } else {
                                return t
                            }
                        })
                    }
                    return updatedList
                } 
                return list
            });
            return [...updatedLists]
        }
        case 'delete-task-from-list': {
            if (!action.id) return currentState;
            if (!action.taskToRemove) return currentState;

            const updatedLists = currentState.map((list)=>{
                if (list.id === action.id) {
                    return {
                        ...list,
                        tasks: list.tasks.filter((item) => {
                            return item !== action.taskToRemove
                        })
                    }
                } 
                return list
            })
            return [...updatedLists]
        }
        default:
            return currentState;
    }
}


