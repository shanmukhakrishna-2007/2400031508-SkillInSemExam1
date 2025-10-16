import React, { useState } from 'react';

function TodoList() {
  // State for the current input
  const [task, setTask] = useState('');
  // State for the list of tasks
  const [tasks, setTasks] = useState([]);

  // Handler to add task
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  return (
    <div>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {tasks.map((item, index) => (
          <li key={index}>{item}</li> // Rendering tasks dynamically
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
 
