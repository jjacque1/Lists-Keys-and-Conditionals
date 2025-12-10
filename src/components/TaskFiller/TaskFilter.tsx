import { useState } from "react";

import type { TaskFilterProps, TaskStatus } from "../../types";

export function TaskFilter(props: TaskFilterProps) {

    const onFilterChange = props.onFilterChange;


    const [selectedStatus, setSelectedStatus] = useState<TaskStatus | undefined>(undefined);


    const[seletedPriority, setSeletedPriority] = useState<"low" | "medium" | "high" | undefined>(undefined);



    function handleStatusChange(event: React.ChangeEvent<HTMLSelectElement>) {
         const selectedValue = event.target.value;

         let newStatus: TaskStatus | undefined;

         if(selectedValue === " " ) { 
            newStatus = undefined;
         } else {
            newStatus = selectedValue as TaskStatus; 
         }

         onFilterChange({
            status: newStatus,
            priority: seletedPriority,
         })
    }


 function handlePriorityChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const selectedValue = event.target.value; 

    let newPriority: "low" | "medium" | "high"  | undefined;

    if(selectedValue === " ") {
        newPriority = undefined;
    } else {
        newPriority = selectedValue as "low" | "medium" | "high";
    }


    setSeletedPriority(newPriority);


    
 }












}