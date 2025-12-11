# Project Name

Lists, Keys, and Conditionals Lab

# My Solution ScreenShot: 

![alt text](src/assets/taskManagerScreenShot.png)

# How to Use:

1. cd into your project folder in vscode, run npm run dev
2. app will open in default browser
3. ther are 2 ways to filter tasks: by status and by priority, select an option from the filter dropdown menu at the top of the page right under "Task Manager" Title
4. you can also change the status of task by selecting an option from the dropdown menu inside the task card itself
5. if you change a task's status from "In Progress" to "Pending"... that task will now show up with all pending task using the top status filter
6. you can also delete task as you wish, just click the red delete button under the task you wish to delete.
7. refresh you page to display all tasks included onec you previous deleted

# Challenges: 

1. I struggle to make both status filter and priority filter work congruently,  i wanted the UI to dispaly a tasks if it is for example: pending and low priority, or completed and high priority. Not just all pending tasks if pending is selected or completed tasks if completed is selected. At first my filter logic was only display either status or priority, if the user select pending tasks, and low priority tasks, only all pending tasks showed up EVEN if they were high priority. So both filters had independent logics. 

How i fix the bug was to intergrate both logic inside App.tsx like this:  

 const filteredTasks = tasks.filter((task) => {
      const matchesStatus =
        statusFilter === undefined || task.status === statusFilter;
  
      const matchesPriority =
        priorityFilter === undefined || task.priority === priorityFilter;
  
      return matchesStatus && matchesPriority;
    });


# planning

User selects a new status from the dropdown
    =>
TaskItem reads the selected value (e.target.value)
    =>
TaskItem calls onStatusChange(task.id, newStatus)
    =>
App receives the call and updates that task's status in state
    =>
React re-renders, and TaskItem now shows the updated status

User clicks the "Delete" button
    =>
TaskItem calls onDelete(task.id)
    =>
App removes that task from the tasks list in state
    =>
React re-renders, and this TaskItem disappears from the list

# Reflection Questions
1. How did you ensure unique keys for your list items?

i give each tasks an id and give the list item a key of id so its unique.

2. What considerations did you make when implementing the filtering functionality?

I had to ensure both filters work congruently as discribed in my # Challenges section. As well as UI/UX. For example: Where is the best location for a filter vs a delete button. 

3. How did you handle state updates for task status changes?

Inside App component, i made sure to set the setStatusFilter and setPriorityFilter after status change logic but before return/rendering, that way the setters will be aware of the state change before rerendering. 

# Boiler Plate Codes:

// types/index.ts
export type TaskStatus = 'pending' | 'in-progress' | 'completed';
 
export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'low' | 'medium' | 'high';
  dueDate: string;
}
 
export interface TaskListProps {
  tasks: Task[];
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskItemProps {
  task: Task;
  onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
  onDelete: (taskId: string) => void;
}

// types/index.ts
export interface TaskFilterProps {
  onFilterChange: (filters: {
    status?: TaskStatus;
    priority?: 'low' | 'medium' | 'high';
  }) => void;
}

# Project Requirements 

1. Component Implementations

2. List Management

3. Visual Feedback

4. component Composition


# Ackowledgements 

