import React from "react";
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from "react-router-dom";

import "./Task.css";

const Task = ({ task, handleTaskClick, handleTaskDeletion }) => {
  const history = useHistory();

  const handleTaskDetails = () => { history.push(`/${task.title}`)
}
  return (
    
    <div className="task-container" style={task.completed ? { borderLeft: "5px solid #87CEFA"} : {} }>
     
      <div className="task-title" onClick={ () => handleTaskClick(task.id)} >
        {task.title}
      </div>

      <div className="buttons-container" >
        <button className="see-task-button" onClick={handleTaskDetails} ><CgInfo /></button>
        <button className="remove-task-button" onClick={ () => handleTaskDeletion(task.id)}><CgClose /></button>
      </div>

      
      
    
    </div>
  
    )
};

export default Task;