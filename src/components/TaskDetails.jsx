import React from 'react';
import { useParams, useHistory } from "react-router-dom";

import Button from './Button';

import "./TaskDetails.css"; 

const TaskDetais = () => {
  const params = useParams();
  const history = useHistory();
  
  const handleBackButtonClick = () => {
    history.goBack();
  }
  return ( 
    <>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick} >Voltar</Button>
      </div>
    </>
  
   );
};
 
export default TaskDetais;