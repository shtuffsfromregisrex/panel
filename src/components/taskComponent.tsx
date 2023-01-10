import React, { type  FC } from "react";

interface TaskProps {
    id: number,
    task: string
}



const TaskComponent: FC<TaskProps> = ({ id, task }: TaskProps) => {

    const taskDueHandler = () => {
        console.log(id)
    }
    return (
        <div className="p-4 hover:bg-neutral-900 bg-opacity-5 border rounded-md border-neutral-800" onDrag={taskDueHandler}>
            <span>{task} </span>
        </div>
    )
}


export default TaskComponent