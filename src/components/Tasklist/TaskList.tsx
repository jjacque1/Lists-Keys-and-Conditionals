import React from "react";
import { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList(props: TaskListProps) {

  const tasks = props.tasks;
  const onStatusChange = props.onStatusChange;
  const onDelete = props.onDelete;

   if (tasks.length === 0) {
      return <p>No tasks to show.</p>;
    }
}
