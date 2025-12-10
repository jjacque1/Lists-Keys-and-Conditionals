import { useState } from "react";

import type { TaskFilterProps, TaskStatus } from "../../types";

export function TaskFilter(props: TaskFilterProps) {
  const onFilterChange = props.onFilterChange;

  const [selectedStatus, setSelectedStatus] = useState<TaskStatus | undefined>(
    undefined
  );

  const [seletedPriority, setSeletedPriority] = useState<
    "low" | "medium" | "high" | undefined
  >(undefined);

  //==================================================================================

  function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;

    let newStatus: TaskStatus | undefined;

    if (selectedValue === "") {
      newStatus = undefined;
    } else if (selectedValue === "pending") {
      newStatus = "pending";
    } else if (selectedValue === "in-progress") {
      newStatus = "in-progress";
    } else if (selectedValue === "completed") {
      newStatus = "completed";
    }

    setSelectedStatus(newStatus);

    onFilterChange({
      status: newStatus,
      priority: seletedPriority,
    });
  }

  //==================================================================================

  function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value;

    let newPriority: "low" | "medium" | "high" | undefined;

    if (selectedValue === " ") {
      newPriority = undefined;
    } else if (selectedValue === "low") {
      newPriority = "low";
    } else if (selectedValue === "medium") {
      newPriority = "medium";
    } else if (selectedValue === "high") {
      newPriority = "high";
    }

    setSeletedPriority(newPriority);

    onFilterChange({
      status: selectedStatus,
      priority: newPriority,
    });
  }

  //===============================================================================

  return (
    <div className="filters">
      <div className="select-wrapper">
        <p className="para">Status:</p>
        <select className="select"
          value={selectedStatus === undefined ? "" : selectedStatus}
          onChange={handleStatusChange}
        >
          <option value="">All</option>
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>

      <div className="select-wrapper">
        <p className="para">Priority:</p>
        <select className="select"
          value={seletedPriority === undefined ? "" : seletedPriority}
          onChange={handlePriorityChange}
        >
          <option value="">All</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>
    </div>
  );
}
