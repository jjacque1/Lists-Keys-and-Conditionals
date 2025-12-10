import "./App.css";

import { useState } from "react";
import type { Task, TaskStatus } from "./types";
import { TaskList } from "./components/Tasklist/TaskList";
import { TaskFilter } from "./components/TaskFiller/TaskFilter";

const TaskLists: Task[] = [
  {
    id: "4",
    title: "Make Stupid Moneysss",
    description: "Slowly work my way up the tech space.",
    status: "pending",
    priority: "low",
    dueDate: "12-30-2026",
  },
  {
    id: "1",
    title: "Study React",
    description: "Complete Lesson 6 and Lesson 7 labs.",
    status: "in-progress",
    priority: "high",
    dueDate: "12-20-2025",
  },
  {
    id: "2",
    title: "Apply for jobs",
    description: "Search and apply for at least 3 new positions.",
    status: "pending",
    priority: "medium",
    dueDate: "12-22-2025",
  },
  {
    id: "3",
    title: "Finish Assignment",
    description: "Work on the Task Manager lab.",
    status: "completed",
    priority: "high",
    dueDate: "12-10-2025",
  },
];

function App() {
  const [tasks, setTasks] = useState<Task[]>(TaskLists);
  const [statusFilter, setStatusFilter] = useState<TaskStatus | undefined>(
    undefined
  );
  const [priorityFilter, setPriorityFilter] = useState<
    "low" | "medium" | "high" | undefined
  >(undefined);



  function handleStatusChange(taskId: string, newStatus: TaskStatus) {
    setTasks((previousTasks) =>
      previousTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            status: newStatus,
          };
        }

        return task;
      })
    );
  }



function handleDelete(taskId: string) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== taskId)
    );
  }



function handleFilterChange(filters: {
    status?: TaskStatus;
    priority?: "low" | "medium" | "high";
  }) {
    setStatusFilter(filters.status);
    setPriorityFilter(filters.priority);
  }


  const filteredTasks = tasks.filter((task) => {
      const matchesStatus =
        statusFilter === undefined || task.status === statusFilter;
  
      const matchesPriority =
        priorityFilter === undefined || task.priority === priorityFilter;
  
      return matchesStatus && matchesPriority;
    });

  return (
  <>
     <h1>Task Manager</h1>
    
        
          <TaskFilter onFilterChange={handleFilterChange} />
    
          
          <TaskList
            tasks={filteredTasks}
            onStatusChange={handleStatusChange}
            onDelete={handleDelete}
          />
  </>
);
}

export default App;
