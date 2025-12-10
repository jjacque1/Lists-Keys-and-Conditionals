import './App.css'

import { useState } from "react";
import { Task, TaskStatus } from "./types";
import { TaskList } from "./components/TaskList/TaskList";
import { TaskFilter } from "./components/TaskFilter/TaskFilter";

function App() {

    const initialTasks: Task[] = [
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
    {
      id: "4",
      title: "Make Stupid Moneysss",
      description: "Slowly work my way up the tech space.",
      status: "pending",
      priority: "low",
      dueDate: "12-30-2026",
    },
  ];

  return (

  
    <>
    
    </>
  )
}

export default App
