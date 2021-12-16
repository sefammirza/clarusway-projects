import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState} from 'react';
import AddTask from './components/AddTask';

function App() {

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Study React Pre-Class Notes",
      day: "Dec 12th at 2:30pm",
      isDone: false,
    },
    {
      id: 2,
      text: "Feed the Dog",
      day: "Dec 13th at 1:30pm",
      isDone: true,
    },
    {
      id: 3,
      text: "Attend In-Class",
      day: "Dec 14th at 3:00pm",
      isDone: false,
    },
  ]);


  const [showAddTask, setShowAddTask] = useState(false)

  // Add Task

  const addTask = (newTask) => {
    /* console.log("Add Task from App.js") */
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = {id, ...newTask}
    setTasks([...tasks, addNewTask])
  }

  // Delete Task

  const deleteTask = (deletedTaskId) => {
    /* console.log("delete", deletedTaskId) */
    setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  }

  // Toogle Done

  const toggleDone = (toggleDoneId) => {
    setTasks (
      tasks.map((task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone } : task)
    )
  }

  // Show  Add task

  const toggleShow = () => setShowAddTask(!showAddTask);

  return (
    <div className="container">
      <Header title="TASK TRACKER" showAddTask={showAddTask} toggleShow={toggleShow}/>
      {showAddTask && <AddTask addTask={addTask}/>}
      {
        tasks.length > 0 ? <Tasks tasks={tasks} deleteTask={deleteTask}  toggleDone={toggleDone}/> : 
        <p style={{textAlign: "center"}}>No Task To Show</p>
      }
      
    </div>
  );
}

export default App;
