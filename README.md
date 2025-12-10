# Project Name

Lists, Keys, and Conditionals Lab

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
How did you ensure unique keys for your list items?

i give each tasks an id and give the list item a key of id so its unique.

What considerations did you make when implementing the filtering functionality?


How did you handle state updates for task status changes?
What challenges did you face when implementing conditional rendering?
