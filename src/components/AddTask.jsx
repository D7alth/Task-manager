import React, { useState } from 'react'
import './AddTask.css'
import Button from './Button'

export default function AddTask({ handleTaskAdd }) {
    const [inputData, setInputData] = useState("");

    const handleInputChange = (e) => {
        setInputData(e.target.value)
    };

    const handleAddTaskClick = () => {
        handleTaskAdd(inputData);
        setInputData("");
    }


    return (
        <div className="add-task-container">
            <input 
            onChange={handleInputChange}
            className="add-task-input"
            value={inputData}
            type="text" />
            ;
            <div className="add-task-button-container">
            <Button onClick={handleAddTaskClick}>
                Adicionar
            </Button>
            </div>
        </div>
    )
}
