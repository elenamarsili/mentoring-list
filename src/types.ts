export type Lists = Array<List>

export type List = {
    id: string;
    title: string;
    tasks: Array<Task>;
} 

export type Task = {
                id: string;
                task: string;
            }
            
export type User = {
                email: string;
                password: string;
            }
