export interface Task {
    description: string,
    user?: UserTask,
    value: number
    
}

export interface UserTask {
    id: number
}
