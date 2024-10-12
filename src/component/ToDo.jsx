import {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "../App.css";

function ToDo() {
  
  // State to store tasks
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Add a new task
  const addTask = () => {
    if (newTask.trim() === "") return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  // Toggle task completion
  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="cont">
      <ul>
        {tasks.map((task, index) => (

          <li key={index} className={task.completed ? "completed" : ""}>
            <span>{task.text}</span>
            <div className="smlcnt">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTaskCompletion(index)}
            />
            
            <button onClick={() => deleteTask(index)}><FontAwesomeIcon icon={faTrash} /></button>
            </div>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default ToDo