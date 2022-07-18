import React, { useState } from 'react';
import { useParams, useHistory } from "react-router-dom";

import Button from './Button';

import "./TaskDetails.css"; 


const TaskDetais = ({handleDetailsAddition}) => {
  const [inputDataDetails, setInputDataDetails] = useState("")
  
  const params = useParams();
  const history = useHistory();
 
  const handleBackButtonClick = () => {
    history.goBack();
  }
  
    const handleInputDetailsChange = (e) => {
      setInputDataDetails(e.target.value);
    }
  
    const handleDetailsClick = () => {
      handleDetailsAddition(inputDataDetails)
    }
  return ( 
    <>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <input onChange={handleInputDetailsChange} value={inputDataDetails} className="task-details-input" type="text" />
      </div>
      <div className="add-details-button">
        <Button onClick={handleDetailsClick}>Salvar</Button>
      </div>
      <div className="back-button-container">
        <Button onClick={handleBackButtonClick} >Voltar</Button>
      </div>
    </>
  
   );
};
 
export default TaskDetais;