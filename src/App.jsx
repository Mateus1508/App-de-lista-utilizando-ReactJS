import React,{ useState } from 'react';;
import {v4 as uuidv4} from 'uuid';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.css";

import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskDetails from './components/TaskDetails';

export default function App() {
  const [tasks, setTasks] = useState([]);

  const handleTaskAddition = (taskTitle) => {
    const newTasks = [
      ...tasks,
      {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
      },
    ];
    if (tasks.indexOf(newTasks) !== -1) return;
    
   setTasks(newTasks);
  }

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return { ...task, completed: !task.completed};

      return task;
    });
    setTasks(newTasks);
  };

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);

    setTasks(newTasks);
  }
 
  return (
  <Router>
  <div className="container">
    <Header />
    <Route path="/" exact render={() => ( 
    <>
    <AddTask handleTaskAddition={handleTaskAddition} />
    <Tasks 
      tasks={tasks} 
      handleTaskClick={handleTaskClick} 
      handleTaskDeletion={handleTaskDeletion} 
    />
    </>
      )}
    />
    <Route path="/:taskTitle" exact component={TaskDetails}/>
      </div>
  
  </Router>
  );
}

     