import React, { useState } from 'react';
import {v4 as uuidv4 } from 'uuid'; 
import Tasks from './components/Tasks';
import './App.css'
import AddTask from './components/AddTask';


const App = () => {
  const [task, setTask] = useState([
    {id: '1', title: 'Estudar programação', completed:false}

  ]);
  const handleTaskClick = (taskId) => {
    const newTasks = task.map((task) => {
      if(task.id === taskId) return { ... task, completed: !task.completed};
      return task
    })

    setTask(newTasks)
  }

  const handleTaskAdd = (taskTitle) => {
      const newTasks = [...task, {
        title: taskTitle,
        id:uuidv4(),
        completed: false,
      },
    ];
      setTask(newTasks)
  }
  const handleTaskDeletion = (taskId) => {
    const newTasks = task.filter(task => task.id !== taskId)
    setTask(newTasks)
  }

  return (
  <>
      <div className="container">
        <AddTask handleTaskAdd={handleTaskAdd}/>
        <Tasks tasks={task} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
      </div>
     
  </> 
  )
}

export default App