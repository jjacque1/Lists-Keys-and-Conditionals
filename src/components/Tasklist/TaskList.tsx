import type { TaskListProps } from "../../types";
import { TaskItem } from "../TaskItem/TaskItem";

export function TaskList(props: TaskListProps) {

  const tasks = props.tasks;
  const onStatusChange = props.onStatusChange;
  const onDelete = props.onDelete;

   if (tasks.length === 0) {
      return <p>No tasks to show.</p>;
    }

 return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <TaskItem
            task={task}
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        </li>
      ))}
    </ul>
  );
}
