import {createContext, useState, useEffect} from 'react';

// context created
export const TasksContext = createContext();

export const  Tasksprovider = ({children})=> {
    const[allTasks, setAllTasks] = useState([]);

     useEffect(() => {
    const tasksFromStorage = JSON.parse(localStorage.getItem("tasks")) || [];
    setAllTasks(tasksFromStorage);
  }, []);

//   addTask
const addTask = (newTask) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = [...prevTasks, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

// deleteTask
const deleteTask = (title) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = prevTasks.filter((task) => task.title !== title);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

// edit task
const editTask = (title, updatedTaskData) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.title === title ? { ...task, ...updatedTaskData } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };

  const markComplete = (title) => {
    setAllTasks((prevTasks) => {
      const updatedTasks = prevTasks.map((task) =>
        task.title === title ? { ...task, isComplete: !task.isComplete } : task
      );
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      return updatedTasks;
    });
  };




    return (

      <TasksContext.Provider value={{ allTasks, addTask, deleteTask, editTask, markComplete }}> 
        {children}
      </TasksContext.Provider>
    )




}


