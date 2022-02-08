export type Lists = Array<List>

/* export type List = {
    title: string;
    tasks: Array<Task>;
} */

export type Task = {
                id: number;
                task: string;
            }


export type List = Array<Task>