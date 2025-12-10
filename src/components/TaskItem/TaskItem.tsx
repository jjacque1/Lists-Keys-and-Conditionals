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

  //======================================================================

  return (
    <div>
      <div className="task-wrapper">
        <h3>{task.title}</h3>

        <div>
          <select value={task.status} onChange={handleStatusChange}>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>

        <p>Due: {task.dueDate}</p>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}
