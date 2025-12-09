import React from "react";

import type { TaskItemProps, TaskStatus } from "../../types";

export function TaskItem({ task, onStatusChange, onDelete }: TaskItemProps) {

    function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
        const selectedValue = event.target.value;

        const newStaus: TaskStatus = selectedValue as TaskStatus;

        onStatusChange(task.id, newStaus);
    }

    function handleDelete() {
        onDelete(task.id);
    }

    return (
        <div>
            
        </div>
    )
}