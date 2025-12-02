import React from 'react';

const Task = (props) => {

  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#fa0000ff"; 
      case "Medium":
        return "#b8b01aff"; 
      case "Low":
        return "#097509ff"; 
      default:
        return "#5bb4c4";
    }
  };

  return (
    <div className="card">
      <p className="title">{props.title}</p>
      <p>Due: {props.deadline}</p>
      <p className="description">{props.description}</p>
      <div
        className="priorityStrip"
        style={{ backgroundColor: getPriorityColor(props.priority) }}
      >
        {props.priority}
      </div>
      <button onClick={props.markDone} className='doneButton'>Done</button>
      <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
    </div>
  );
};

export default Task;
