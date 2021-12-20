import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks';
import {useState, useEffect} from 'react';
import AddTask from './components/AddTask';
import axios from 'axios';

function App() {

  const [tasks, setTasks] = useState([

  ]);


  const [showAddTask, setShowAddTask] = useState(false)

  const baseUrl = "http://localhost:5000/tasks"

  // Create React Update Delete

  // Fetch Tasks

/*   const fetchTask = async()=> {
    const res = await fetch(baseUrl)
    const data = await res.json();
  } */

  // Fetch tasks with axios

  const fetchTask = async() => {
    const {data} = await axios.get(baseUrl);
    setTasks(data)
  }

  useEffect(() => {
    fetchTask();
  }, [])

  // Add Task fetch


/*   const addTask = async(newTask) => {
    const res = await fetch(baseUrl, {
      method:"POST",
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(newTask)
    })
    fetchTask();
  } */

  //* Add Task axios

  const addTask = async (newTask) => {
    await axios.post(baseUrl, newTask)
    fetchTask();
  }

/*   const addTask = (newTask) => {
    console.log("Add Task from App.js")
    const id = Math.floor(Math.random() * 100) + 1;
    const addNewTask = {id, ...newTask}
    setTasks([...tasks, addNewTask])
  }
 */
  // Delete Task Fetch
/* 
  const deleteTask = async (deletedTaskId) => {
    await fetch(`${baseUrl}/${deletedTaskId}`, {
      method:"DELETE",
    })
    fetchTask();
  } */

  // Delete Task axios

  const deleteTask = async (deletedTaskId) => {
    await axios.delete(`${baseUrl}/${deletedTaskId}`)
    fetchTask();
  }


/*   const deleteTask = (deletedTaskId) => {
    console.log("delete", deletedTaskId)
    setTasks(tasks.filter((task) => task.id !== deletedTaskId))
  } */




  // Toogle Done
  const toggleDone = async(toggleDoneId) =>  {
/*     const res = await fetch(`${baseUrl}/${toggleDoneId}`)
    const data = await res.json();
    const updatedTask = {...data, isDone :!data.isDone};
    console.log(updatedTask)
  }
 */
  // ToogleDone axios 
  const {data} = await axios.get(`${baseUrl}/${toggleDoneId}`);
  const updatedTask = {...data, isDone: !data.isDone};
  await axios.put(`${baseUrl}/${toggleDoneId}`, updatedTask)
  fetchTask();
};

// Edit 

//TO DO for you

/*   const toggleDone = (toggleDoneId) => {
    setTasks (
      tasks.map((task) => task.id === toggleDoneId ? {...task, isDone: !task.isDone } : task)
    )
  } */

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
